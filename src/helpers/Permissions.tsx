import { Linking, Alert, Platform } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from "@react-native-async-storage/async-storage";

const PERMISSION_DENIAL_KEY = 'mediaLibraryPermissionDenied';

export  const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
};
export const requestMediaLibraryPermission = async () => {
    const deniedCountStr = await AsyncStorage.getItem(PERMISSION_DENIAL_KEY);
    let deniedCount = deniedCountStr ? parseInt(deniedCountStr) : 0;
    const { status, canAskAgain, accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
    // If full access is granted, continue as normal
    if (status === 'granted' && accessPrivileges === 'all') {
        await AsyncStorage.setItem('hasLimitedAccess', 'false');
        await AsyncStorage.setItem(PERMISSION_DENIAL_KEY, '0');
        return { hasPermission: true, limitedAccess: false };
    }
    // If limited access is selected, block it and ask for full access
    if (status === 'granted' && accessPrivileges === 'limited') {
      const selectedMedia = await MediaLibrary.getAssetsAsync();
      if(selectedMedia.totalCount === 0){
        deniedCount++;
        await AsyncStorage.setItem(PERMISSION_DENIAL_KEY, deniedCount.toString());
        Alert.alert(
          'Limited Access Not Supported',
          'Image could not be saved as we need full media library permissions to save images. Please enable full access in the app settings.',
          [{ text: 'Go to Settings', onPress: () => Linking.openSettings() }]
      );
      return {hasPermission: false, limitedAccess: true};
      }
      Alert.alert(
        'Limited Access Not Supported',
        'Image could not be saved as we need full media library permissions to save images. Please enable full access in the app settings.',
        [{ text: 'Go to Settings', onPress: () => Linking.openSettings() }]
    );
      return { hasPermission: false, limitedAccess: true };
    }
    // If permission is denied, guide the user to settings
    if (status !== 'granted') {
      deniedCount++;
      await AsyncStorage.setItem(PERMISSION_DENIAL_KEY, deniedCount.toString());
      if(deniedCount === 1){
        Alert.alert(
          'Permissions Denied',
          'Image could not be saved as we need full media library permissions to save images.',
          [{ text: 'I understand', }]
        );
      } else if (canAskAgain && deniedCount >= 2) {
          deniedCount++;
          await AsyncStorage.setItem(PERMISSION_DENIAL_KEY, deniedCount.toString());
            Alert.alert(
              'Permission Denied',
              'Image could not be saved as we need full media library permissions to save images. Please enable media library permissions in the app settings.',
              [{ text: 'Go to Settings', onPress: () => Linking.openSettings() }]
            );
        } else {
          await AsyncStorage.setItem(PERMISSION_DENIAL_KEY, '2');
          Alert.alert(
            'Permission Denied',
            'Image could not be saved as we need full media library permissions to save images. Please enable media library permissions in the app settings.',
            [{ text: 'Go to Settings', onPress: () => Linking.openSettings() }]
          );
        }
        return { hasPermission: false, limitedAccess: false };
      }
      return { hasPermission: false, limitedAccess: false };
};
