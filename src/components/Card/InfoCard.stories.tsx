import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { InfoCard } from "./InfoCard";

const InfoCardMeta: Meta<typeof InfoCard> = {
  title: "InfoCard",
  component: InfoCard,
  // argTypes: {},
  args: {
    title: 'Playlist no. 6',
    subtitle: 'btstatsreminder2',
    uri: 'https://i.pinimg.com/736x/4f/18/3d/4f183d54ab9cf6c4ec30c32f8bc3450e.jpg',  
    textSize: 16,
    subtextSize: 12,
    spotifySize: 27,
    closeSize: 12,
    height: 110,
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
    textSize: 12,
    subtextSize: 10,
    spotifySize: 20,
    closeSize: 8,
    height: 76,
  },
};
