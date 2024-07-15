import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { TamaguiProvider } from "tamagui";
import { config } from "./../tamagui.config";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Toasts } from '@backpackapp-io/react-native-toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";
import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
} from "@expo-google-fonts/open-sans";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
import "../tamagui.css";
import "@tamagui/core/reset.css";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null; // Display nothing while fonts are loading
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            {Constants.expoConfig?.extra?.storybookEnabled ? <Storybook /> : <Tabs />}
            <Toasts />
          </ThemeProvider>
        </TamaguiProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
