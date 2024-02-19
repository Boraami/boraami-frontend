import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { StreamerCard } from "./Card";

const StreamerCardMeta: Meta<typeof StreamerCard> = {
  title: "StreamerCard",
  component: StreamerCard,
  argTypes: {

  },
  args: {
    title: 'Playlist no. 6',
    subtitle: 'btstatsrem',
    uri: 'https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default StreamerCardMeta;

export const Basic = {};

export const SmallerCard = {
  args: {
    title: "Playlist no.7",
    size: 'sm',
  },
};
