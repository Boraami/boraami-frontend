import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { Textfields } from '../src/components/Textfields/Textfields';

function App() {
  return (
    <View style={{ alignItems: 'center', paddingTop: 40}}>
      <Textfields>
        
      </Textfields>
    </View>
    )}

export default Constants.expoConfig?.extra?.storybookEnabled ? 
Storybook : App;
