import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Button, H1, styled } from "tamagui";

const CBtn = styled(Button, {
  borderRadius: "$r-strong",
  backgroundColor: "$bg-brand-strong",
  color: "$text-primary",
});

function App() {
  return (
    <View>
      <H1>HOME</H1>
      <CBtn>Plain</CBtn>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
