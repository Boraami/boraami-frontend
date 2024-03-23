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
    uri: require('../../images/post-image.png'),
    size: 'lg'
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
    size: 'sm',
  },
};
