import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";

export default function Page() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const barColor = isDarkTheme ? '#140233' : '#FFFFFF';
  const borderColor = isDarkTheme ? '#7957B5' : '#C2A0FF';
  const toodleColor = isDarkTheme ? 'white' : 'black';

  return (
      <Stack screenOptions={{
        contentStyle: {
          borderColor: borderColor,
          borderWidth: 1,
        },
        headerLeft: () => <DrawerToggleButton
          tintColor={toodleColor}
        />,
        headerStyle: {
          backgroundColor: barColor
        },
      }} />
  );
}