import { usePathname, Stack, useRouter } from "expo-router";
import { View, useColorScheme, Image, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { SizableText } from "tamagui";
import { colorScheme } from "../../../src/themes/theme";
import { PoppinsReg } from "../../../src/themes/fonts/fontPoppins";
import { OpenSansReg } from "../../../src/themes/fonts/fontOpenSans";
import BtnField from "../../../src/components/Button/Button";

function Logo() {
  const iconTheme = require("../../../assets/Login/boraami-primary-logo.png");
  return (
    <View>
      <Image
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 190,
          height: 218,
          resizeMode: 'stretch',
        }}
        source={iconTheme}
      />
    </View>
  );
}

export default function StackLayout() {
  const router = useRouter();

  return (
    <ImageBackground source={require("../../../assets/Login/bg-dark.png")}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Logo />
        <SizableText style={{
          top: 20,
          color: 'white',
          fontFamily: PoppinsReg.family,
          fontSize: 16,
          fontWeight: '700',
          fontStyle: 'normal',
          textAlign: 'center'
        }}>We are not seven, with you</SizableText>
        <View style={{
          top: 60
        }}>
          <BtnField name="primary" primary="normal" size="lg" txt="Sign in" onPress={() => router.push('/signIn')} />
          <BtnField name="tertiary" tertiary="normal" size="lg" txt="Create an account" />
        </View>
      </View>
      <Stack
        screenOptions={{
          headerStyle: {
          },
          headerTintColor: '',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
        <Stack.Screen name="signIn" options={{title: 'Sign In', headerShown: true}} />
      </Stack>
    </ImageBackground>
  )
}
