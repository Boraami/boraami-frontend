import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";

function App() {
  return ({})
}

export default Constants.expoConfig?.extra?.storybookEnabled ? 
Storybook : App;
