import React from "react";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export function BottomTabNav() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen name="home"
            options={{
                tabBarLabel: "Home",
                title: "Home"}}/>
            <Tabs.Screen name="settings"
            options={{
                tabBarLabel: "Settings",
                title: "Settings"}}/>
        </Tabs>
    )
}

/*
            <Tab.Navigator
                    activeColor='#0EA5E9'
                    inactiveColor='#9B64FF'
                barStyle={{ backgroundColor: '#F7F3FF', //borami.50
                borderTopColor: '#9747FF',
                shadowColor: '#C2A0FF'}}>
            <Tab.Screen
                name="Home"
                component={Feed}
                options={{
            tabBarIcon:({ color }) => (
            <MaterialIcons name="home" size={12} color={color}/>),}}/>
                <Tab.Screen
                name="Search"
                component={Search}
                options={{
                tabBarLabel: 'Search',
            tabBarIcon:({ color }) => (
            <Ionicons name="search-sharp" size={12} color={color}/>),}}/>
            {props.disable?
                <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Notifs',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" size={12} color={color} />
                ),}}/>:
                <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
            tabBarLabel: 'Notifs',
            tabBarIcon: ({ color,  }) => (
                <MaterialCommunityIcons name="bell" size={12} color={color} />
                ),
            tabBarBadge: 'true',
        }}/>
        }
        <Tab.Screen
            name="Settings"
            component={Menu}
            options={{
                tabBarLabel: 'Menu',
        tabBarIcon:({ color }) => (
            <SimpleLineIcons name="menu" size={12} color={color}/>),
        }}/>
    </Tab.Navigator> */

/**
 *             <Tab.Navigator screenOptions={{
                headerShow: false,
                barStyle:{backgroundColor: '#F7F3FF', //borami.50
                borderTopColor: '#9747FF',
                shadowColor: '#C2A0FF'},
                tabBarActiveTintColor: '#0EA5E9',
                tabBarInactiveTintColor: '#9B64FF',
                }}
                >
                <Tab.Screen
                name="Home"
                component={Feed}
                options={{
            tabBarIcon:({ color, size}) => (
            <MaterialIcons name="home" size={size} color={color}/>),}}/>
                <Tab.Screen
                name="Search"
                component={Search}
                options={{headerShown: false,
                tabBarShowLabel: false,
                tabBarLabel: 'Search',
            tabBarIcon:({ color, size}) => (
            <Ionicons name="search-sharp" size={size} color={color}/>),}}/>
            {props.disable?
                <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: 'Notifs',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),}}/>:
                <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabel: 'Notifs',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
            tabBarBadge: '',
            tabBarBadgeStyle: {
            backgroundColor: 'orange',
            minWidth: 14,
            minHeight: 14,
            maxWidth: 14,
            maxHeight: 14,
            borderRadius: 7,},
        }}/>
        }
        <Tab.Screen
            name="Settings"
            component={Menu}
            options={{headerShown: false,
                tabBarShowLabel: false,
                tabBarLabel: 'Menu',
        tabBarIcon:({ color, size}) => (
            <SimpleLineIcons name="menu" size={size} color={color}/>),
        }}/>
        </Tab.Navigator>
 */

/**
 *  <Tab.Navigator screenOptions={{
        tabBarStyle:{backgroundColor: '#F7F3FF', //borami.50
        borderTopColor: '#9747FF',
        shadowColor: '#C2A0FF'},
        tabBarActiveTintColor: '#0EA5E9',
        tabBarInactiveTintColor: '#9B64FF',
        }}>
        <Tab.Screen
        name="Home"
        component={Feed}
        options={{
    tabBarIcon:({ color, size}) => (
    <MaterialIcons name="home" size={size} color={color}/>),}}/>
        <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: 'Search',
    tabBarIcon:({ color, size}) => (
    <Ionicons name="search-sharp" size={size} color={color}/>),}}/>
        <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarLabel: 'Notifs',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
    tabBarBadge: '',
    tabBarBadgeStyle: {
    backgroundColor: 'orange',
    minWidth: 14,
    minHeight: 14,
    maxWidth: 14,
    maxHeight: 14,
    borderRadius: 7,},
}}/>
<Tabs.Screen
    name="Settings"
    component={Menu}
    options={{headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: 'Menu',
tabBarIcon:({ color, size}) => (
    <SimpleLineIcons name="menu" size={size} color={color}/>),
}}/>
</Tab.Navigator>
 */