import { router, useNavigation, usePathname } from "expo-router";
import { View, useColorScheme, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { Avatar, SizableText, XStack } from "tamagui";
import { colorScheme } from "../../../src/themes/theme";
import { useDrawerStatus } from '@react-navigation/drawer';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';

const Overlay = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const menuColor = isDarkTheme ? colorScheme.mono[0] : colorScheme.mono[0];
  const overlayOpacity = isDarkTheme ? 0.75 : 0.5;
  const navigation = useNavigation();

  return (
    <XStack
      width={"100%"}
      height={"100%"}
      opacity={overlayOpacity}
      backgroundColor={colorScheme.mono[1000]}
      position="absolute"
      left={80}
      right={80}
      zIndex={1}
      justifyContent="flex-end"
      alignItems="flex-end"
      padding={20}
    >
      <TouchableOpacity style={{ bottom: 700, left: -15 }}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <MaterialIcons name="close" size={30} color={menuColor} />
      </TouchableOpacity>
    </XStack>
  );
};

interface DrawerProps {
  navigation: any;
  name: string;
  userName: string;
  followers: number;
  following: number;
};

function FollowCount(props: DrawerProps) {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const tabTextColor = isDarkTheme ? 'white' : 'black';

  const {
    followers,
    following
  } = props;

  return (
    <View style={{ //follow count
      alignItems: 'center',
      flexDirection: 'row',
      display: 'flex',
      gap: 40,
      marginBottom: 19,
      marginTop: 19,
    }}>
      <View style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 8,
      }}>
        <SizableText style={{ //67
          fontSize: 16,
          fontFamily: '',
          color: tabTextColor,
          fontWeight: 700,
        }}>{following}</SizableText>
        <SizableText style={{
          fontSize: 16,
          fontFamily: '',
          fontWeight: 400,
          color: tabTextColor,
        }}>Following</SizableText>
      </View>
      <View style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 8,
      }}>
        <SizableText style={{//208
          fontSize: 16,
          fontFamily: '',
          color: tabTextColor,
          fontWeight: 700,
        }}>{followers}</SizableText>
        <SizableText style={{
          fontSize: 16,
          fontFamily: '',
          fontWeight: 400,
          color: tabTextColor,
        }}>Followers</SizableText>
      </View>
    </View>
  )
}

function UserInfo(props: DrawerProps) {
  const {
    name,
    userName
  } = props;

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const tabTextColor = isDarkTheme ? 'white' : 'black';
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[700];

  return (
    <View style={{ //user info
      display: 'flex',
      width: 256,
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      alignSelf: 'stretch',
      marginLeft: 9,
      gap: -4,
    }}>
      <SizableText style={{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: '',
        color: tabTextColor,
      }}>{name}</SizableText>
      <SizableText style={{
        fontSize: 15,
        fontStyle: 'italic',
        fontFamily: '',
        color: defaultIconColor,
      }}>@{userName}</SizableText>
    </View>

  )
}

function UserDisplay(props: DrawerProps) {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[500];
  const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.mono[400];
  const tabTextColor = isDarkTheme ? 'white' : 'black';

  return (
    <View style={{ //user display
      display: 'flex',
      gap: 8,
      flexDirection: 'column',
      marginTop: 19,
      borderBottomColor: dividerColor,
      borderBottomWidth: 1,
    }}>
      <View style={{
        flexDirection: 'column',
      }}>
        <View style={{ //avatar
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: 64,
          height: 64,
          flexDirection: 'row',
          marginTop: 16,
          marginLeft: 31,
        }}>
          <Avatar circular size={80}>
            <Avatar.Fallback bc={defaultIconColor} />
          </Avatar>
          <UserInfo {...props} />
        </View>
        <View style={{
          marginLeft: 20,
          marginTop: 19,
        }}>
          <FollowCount {...props} />
        </View>
      </View>
    </View>)
}

export default function CustomDrawerContent(props: DrawerProps) {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[500];
  const activeIconColor = isDarkTheme ? colorScheme.serendipity[400] : colorScheme.serendipity[300];
  const navBarColor = isDarkTheme ? colorScheme.boraami[900] : colorScheme.boraami[50];
  const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.boraami[300];
  const menuColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[700];
  const tabTextColor = isDarkTheme ? 'white' : 'black';
  const pathname = usePathname();
  const isDrawerOpen = useDrawerStatus() === 'open';

  console.log(pathname);
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <DrawerContentScrollView {...props}
        style={{
          backgroundColor: navBarColor,
          position: "relative",
          zIndex: 2
        }}>
        <View style={{ flex: 1, position: 'relative' }}>
          <View style={{ //top bar
            borderBottomColor: dividerColor,
            borderBottomWidth: 1,
            display: 'flex',
            gap: 100,
            flexDirection: 'row',
          }}>
            <View style={{ alignSelf: 'flex-start' }}>
              <SizableText style={{
                fontSize: 16,
                fontStyle: 'normal',
                fontFamily: 'monospace',
                color: menuColor,
                fontWeight: 700,
                lineHeight: 20,
                marginLeft: 22,
                marginTop: 15,
                paddingTop: 4,
                marginBottom: 15
              }}>Menu</SizableText>
            </View>
          </View>
          <UserDisplay {...props} />
        </View>
        <View style={{
          display: 'flex',
          gap: 8,
          marginLeft: 36.5,
          marginTop: 19,
          width: 249
        }}>
          <View style={{
            backgroundColor: pathname == "/profile/" ? activeIconColor : navBarColor,
            borderRadius: 8, // Optional: add some styling for better UI (like rounding corners)
          }}>
            <DrawerItem
              label={'Profile'}
              onPress={() => router.push("/profile/")}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
              }}
              labelStyle={[
                { color: pathname == "/profile/" ? "#fff" : tabTextColor },
                { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
              icon={({ size }) => (
                <FontAwesome6 name="user-large"
                  size={size}
                  color={defaultIconColor}
                />)}
            />
          </View>
          <DrawerItem
            label={'Buy us a Coffee'}
            onPress={() => { router.push('coffee/') }}
            style={{
              backgroundColor: pathname == "coffee/" ? activeIconColor : navBarColor,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
            labelStyle={[
              { color: pathname == "coffee/" ? "#fff" : tabTextColor },
              { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
            icon={({ size }) => (
              <FontAwesome name="coffee"
                size={size}
                color={defaultIconColor}
              />)} />
          <DrawerItem
            label={'Codes of Conduct'}
            onPress={() => { router.push('conduct/') }}
            style={{
              backgroundColor: pathname == "conduct/" ? activeIconColor : navBarColor,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
            labelStyle={[
              { color: pathname == "conduct/" ? "#fff" : tabTextColor },
              { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
            icon={({ size }) => (
              <FontAwesome6 name="gear"
                size={size}
                color={defaultIconColor} />)} />
          <DrawerItem
            label={'Terms & Conditions'}
            onPress={() => { router.push('terms/') }}
            style={{
              backgroundColor: pathname == "terms/" ? activeIconColor : navBarColor,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
            labelStyle={[
              { color: pathname == "terms/" ? "#fff" : tabTextColor },
              { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: '400', width: 249 }]}
            icon={({ size }) => (
              <FontAwesome6 name="scroll"
                size={size}
                color={defaultIconColor} />)} />
        </View>
      </DrawerContentScrollView >
      {isDrawerOpen && <Overlay />}
    </View>
  )
}
