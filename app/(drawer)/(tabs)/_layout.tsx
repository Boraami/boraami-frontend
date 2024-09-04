import { useState } from "react";
import { Tabs, useNavigation } from "expo-router";
import { FontAwesome, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';
import { Image, Dimensions, View, useColorScheme, TouchableOpacity } from "react-native";
import { colorScheme } from "../../../src/themes/theme";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerActions} from '@react-navigation/native';

function LogoTitle() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconTheme = isDarkTheme ?
      require('../../../assets/dark.png') :
      require('../../../assets/light.png');
  return (
      <View>
          <Image
              style={{
                alignSelf: 'flex-end',
                marginRight: 24,
                marginTop: 7,
                width: 101,
                height: 48 }}
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
  const notifDotColor = colorScheme.butter[400];
  const [isActive, setIsActive] = useState(false);
  const toodleColor = isDarkTheme ? 'white' : 'black';
  const barColor = isDarkTheme ? '#140233' : '#FFFFFF';

  const handleNotificationactive = () => {
    setIsActive(true);
  };

  const handleNotificationInactive = () => {
    setIsActive(false);
  };
  const notifBag = isActive ? notifDotColor : 'transparent';
  const navigate = useNavigation();

  return (
    <Tabs screenOptions={{
      headerShown: false,
        headerRight: () => <LogoTitle />,
        headerStyle: {
            backgroundColor: barColor
        },
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
      <Tabs.Screen name="home/index"
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />)
        }} />
      <Tabs.Screen name="search/index"
        options={{
          tabBarLabel: 'Search',
          title: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />)
        }} />
      <Tabs.Screen name="notification/index"
        options={{
          tabBarLabel: 'Notification',
          title: 'Notification',
          tabBarShowLabel: false,
          tabBarBadge: '',
          tabBarBadgeStyle: {
            backgroundColor: notifDotColor,
            top: 4,
            left: 1,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="bell" size={24} color={color} />)
        }} />
      <Tabs.Screen name="settings/index"
        options={{
          tabBarLabel: 'Settings',
          title: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="menu" size={24} color={color} />),
            tabBarButton: (props) => (
              <TouchableOpacity
               {...props} onPress={() => navigate.dispatch(DrawerActions.openDrawer())}/>
            )
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