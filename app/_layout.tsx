import { StatusBar } from "expo-status-bar";
import { Text, View, useColorScheme } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Button, TamaguiProvider } from "tamagui";
import { Stack } from "expo-router";
import { Tabs } from "expo-router";

import { config } from "./../tamagui.config";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Tabs />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
