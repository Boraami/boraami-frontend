import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View, Text } from "tamagui";
import { Dividers } from '../src/components/Divider/Divider';

function App() {
  return (
    <View>
      <Text>Divider</Text>
        <Dividers vertical={false} borderColor="$bg-brand-subtle-light"/>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
