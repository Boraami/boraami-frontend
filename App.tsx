import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Constants from "expo-constants";
import Storybook from "./.storybook";

function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-2xl px-2 font-extralight">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
