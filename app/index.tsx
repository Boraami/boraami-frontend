import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { InfoCard } from "../src/components/Card/InfoCard";
import { AchievementCard } from "../src/components/Card/AchievementCard";


// Light Theme Card Component: lines 137-142
//   "info-card-fill" : colorScheme.boraami[100],
//   "info-card-top-border" : colorScheme.boraami[700],
//   "info-card-music-icon" : colorScheme.boraami[700],
//   "info-card-text" : colorScheme.boraami[700],
//   "achievement-card-fill" : colorScheme.boraami[100],
//   "achievement-card-text" : colorScheme.boraami[700],

// Dark Theme Card Component: lines 334-339 
// "info-card-fill" : colorScheme.boraami[700],
// "info-card-top-border" : colorScheme.boraami[400],
// "info-card-music-icon" : colorScheme.boraami[50],
// "info-card-text" : colorScheme.boraami[50],
// "achievement-card-fill" : colorScheme.boraami[500],
// "achievement-card-text" : colorScheme.boraami[50],


function App() {
  return (
    <View>
        <InfoCard title="Playlist no.6" subtitle="btstatsreminder20"
          uri="https://wallpapers.com/images/hd/bts-group-photo-in-classy-suits-p5zcbisaysuxbmvb.jpg" 
          // uri="https://www.figma.com/file/aKyJ9V4Cfo5y7BrAydKbAa/Boraami_Design_System?type=design&node-id=1821-15380&mode=dev"
          size='sm'>
        </InfoCard>

        <AchievementCard text="I earned the Dreamer Streamer badge for streaming 3 days in a row!" uri="https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg"></AchievementCard>
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
