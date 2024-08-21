import React from "react";
import { ScrollView } from "tamagui";
import { Meta } from "@storybook/react-native";
import Post from "./Post";

const Images = [
  require("../../assets/Notification/Image.png"),
  require("../../assets/Notification/Image.png"),
  require("../../assets/Notification/Image.png"),
  require("../../assets/Notification/Image.png"),
];

const PostMeta: Meta<typeof Post> = {
  title: "Post",
  component: Post,
  argTypes: {},
  args: {
    avatarText: "TT",
    displayName: "Bessie Cooper",
    username: "@armyuser1",
    postText: "I miss them.",
    postImg: [
      require("../../assets/Notification/Image.png"),
      require("../../assets/Notification/Image.png"),
      require("../../assets/Notification/Image.png"),
    ],
  },
  decorators: [
    (Story) => (
      <ScrollView flex={1}>
        <Post
          paddingHorizontal={14}
          avatarText="TT"
          displayName="kigris"
          username="@bts_twt"
          postText="I miss them."
        />
        <Post
          paddingHorizontal={14}
          avatarText="TT"
          displayName="sunshine"
          username="@ughhmin"
          postText="I miss them."
          postImg={require("../../assets/Notification/Image.png")}
        />
        <Post
          paddingHorizontal={14}
          avatarText="TT"
          displayName="fab"
          username="@bangtanbytes"
          postText="I miss them."
          postImg={[
            require("../../assets/Notification/Image.png"),
            require("../../assets/Notification/Image.png"),
          ]}
        />
        <Post
          paddingHorizontal={14}
          avatarText="TT"
          displayName="tasha"
          username="@whalien52"
          postText="I miss them."
          postImg={[
            require("../../assets/Notification/Image.png"),
            require("../../assets/Notification/Image.png"),
            require("../../assets/Notification/Image.png"),
          ]}
        />
        <Post
          paddingHorizontal={14}
          avatarText="TT"
          displayName="iba"
          username="@bangbangtan"
          postText="I miss them."
          postImg={Images}
        />
      </ScrollView>
    ),
  ],
};

export default PostMeta;

export const TimelinePost = {};
