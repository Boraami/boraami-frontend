import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BottomTabNav } from './_layout';  
import { Search } from '../../../app/(tabs)/search/Search';

const Tab = createMaterialTopTabNavigator();

export function TopTabNav() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Section 1" component={BottomTabNav} />
        <Tab.Screen name="Section 2" component={BottomTabNav} />
      </Tab.Navigator>
    );
  }