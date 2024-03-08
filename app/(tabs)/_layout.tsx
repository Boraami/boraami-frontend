import { useRef } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Animated, Dimensions, View } from "react-native";

const Indicator = () => {
  return (
    <View style={{
      width: 24,
      height: 4,
      backgroundColor: '#0EA5E9',
      position: 'absolute',
      bottom: 58,
      left: 50,
      borderRadius: 20,
      transform: [
          { translateX: tabOffsetValue }
      ]
  }}/>
  )
}

export default function TabsLayout() {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    return (
        <Tabs screenOptions={{
          headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#0EA5E9',
            tabBarInactiveTintColor: '#9B64FF',
            tabBarStyle: {
                height: 56,
                backgroundColor: '#F7F3FF', //borami.50
                borderTopColor: '#9747FF',
                shadowColor: '#C2A0FF',
                shadowOffset: {width: 0, height: -1},
            },
            }}>
            <Tabs.Screen name="home"
            options={{
                title: 'Home',
                tabBarShowLabel: false,
                tabBarIcon:({ color }) => (
                    <MaterialIcons name="home" size={24} color={color}/>)
            }} />
            <Tabs.Screen name="search"
            options={{
              headerShown: false,
                tabBarLabel: 'Search',
                title: 'Search',
                tabBarShowLabel: false,
                tabBarIcon:({ color }) => (
                    <Ionicons name="search-sharp" size={24} color={color}/>)
            }}/>
            <Tabs.Screen name="notification"
            options={{
                tabBarLabel: 'Notification',
                title: 'Notification',
                tabBarShowLabel: false,
                tabBarIcon:({ color }) => (
                    <MaterialCommunityIcons name="bell" size={24} color={color} />)
            }}/>
            <Tabs.Screen name="settings"
            options={{
                tabBarLabel: 'Settings',
                title: 'Settings',
                tabBarShowLabel: false,
                tabBarIcon:({ color }) => (
                    <SimpleLineIcons name="menu" size={24} color={color}/>)
            }}/>
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