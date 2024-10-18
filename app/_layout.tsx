import { useEffect, useState } from "react";
import { useColorScheme, View, Image } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { TamaguiProvider } from "tamagui";
import { config } from "./../tamagui.config";
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
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toasts } from "@backpackapp-io/react-native-toast";
import SplashScreenComponent from "../src/components/Splash/Splash";
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

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

function cacheFonts(fonts: { [key: string]: Font.FontSource }) {
  return Font.loadAsync(fonts);
}

function cacheImages(images: (string | number)[]) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const colorScheme = useColorScheme();
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const router = useRouter();
  const drawerWidth = 300;
  const overlayOpacity = isDarkTheme ? 0.75 : 0.5;
  const [isSplashVisible, setSplashVisible] = useState(true);
  const isStorybookEnabled = Constants.expoConfig?.extra?.storybookEnabled;
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync(); // Prevent splash screen auto-hide

        // Cache fonts (custom fonts + icons)
        const fontAssets = cacheFonts({
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
          ...SimpleLineIcons.font,
          ...MaterialIcons.font,  // Spread to add MaterialIcons
          ...FontAwesome6.font, // just an example, will change later
          ...FontAwesome.font,
          ...Ionicons.font,
        });
        const imageAssets = cacheImages([
          require('./../src/assets/Modals/mnet-image.png'),
          require('../src/assets/loader/Light_loader.svg'),
          require('../src/assets/loader/Dark_loader.svg'),
          require('../assets/boraami-primary-logo.svg'),
          require('../src/assets/Modals/sitting1.png'),
          require('../src/assets/failed-img.png'),
          require('../assets/bg-dark.svg'),
          require('../assets/loader.svg'),
        ]);

        // Load all resources
        await Promise.all([fontAssets, ...imageAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync(); // Hide the splash screen
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    // NOTE: Without isStorybookEnabled variable it was creating Error because of using navigation before mounting Root Layout Component, so now we check if storybook is not enabled only then we push to /boraline otherwise we do nothing
    if (!isStorybookEnabled && !isSplashVisible) {
      router.push("/boraline");
    }
  }, [isSplashVisible]);
/*
  if (!fontsLoaded && !fontError) {
    return null; // Don't render anything until fonts are loaded
  }
 */
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          {isSplashVisible ? (
              <SplashScreenComponent onFinish={() => setSplashVisible(false)} />
            ) : isStorybookEnabled ? (
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
            <Toasts />
          </ThemeProvider>
        </TamaguiProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}