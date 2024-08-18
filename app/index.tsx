import { Button, H1, styled } from "tamagui";
import TabsView from "../src/components/Tabs/TabBar";

const CBtn = styled(Button, {
  borderRadius: "$r-strong",
  backgroundColor: "$bg-brand-strong",
  color: "$text-primary",
  alignSelf: "center",
});

export default function App() {
  return (
      <TabsView />
  );
}
