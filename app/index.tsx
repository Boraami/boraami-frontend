import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { H1 } from "tamagui";

function App() {
  return (
    <View>
      <H1>HOME</H1>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
