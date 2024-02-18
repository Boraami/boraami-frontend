import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Button, H1, styled } from "tamagui";
import { Alert } from '../src/components/Alert/Alert'
import { AlertBanner } from '../src/components/Alert/Banner'

// Figma font?
function App() {
  return (
    <View style={{ padding: '8px' }}>
      <View>
        <Alert title="Deleting Customer" content="This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered."></Alert>
      </View>

      <View>
        <AlertBanner title="We are going live in July!" content="We are happy to announce that we are going live on July 28th. Get ready!" ></AlertBanner>
    </View>
    </View>
  );
}


export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
