import { router, useNavigation, usePathname } from "expo-router";
import { View, useColorScheme } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { Avatar, SizableText } from "tamagui";
import { colorScheme } from "../../../src/themes/theme";
import { PoppinsReg } from "../../../src/themes/fonts/fontPoppins";
import { OpenSansReg } from "../../../src/themes/fonts/fontOpenSans";

interface DrawerProps {
  navigation: any;
  name: string;
  userName: string;
  followers: number;
  following: number;
}

function FollowCount(props: DrawerProps) {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const tabTextColor = isDarkTheme ? "white" : "black";

  const { followers, following } = props;

  return (
    <View
      style={{
        //follow count
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        gap: 40,
        marginBottom: 19,
        marginTop: 19,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <SizableText
          style={{
            //67
            fontSize: 16,
            fontFamily: "",
            color: tabTextColor,
            fontWeight: 700,
          }}
        >
          {following}
        </SizableText>
        <SizableText
          style={{
            fontSize: 16,
            fontFamily: "",
            fontWeight: 400,
            color: tabTextColor,
          }}
        >
          Following
        </SizableText>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <SizableText
          style={{
            //208
            fontSize: 16,
            fontFamily: "",
            color: tabTextColor,
            fontWeight: 700,
          }}
        >
          {followers}
        </SizableText>
        <SizableText
          style={{
            fontSize: 16,
            fontFamily: "",
            fontWeight: 400,
            color: tabTextColor,
          }}
        >
          Followers
        </SizableText>
      </View>
    </View>
  );
}

function UserInfo(props: DrawerProps) {
  const { name, userName } = props;

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const tabTextColor = isDarkTheme ? "white" : "black";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[700];

  return (
    <View
      style={{
        //user info
        display: "flex",
        width: 256,
        justifyContent: "center",
        flexDirection: "column",
        alignSelf: "center",
        marginLeft: 9,
        gap: 4,
      }}
    >
      <SizableText
        style={{
          fontSize: 16,
          fontWeight: "bold",
          fontFamily: PoppinsReg.family,
          lineHeight: 20,
          fontStyle: "normal",
          color: tabTextColor,
        }}
      >
        {name}
      </SizableText>
      <SizableText
        style={{
          fontSize: 12,
          fontStyle: "normal",
          lineHeight: 16,
          fontFamily: OpenSansReg.family,
          color: defaultIconColor,
        }}
      >
        @{userName}
      </SizableText>
    </View>
  );
}

function UserDisplay(props: DrawerProps) {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[500];
  const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.mono[400];
  const tabTextColor = isDarkTheme ? "white" : "black";

  return (
    <View
      style={{
        //user display
        display: "flex",
        gap: 8,
        flexDirection: "column",
        marginTop: 19,
        borderBottomColor: dividerColor,
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View
          style={{
            //avatar
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: 64,
            height: 64,
            flexDirection: "row",
            marginTop: 16,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Avatar circular size={64}>
            <Avatar.Fallback bc={defaultIconColor} />
          </Avatar>
          <UserInfo {...props} />
        </View>
        <View style={{}}>
          <FollowCount {...props} />
        </View>
      </View>
    </View>
  );
}

type DrawerItemStyleTypes = {
  style: {
    display: "flex" | "none" | undefined;
    alignItems: "flex-start";
    gap: 12;
  };
  labelStyle: {};
};

export default function CustomDrawerContent(props: DrawerProps) {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.boraami[600];
  const navBarColor = isDarkTheme ? colorScheme.boraami[900] : colorScheme.boraami[50];
  const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.boraami[300];
  const menuColor = isDarkTheme ? colorScheme.boraami[200] : colorScheme.boraami[700];
  const tabTextColor = isDarkTheme ? "white" : "black";
  const pathname = usePathname();

  const drawerItemStyles: DrawerItemStyleTypes = {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
    },
    labelStyle: [
      { color: tabTextColor },
      { marginLeft: -14, fontSize: 16, lineHeight: 24, fontWeight: "400", width: 249 },
    ],
  };

  console.log(pathname);
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        width: "100%",
      }}
    >
      <DrawerContentScrollView
        {...props}
        style={{
          backgroundColor: navBarColor,
          position: "relative",
        }}
      >
        <View style={{ flex: 1, position: "relative" }}>
          <View
            style={{
              //top bar
              borderBottomColor: dividerColor,
              borderBottomWidth: 1,
              display: "flex",
              gap: 100,
              flexDirection: "row",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <View style={{ alignSelf: "flex-start" }}>
              <SizableText
                style={{
                  fontSize: 16,
                  fontStyle: "normal",
                  fontFamily: "monospace",
                  color: menuColor,
                  fontWeight: 700,
                  lineHeight: 20,
                  marginTop: 15,
                  paddingTop: 4,
                  marginBottom: 15,
                }}
              >
                Menu
              </SizableText>
            </View>
          </View>
          <UserDisplay {...props} />
        </View>
        <View
          style={{
            display: "flex",
            gap: 8,
            marginTop: 19,
            justifyContent: "center",
          }}
        >
          <View>
            <DrawerItem
              label={"Profile"}
              onPress={() => router.push("/profile")}
              style={drawerItemStyles.style}
              labelStyle={drawerItemStyles.labelStyle}
              icon={({ size }) => (
                <FontAwesome6 name="user-large" size={size} color={defaultIconColor} />
              )}
            />
          </View>
          <DrawerItem
            label={"Buy us a Coffee"}
            onPress={() => {
              router.push("coffee/");
            }}
            style={drawerItemStyles.style}
            labelStyle={drawerItemStyles.labelStyle}
            icon={({ size }) => <FontAwesome name="coffee" size={size} color={defaultIconColor} />}
          />
          <DrawerItem
            label={"Codes of Conduct"}
            onPress={() => {
              router.push("conduct/");
            }}
            style={drawerItemStyles.style}
            labelStyle={drawerItemStyles.labelStyle}
            icon={({ size }) => <FontAwesome6 name="gear" size={size} color={defaultIconColor} />}
          />
          <DrawerItem
            label={"Terms & Conditions"}
            onPress={() => {
              router.push("terms/");
            }}
            style={drawerItemStyles.style}
            labelStyle={drawerItemStyles.labelStyle}
            icon={({ size }) => <FontAwesome6 name="scroll" size={size} color={defaultIconColor} />}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
