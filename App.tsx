import { StatusBar } from "expo-status-bar";
import { Text, View, useColorScheme } from "react-native";
import Constants from "expo-constants";
import Storybook from "./.storybook";

function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
