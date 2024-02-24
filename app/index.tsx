import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { PlaylistCard } from "../src/components/Card/PlaylistCard";
import { DreamerBadgeCard } from "../src/components/Card/DreamerBadge";

function App() {
  return (
    <View>
        <PlaylistCard title="Playlist no.10" subtitle="btstatsreminder10"
          uri="https://wallpapers.com/images/hd/bts-group-photo-in-classy-suits-p5zcbisaysuxbmvb.jpg" 
          size='sm'>
        </PlaylistCard>

        <DreamerBadgeCard text="I earned the Dreamer Streamer badge for streaming 3 days in a row!" uri="https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg"></DreamerBadgeCard>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
