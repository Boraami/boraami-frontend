import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Button } from "tamagui";

function App() {
  return (
    <View>
      <Button>Hello home</Button>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
