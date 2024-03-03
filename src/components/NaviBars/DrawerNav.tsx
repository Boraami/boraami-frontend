import { createDrawerNavigator } from '@react-navigation/drawer';
import { TermsScreen } from './screens/Terms';
import { TopTabNav } from './TopNavBars';
import { Profile } from './screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { View, Button } from "react-native";
import { H1, styled, Text } from "tamagui";
import { useNavigation } from '@react-navigation/native';
import { Feed } from './screens/Feed';

const Drawer = createDrawerNavigator();
  
export function DrawerNav() {
  return (
    <Drawer.Navigator
        screenOptions={{
            drawerPosition:'left',
            drawerActiveTintColor: 'white',
        }}
        >
      <Drawer.Screen name="Home" component={TopTabNav} />
      <Drawer.Screen name='Menu' component={Feed} />
      <Drawer.Screen
        name="My Profile"
        component={Profile}
        options={{ drawerIcon:({size}) => (
            <Ionicons name="person-sharp" size={size} color="#AA7AFF"/>)}} />
      <Drawer.Screen name="Terms and Conditions" component={TermsScreen}/>
    </Drawer.Navigator>
  );
}