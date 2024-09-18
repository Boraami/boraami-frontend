import { useState } from "react";
import { Tabs, useNavigation } from "expo-router";
import { Image, Dimensions, View, useColorScheme, TouchableOpacity } from "react-native";
import { colorScheme } from "../../src/themes/theme";
import { DrawerActions} from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function LogoTitle() {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconTheme = isDarkTheme ?
      require('../../assets/dark.png') :
      require('../../assets/light.png');
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
  const barColor = isDarkTheme ? '#140233' : '#F7F3FF';

  const handleNotificationactive = () => {
    setIsActive(true);
  };

  const handleNotificationInactive = () => {
    setIsActive(false);
  };
  const notifBag = isActive ? notifDotColor : 'transparent';
  const navigate = useNavigation();
  console.log();
  return (
    <Tabs screenOptions={{
      headerShown: true,
        headerRight: () => <LogoTitle />,
        headerStyle: {
            backgroundColor: barColor,
            borderBottomColor: dividerColor,
            borderBottomWidth: 0.5
        },
      tabBarShowLabel: false,
      tabBarActiveTintColor: activeIconColor,
      tabBarInactiveTintColor: defaultIconColor,
      tabBarStyle: {
        height: 56,
        backgroundColor: navBarColor, //boraami.50
        borderTopColor: dividerColor,
      },
    }}>
      <Tabs.Screen name="home/index"
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />)
        }} />
      <Tabs.Screen name="search/search"
        options={{
          tabBarLabel: 'Search',
          title: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />)
        }} />
      <Tabs.Screen name="notification/notification"
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
            <MaterialIcons name="notifications" size={24} color={color} />)
        }} />
      <Tabs.Screen name="drawer/drawer_trigger"
        options={{
          title: 'Drawer',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="menu" size={24} color={color} />),
            tabBarButton: (props) => (
              <TouchableOpacity
               {...props} onPress={() => navigate.dispatch(DrawerActions.openDrawer())}/>
            )
        }} />
        <Tabs.Screen name="(drawer)/coffee/coffee" options={{title: 'Coffee', href: null}}/>
        <Tabs.Screen name="(drawer)/conduct/conduct" options={{title: 'Conduct',href: null}}/>
        <Tabs.Screen name="(drawer)/profile/profile" options={{title: 'Profile',href: null}}/>
        <Tabs.Screen name="(drawer)/terms/terms" options={{title: 'Terms',href: null}}/>
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