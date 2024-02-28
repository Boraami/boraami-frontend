import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { Textfields } from '../src/components/Textfields/Textfields';

function App() {
  return (
    <View style={{ alignItems: 'center', paddingTop: 40 }}>
      <Textfields 
        bdColor='$placeholder-textbox-border' 
        bgColor='$placeholder-textbox-fill' 
        bdWidth={1}
        color='$placeholder-textbox-text' 
        num1={6} 
        num2={12}
        errorText='Error Text'
        errorTextColor="placeholder-textbox-border">
      </Textfields>
    </View>
    )}

export default Constants.expoConfig?.extra?.storybookEnabled ? 
Storybook : App;
