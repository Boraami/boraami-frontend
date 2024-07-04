import { View } from "react-native";
import { Button, H1, styled } from "tamagui";
import { CheckBox } from "../src/components/Checkbox/Checkbox";

const CBtn = styled(Button, {
  borderRadius: "$r-strong",
  backgroundColor: "$bg-brand-strong",
  color: "$text-primary",
  alignSelf: "center",
});

export default function App() {
  return (
    <View>
      <H1>HOME</H1>
      <CBtn>Plain</CBtn>
    </View>
  );
}