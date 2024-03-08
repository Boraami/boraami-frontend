import { Stack } from "expo-router";
import { Animated, Dimensions, Image, View } from "react-native";

function LogoTitle() {
    return (
        <View>
            <Image
            style={{ alignSelf: 'flex-end', width: 101, height: 48 }}
            source={require('/home/kmarguyne/boraami/boraami-frontend/assets/Group 273.png')}
            />
      </View>
    );
  }

export default function NotificationLayout() {
    return <Stack screenOptions={{
        headerRight: () => <LogoTitle />
    }}/>;
}