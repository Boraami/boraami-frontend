import { useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { TamaguiProvider } from "tamagui";
import { config } from "./../tamagui.config";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import "@tamagui/core/reset.css";
import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
} from "@expo-google-fonts/open-sans";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
  });
  const colorScheme = useColorScheme();

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Tabs />
        {/* <Stack screenOptions={{ headerShown: false }}>
        </Stack> */}
      </ThemeProvider>
    </TamaguiProvider>
  );
}
