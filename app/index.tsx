import { View } from "react-native";
import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Button, H1, styled } from "tamagui";
import { StreamerCard, StreamerBadge } from "../src/components/Card/Card";

const CBtn = styled(Button, {
  borderRadius: "$r-strong",
  backgroundColor: "$bg-brand-strong",
  color: "$text-primary",
  alignSelf: "center",
});

function App() {
  return (
    <View>
      <View style={{ padding: '8px' }}>
        <View>
        {/* <H1>HOME</H1> */}
        {/* <CBtn>Plan</CBtn> */}
        <StreamerCard title="Playlist no.6" subtitle="btstatsreminder2" image="https://ichef.bbci.co.uk/news/1024/branded_news/160F5/production/_118775309_bts-16.jpg"></StreamerCard>
        </View>
      </View>

      <View style={{ padding: '8px'}}>
        <View>
        <StreamerBadge text="I earned the Dreamer Streamer badge for streaming 3 days in a row!" image="https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg"></StreamerBadge>
       </View>
      </View>
    </View>

  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
