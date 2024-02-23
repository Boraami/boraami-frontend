import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { Alerts } from '../src/components/Alert/Alerts'

function App() {
  return (
    <View style={{ alignItems: 'center', paddingTop: 40}}>
        <Alerts 
          title="We are going live in July!" 
          content="We are happy to announce that we are going live on 
          July 28th. Get ready!" 
          backgroundColor="#5F3D9C"
          color='#FFFFFF'>
        </Alerts>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? 
Storybook : App;
