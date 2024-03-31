import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
import { Image, View, useColorScheme } from "react-native";

function LogoTitle() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const iconTheme = isDarkTheme ?
    require('/home/kmarguyne/boraami/boraami-frontend/assets/dark.png') :
    require('/home/kmarguyne/boraami/boraami-frontend/assets/light.png');
    return (
        <View>
            <Image
                style={{ alignSelf: 'flex-end', width: 101, height: 48 }}
                source={iconTheme}
            />
        </View>
    );
}


export default function NotificationLayout() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const barColor = isDarkTheme ? '#140233' : '#FFFFFF';
    const borderColor = isDarkTheme ? '#7957B5' : '#C2A0FF';
    const toodleColor = isDarkTheme ? 'white' : 'black';

    return <Stack screenOptions={{
        contentStyle: {
            borderColor: borderColor,
            borderWidth: 1,
        },
        headerLeft: () => <DrawerToggleButton
        tintColor={toodleColor}
        />,
        headerRight: () => <LogoTitle />,
        headerStyle: {
            backgroundColor: barColor
        },
    }} />;
}