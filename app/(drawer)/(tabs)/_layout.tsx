import { useRef, useState } from "react";
import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';
import { Image, Dimensions, View, useColorScheme } from "react-native";
import { colorScheme } from "../../../src/themes/theme";
import { DrawerToggleButton } from "@react-navigation/drawer";

function LogoTitle() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconTheme = isDarkTheme ?
      require('/home/kmarguyne/boraami/boraami-frontend/assets/dark.png') :
      require('/home/kmarguyne/boraami/boraami-frontend/assets/light.png');
  return (
      <View>
          <Image
              style={{ alignSelf: 'flex-end', width: 101, height: 48 }}
              source={iconTheme}
          />
      </View>
  );
}


export default function TabsLayout() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[100] : colorScheme.boraami[700];
  const activeIconColor = isDarkTheme ? colorScheme.serendipity[300] : colorScheme.serendipity[500];
  const navBarColor = isDarkTheme ? colorScheme.boraami[900] : colorScheme.boraami[50];
  const dividerColor = isDarkTheme ? colorScheme.boraami[600] : colorScheme.boraami[300];
  const notifDotColor = isDarkTheme ? colorScheme.butter[400] : colorScheme.butter[400];
  const [isActive, setIsActive] = useState(false);
  const toodleColor = isDarkTheme ? 'white' : 'black';
  const barColor = isDarkTheme ? '#140233' : '#FFFFFF';

  const handleNotificationactive = () => {
    setIsActive(true);
  };

  const handleNotificationInactive = () => {
    setIsActive(false);
  };
  return (
    <Tabs screenOptions={{
      headerLeft: () => <DrawerToggleButton
          tintColor={toodleColor}
        />,
        headerRight: () => <LogoTitle />,
        headerStyle: {
            backgroundColor: barColor
        },
      headerShown: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: activeIconColor,
      tabBarInactiveTintColor: defaultIconColor,
      tabBarStyle: {
        height: 56,
        backgroundColor: navBarColor, //boraami.50
        borderTopColor: dividerColor,
        shadowColor: '#C2A0FF',
        shadowOffset: {width: 0, height: -1},
      },
    }}>
      <Tabs.Screen name="home"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />)
        }} />
      <Tabs.Screen name="search"
        options={{
          tabBarLabel: 'Search',
          title: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />)
        }} />
      <Tabs.Screen name="notification"
        options={{
          tabBarLabel: 'Notification',
          title: 'Notification',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="bell" size={24} color={color} />)
        }} />
      <Tabs.Screen name="settings"
        options={{
          tabBarLabel: 'Settings',
          title: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="menu" size={24} color={color} />)
        }} />
    </Tabs>
  )
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}