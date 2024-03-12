import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { AchievementCard } from "./AchievementCard";

const AchievementMeta: Meta<typeof AchievementCard> = {
  title: "AchievementCard",
  component: AchievementCard,
  argTypes: {},
  args: {
    text1: 'I earned the ',
    boldText: 'Dreamer Streamer badge',
    text2: ' for streaming 5 days in a row!',
    uri: require('../../images/badge-placeholder.png'),
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

