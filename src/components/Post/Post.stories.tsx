import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Post from "./Post";

const PostMeta: Meta<typeof Post> = {
  title: "Post",
  component: Post,
  argTypes: {},
  args: {
    avatarText: "TT",
    displayName: "Bessie Cooper",
    username: "@armyuser1",
    postText: "I miss them.",
    postImg: require("../../assets/Notification/Image.png"),
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default PostMeta;

export const TimelinePost = {};
