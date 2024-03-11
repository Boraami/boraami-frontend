import { View } from "react-native";
import { Button, H1, styled } from "tamagui";
import { ShortAlert } from "../src/components/Alert/ShortAlert";

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
      <ShortAlert name='success' shade='subtle' alert="Test" />
    </View>
  );
}