import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { DreamerBadgeCard } from "./DreamerBadge";

const DreamerBadgeMeta: Meta<typeof DreamerBadgeCard> = {
  title: "DreamerBadgeCard",
  component: DreamerBadgeCard,
  // argTypes: {},
  args: {
    text: 'I earned the for streaming 3 days in a row!',
    boldText: 'Dreamer Streamer badge',
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

export default DreamerBadgeMeta;

export const Default = {};

