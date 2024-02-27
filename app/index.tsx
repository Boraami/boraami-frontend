import Constants from "expo-constants";
import Storybook from "../.storybook";
import { View } from "tamagui";
import { InfoCard } from "../src/components/Card/InfoCard";
import { AchievementCard } from "../src/components/Card/AchievementCard";

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

      <AchievementCard text1="I earned the " boldText="Dreamer Streamer badge" text2=" for streaming 3 days in a row!" uri="https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg"></AchievementCard>
    
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
