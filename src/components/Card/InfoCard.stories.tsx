import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { InfoCard } from "./InfoCard";

const InfoCardMeta: Meta<typeof InfoCard> = {
  title: "InfoCard",
  component: InfoCard,
  argTypes: {},
  args: {
    title: 'Playlist no. 6',
    subtitle: 'btstatsreminder2',
    uri: '../../src/assets/badge_placeholder.jpg',
    // uri: 'https://assets.vogue.com/photos/59c01f5048f3a2782d4a9742/master/w_1280,c_limit/00-story-image-BTS.jpg',
    size: 'l'
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default InfoCardMeta;

export const LargeCard = {};

export const SmallCard = {
  args: {
    size: 's',
  },
};
