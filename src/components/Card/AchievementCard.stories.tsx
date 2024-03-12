import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { AchievementCard } from "./AchievementCard";

const AchievementMeta: Meta<typeof AchievementCard> = {
  title: "AchievementCard",
  component: AchievementCard,
  argTypes: {},
  args: {
    badgeName: 'Dreamer Streamer badge',
    numOfDays: 3,
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

