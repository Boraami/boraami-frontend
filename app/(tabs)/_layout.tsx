import { Tabs, useNavigation } from "expo-router";
import { Image, View, useColorScheme, TouchableOpacity } from "react-native";
import { colorScheme } from "../../src/themes/theme";
import { DrawerActions } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button, Stack } from "tamagui";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

function LogoTitle() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconTheme = isDarkTheme
    ? require("../../assets/dark.png")
    : require("../../assets/light.png");
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

const CustomTabIconButtons = (props: BottomTabBarButtonProps) => (
  <TouchableOpacity
    activeOpacity={1}
    {...props}
    style={{
      width: "25%",
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {props.children}
  </TouchableOpacity>
);

const CustomTabBarIcon = ({
  color,
  activeIconColor,
  name,
}: {
  color: string;
  activeIconColor: string;
  name: "home" | "search" | "notifications";
}) => (
  <Stack
    borderTopColor={color === activeIconColor ? activeIconColor : "transparent"}
    borderTopWidth={3}
    width={25}
    height={40}
    jc="center"
    position="absolute"
    top={0}
    ai="center"
  >
    <Stack width={23} height={40} jc="center" position="absolute" ai="center" top={0}>
      <MaterialIcons name={name} size={24} color={color} />
    </Stack>
  </Stack>
);

export default function TabsLayout() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[100] : colorScheme.boraami[700];
  const activeIconColor = isDarkTheme ? colorScheme.serendipity[300] : colorScheme.serendipity[500];
  const navBarColor = isDarkTheme ? colorScheme.boraami[900] : colorScheme.boraami[50];
  const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.boraami[300];
  const titleColor = isDarkTheme ? colorScheme.boraami[50] : colorScheme.boraami[700];
  const notifDotColor = colorScheme.butter[400];
  const barColor = isDarkTheme ? "#140233" : "#F7F3FF";

  const navigate = useNavigation();
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerRight: () => <LogoTitle />,
        headerTitleAlign: "left",
        headerTintColor: titleColor,
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerStyle: {
          backgroundColor: barColor,
          borderBottomColor: dividerColor,
          borderBottomWidth: 0.5,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeIconColor,
        tabBarInactiveTintColor: defaultIconColor,
        tabBarStyle: {
          backgroundColor: navBarColor, //boraami.50
          borderTopColor: dividerColor,
        },
      }}
    >
      <Tabs.Screen
        name="boraline/index"
        options={{
          tabBarLabel: "Boraline",
          title: "Boraline",
          tabBarShowLabel: false,
          tabBarButton: (props) => <CustomTabIconButtons {...props} />,
          tabBarIcon: ({ color }) => (
            <CustomTabBarIcon color={color} activeIconColor={activeIconColor} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarLabel: "Search",
          title: "Search",
          tabBarShowLabel: false,

          tabBarButton: (props) => <CustomTabIconButtons {...props} />,
          tabBarIcon: ({ color }) => (
            <CustomTabBarIcon color={color} activeIconColor={activeIconColor} name="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          tabBarLabel: "Notification",
          title: "Notification",
          tabBarShowLabel: false,
          tabBarBadge: "", // this should be visible if only there are unseen notifications so that logic needs to be there in future
          tabBarBadgeStyle: {
            backgroundColor: notifDotColor,
            top: 4,
            left: 1,
          },
          tabBarButton: (props) => <CustomTabIconButtons {...props} />,
          tabBarIcon: ({ color }) => (
            <CustomTabBarIcon
              color={color}
              activeIconColor={activeIconColor}
              name="notifications"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="drawer/index"
        options={{
          title: "Drawer",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="menu" size={24} color={color} />,
          tabBarButton: (props) => (
            <Button width="25%" onPress={() => navigate.dispatch(DrawerActions.openDrawer())}>
              <Stack backgroundColor={"blue"} justifyContent="center" alignItems="center">
                {props.children}
              </Stack>
            </Button>
          ),
        }}
      />
      <Tabs.Screen name="(drawer)/coffee/index" options={{ title: "Coffee", href: null }} />
      <Tabs.Screen name="(drawer)/conduct/index" options={{ title: "Conduct", href: null }} />
      <Tabs.Screen name="(drawer)/profile/index" options={{ title: "Profile", href: null }} />
      <Tabs.Screen name="(drawer)/terms/index" options={{ title: "Terms", href: null }} />
    </Tabs>
  );
}
