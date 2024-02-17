import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Button, H1, styled } from "tamagui";
import { StyledCard } from "../src/components/Card/Card";

const CBtn = styled(Button, {
  borderRadius: "$r-strong",
  backgroundColor: "$bg-brand-strong",
  color: "$text-primary",
  alignSelf: "center",
});

function App() {
  return (
    <View style={{ padding: '8px' }}>
      {/* <H1>HOME</H1> */}
      {/* <CBtn>Plan</CBtn> */}
      <StyledCard title="Playlist no.6" subtitle="btstatsreminder2" image="https://ichef.bbci.co.uk/news/1024/branded_news/160F5/production/_118775309_bts-16.jpg"></StyledCard>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
