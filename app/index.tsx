import Constants from "expo-constants";
import Storybook from "../.storybook";
import { Image, View, Button, styled, Text } from "tamagui";
import { StreamerCard, StreamerBadge } from "../src/components/Card/Card";

function App() {
  return (
    <View>
        <View>
        <StreamerCard title="Playlist no.6" subtitle="btstatsreminder2"
            uri="https://wallpapers.com/images/hd/bts-group-photo-in-classy-suits-p5zcbisaysuxbmvb.jpg" 
            size='sm'>
          </StreamerCard>
        </View>

        <View>
        <StreamerBadge text="I earned the Dreamer Streamer badge for streaming 3 days in a row!" uri="https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg"></StreamerBadge>
        </View>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
