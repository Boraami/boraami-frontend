import { View } from "react-native";
import { Button, H1, styled } from "tamagui";
import TabScreen from "../src/components/Tabs/TabScreen";

const CBtn = styled(Button, {
  borderRadius: "$r-strong",
  backgroundColor: "$bg-brand-strong",
  color: "$text-primary",
  alignSelf: "center",
});

export default function App() {
  return (
    <View>
      <TabScreen />
    </View>
  );
}
