import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { PlaylistCard } from "./PlaylistCard";

const PlaylistCardMeta: Meta<typeof PlaylistCard> = {
  title: "PlaylistCard",
  component: PlaylistCard,
  // argTypes: {},
  args: {
    title: 'Playlist no. 10',
    subtitle: 'btstatsreminder10',
    // uri: 'https://t3.ftcdn.net/jpg/05/63/73/08/240_F_563730870_ciwSsLDxuvUgsu8KYpyRG5J1MhVSVc11.jpg',
    uri: "https://wallpapers.com/images/hd/bts-group-photo-in-classy-suits-p5zcbisaysuxbmvb.jpg" ,
   
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default PlaylistCardMeta;

export const LargeCard = {};

export const SmallCard = {
  args: {
    title: "Playlist no.7",
    subtitle: 'btstatsreminder10',
    size: 'sm',
  },
};
