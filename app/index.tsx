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
    <View margin={20}>
      <View>
        <InfoCard title="Playlist no.6" subtitle="btstatsreminder2"
          uri="https://i.pinimg.com/736x/4f/18/3d/4f183d54ab9cf6c4ec30c32f8bc3450e.jpg" 
          size='l'
          textSize={16}
          subtextSize={12}
          spotifySize={27}
          closeSize={12}>
        </InfoCard>
      </View>

      <View margin={20}>
        <InfoCard title="Playlist no.6" subtitle="btstatsreminder2"
          uri="https://i.pinimg.com/736x/4f/18/3d/4f183d54ab9cf6c4ec30c32f8bc3450e.jpg" 
          size='s'
          textSize={12}
          subtextSize={10}
          spotifySize={20}
          closeSize={8}>
        </InfoCard>
      </View>

        <AchievementCard text="I earned the Dreamer Streamer badge for streaming 3 days in a row!" uri="https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg"></AchievementCard>
    
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
