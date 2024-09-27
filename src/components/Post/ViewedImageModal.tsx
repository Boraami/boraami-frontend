import React, { useState,useEffect, } from "react";
import { XStack,  Button, YStack,  } from "tamagui";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Pressable,Animated, StatusBar, Modal, Linking, Alert, Platform} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import ViewedPostOptionsMenu from "./ViewedPostOptionsMenu";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import PostEngagement from './PostEngagement'


type ImageModalProps = {
  showDialog: boolean;
  setShowDialogue: (show: boolean) => void;
  images: { url: string }[];
  currentIndex: number;
  setOptionsMenu: (show: boolean) => void;
  optionsMenu: boolean;
  dateTime: string;
  modalType: 'ViewTLPost' | 'ViewDMImg' | 'ViewPfp'  ;
};

const ViewedImageModal = ({
  showDialog,
  setShowDialogue,
  images,
  currentIndex,
  setOptionsMenu,
  optionsMenu,
  dateTime,
  modalType,
}: ImageModalProps) => {
  const [isEngagementVisible, setEngagementVisible] = React.useState(true);
  const [menuAnimation] = useState(new Animated.Value(0.5)); 
  const showMenu = () => {
    setOptionsMenu(true);
    Animated.timing(menuAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const hideMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setOptionsMenu(false);
    });
  };

  const requestMediaLibraryPermission = async () => {
    const { status } = await MediaLibrary.getPermissionsAsync();
    if (status === 'granted') {
      return true; // Permission already granted
    }
    if (status === 'denied') {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (!granted) {
        showPermissionAlert();
        return false;
      }
      return true;
    }
    if (status === 'undetermined') {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      return granted;
    }
    return false;
  };

  const showPermissionAlert = () => {
    Alert.alert(
      'Permission Denied',
      'Please enable media library permissions in your device settings to save images.',
      [
        {
          text: 'Open Settings',
          onPress: () => openAppSettings(),
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  const saveImageToGallery = async (imageUrl: string) => {
    setOptionsMenu(false)
    try {
      //Requesting media library permissions
      const hasPermission = await requestMediaLibraryPermission();
      if(!hasPermission) return;
      //Downloading the image to the cache directory
      const localFilePath = `${FileSystem.cacheDirectory}downloaded-image.jpg`; // Temporary file path
      const downloadResult = await FileSystem.downloadAsync(imageUrl, localFilePath);
      if (downloadResult.status === 200) {
        //Saving the downloaded image to the gallery
        const asset = await MediaLibrary.createAssetAsync(downloadResult.uri);
        await MediaLibrary.createAlbumAsync('Boraami', asset, true); // Create or add to album - becauseof this every time user saves img, it sees an alert askking permission. it cant be removed as its for security reasons.
        //Delete the temporary file after saving
        await FileSystem.deleteAsync(downloadResult.uri);
        Alert.alert('Success', 'Image has been saved to your gallery.');
      } else {
        Alert.alert('Error', `Failed to download image. Status code: ${downloadResult.status}`);
      }
    } catch (error) {
      console.error('Error saving image:', error);
      Alert.alert('Error', `Failed to save image: ${error}`);
    }
  };

  return (
    <Modal
      visible={showDialog}
      onRequestClose={() => setShowDialogue(false)}
      transparent={true}
      animationType='fade'
      statusBarTranslucent={true}
    >
    <XStack flex={1} backgroundColor='rgba(0,0,0,1)'>
      <StatusBar hidden={true} />
      <XStack flex={1}>
        <XStack flex={1}>
          <ImageViewer
            imageUrls={images}
            renderIndicator={() => <XStack />}
            style={{ flex: 1, width: '100%'}}
            index={currentIndex}
            onSwipeDown={() => setShowDialogue(false)}
            enableSwipeDown={true}
            saveToLocalByLongPress={false}
            onClick={() => setEngagementVisible(!isEngagementVisible)}
          />
        </XStack>
      {isEngagementVisible && (
        <XStack position='absolute' top={40} right={10} backgroundColor='rgba(0,0,0,0.7)' borderRadius={100}>
          <Button alignSelf='flex-start' 
          onPress={() => {
            if (optionsMenu) {
              hideMenu();
            } else {
              showMenu();
            }
          }} 
          circular>
            <FontAwesome6 name="ellipsis-vertical" size={18} color={'#fff'} />
          </Button>
        </XStack>
      )}
      {optionsMenu && (
        <>
        <Pressable style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} onPress={hideMenu} />
        <Animated.View
            style={{
              position: 'absolute',
              top:85,
              right: 55,
              width: 115,
              height: 55,
              backgroundColor: 'white',
              borderRadius: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 100,
              opacity: menuAnimation,
              transform: [
                /*{
                  translateY: menuAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 5], 
                  }),
                }, //sliding animation */
                {  
                  scale: menuAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1], 
                  }),
                }, //scaling animation
              ],
            }}
          >
        <YStack
          
          backgroundColor='white'
          flexWrap="wrap"
          borderRadius={4}
          shadowColor='#000'
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.3}
          shadowRadius={4}
          elevation={100}
        >
        <ViewedPostOptionsMenu data={[
          {
            menuText: "Save Image ",
            iconName: "download",
            handleAction: () => {
              saveImageToGallery(images[currentIndex]?.url);
            },
          },
        ]} />
        </YStack>
        </Animated.View>
        </>
      )}
      {isEngagementVisible && (
        <XStack position='absolute' top={40} left={10} borderRadius={100} backgroundColor='rgba(0,0,0,0.7)'>
          <Button alignSelf='flex-start' onPress={() => setShowDialogue(false)} circular>
            <FontAwesome name="chevron-left" size={16} color={'#fff'} />
          </Button>
        </XStack>
      )}
      {modalType==='ViewTLPost' && isEngagementVisible && (
      <YStack
        position='absolute'
        bottom={0}
        left={0}
        right={0}
        paddingHorizontal={20}
        height={60}
        backgroundColor='rgba(0,0,0,0.7)'
      >
        <PostEngagement dateTime={dateTime} type='ViewedPost' />
      </YStack>
      )}
      </XStack>
    </XStack>
  </Modal>
  );
};

export default ViewedImageModal;
