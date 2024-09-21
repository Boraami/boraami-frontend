import { useEffect, useState } from "react";
import { useColorScheme, View, Image, TouchableOpacity } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { TamaguiProvider } from "tamagui";
import { config } from "./../tamagui.config";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import Storybook from "../.storybook";
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
import CustomDrawerContent from "./(tabs)/drawer";
import Drawer from "expo-router/drawer";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function LogoTitle() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconTheme = isDarkTheme ? require("../assets/dark.png") : require("../assets/light.png");
  return (
    <View>
      <Image
        style={{
          alignSelf: "flex-end",
          marginRight: 24,
          marginTop: 7,
          width: 101,
          height: 48,
        }}
        source={iconTheme}
      />
    </View>
  );
}

const CloseButton = () => {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";

  if (!isDrawerOpen) return null; // Only show the overlay when drawer is open

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
        <MaterialIcons name="close" size={30} color={"#FFFFFF"} />
      </TouchableOpacity>
    </View>
  );
};

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
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const toodleColor = isDarkTheme ? "white" : "black";
  const barColor = isDarkTheme ? "#140233" : "#FFFFFF";
  const router = useRouter();
  const drawerWidth = 300;
  const overlayOpacity = isDarkTheme ? 0.75 : 0.5;

  useEffect(() => {
    if (fontsLoaded) {
      router.push("/boraline");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {Constants.expoConfig?.extra?.storybookEnabled ? (
          <Storybook />
        ) : (
          <Drawer
            drawerContent={(props) => (
              <CustomDrawerContent
                name={"Yoongi's Wife"}
                userName={"tangerines4life"}
                followers={208}
                following={67}
                {...props}
              />
            )}
            screenOptions={{
              drawerStyle: {
                width: drawerWidth,
              },
              headerShown: false,
              drawerType: "front",
              overlayColor: `rgba(0, 0, 0, ${overlayOpacity})`,
              headerRight: () => <LogoTitle />,
              headerStyle: {
                backgroundColor: "#fff",
              },
            }}
          >
            <Drawer.Screen name="(tabs)" options={{ title: "Tabs" }} />
          </Drawer>
        )}
      </ThemeProvider>
    </TamaguiProvider>
  );
}
