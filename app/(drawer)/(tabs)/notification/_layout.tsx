import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function NotificationLayout() {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const borderColor = isDarkTheme ? '#7957B5' : '#C2A0FF';

    return <Stack screenOptions={{
        contentStyle: {
            borderColor: borderColor,
            borderWidth: 1,
        },
    }} />;
}