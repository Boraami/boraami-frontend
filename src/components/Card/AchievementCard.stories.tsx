import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { AchievementCard } from "./AchievementCard";

const AchievementMeta: Meta<typeof AchievementCard> = {
  title: "AchievementCard",
  component: AchievementCard,
  // argTypes: {},
  args: {
    text1: 'I earned the ',
    boldText: 'Dreamer Streamer badge',
    text2: ' for streaming 3 days in a row!',
    uri: 'https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg'
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default AchievementMeta;

export const Default = {};

