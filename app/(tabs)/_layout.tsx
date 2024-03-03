import { useRef } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Animated, Dimensions, Image } from "react-native";

function LogoTitle() {
    return (
      <Image
        style={{ width: 101, height: 48 }}
        source={{ uri: 'assets/Group 273.png' }}
      />
    );
  }

export default function TabsLayout() {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#0EA5E9',
            tabBarInactiveTintColor: '#9B64FF',
            tabBarBadge: '',
            tabBarBadgeStyle: {
                backgroundColor: '#0EA5E9',
                width: 24,
                height: 4,
                
            },
            tabBarStyle: {
                height: 56,
                backgroundColor: '#F7F3FF', //borami.50
                borderTopColor: '#9747FF',
                shadowColor: '#C2A0FF',
            },
            headerShown: true,
            headerTitle: props => <LogoTitle {...props} />,
            }}>
            <Tabs.Screen name="home"
            options={{
                tabBarLabel: 'Home',
                title: 'Home',
                tabBarShowLabel: false,
                tabBarIcon:({ color }) => (
                    <MaterialIcons name="home" size={24} color={color}/>)
            }} />
            <Tabs.Screen name="search"
            options={{
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