import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from "./screens/Feed";
import { Menu } from "../../../app/(tabs)/settings/Menu";
import { Search } from "../../../app/(tabs)/search/Search";
import { Notifications } from "../../../app/(tabs)/notification/_layout";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabNav } from './_layout';
import { TopTabNav } from './TopNavBars';
import { View, Button } from "react-native";
import { H1, styled, Text } from "tamagui";
import { DrawerNav } from './DrawerNav';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export function StackNav() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTintColor: '#C2A0FF',
        }}>
            <Stack.Screen
                name="Screen title"
                component={DrawerNav}
                options={{
                headerStyle: { backgroundColor: 'tomato' },}}/>
            <Stack.Screen
                name="Section 2"
                component={Search}
                options={{
                headerShown: false,}}/>
    </Stack.Navigator>
    );
  }