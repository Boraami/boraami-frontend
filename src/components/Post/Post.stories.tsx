import React from "react";
import { ScrollView } from "tamagui";
import { Meta } from "@storybook/react-native";
import Post from "./Post";

const Images = [
  require("../../assets/Notification/bts-placeholder.png"),
  "https://encrypted-tbn0.gstatsdadsc.com/images?q=tbn:ANd9GcQGjf_d_YDGIFCLTUNkHQ6uO1KyJEw4IqHw&s",
  "https://encrypted-tbn0.gstatsdadsc.com/images?q=tbn:ANd9GcQGjf_d_YDGIFCLTUNkHQ6uO1KyJEw4IqHw&s",
  "https://encrypted-tbn0.gstatsdadsc.com/images?q=tbn:ANd9GcQGjf_d_YDGIFCLTUNkHQ6uO1KyJEw4IqHw&s",
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
      require("../../assets/Notification/bts-placeholder.png"),
      require("../../assets/Notification/bts-placeholder.png"),
      require("../../assets/Notification/bts-placeholder.png"),
    ],
  },
  decorators: [
    (Story) => (
      <ScrollView flex={1}>
        <Post
          dateTime="06/13/2023 13:06"
          paddingHorizontal={14}
          avatarText="TT"
          displayName="kigris"
          username="@bts_twt"
          postText="I miss them."
        />
        <Post
          dateTime="06/13/2023 13:06"
          paddingHorizontal={14}
          avatarText="TT"
          displayName="sunshine"
          username="@ughhmin"
          postText="I miss them."
          postImg={[require("../../assets/Notification/bts-placeholder.png")]}
        />
        <Post
          dateTime="06/13/2023 13:06"
          paddingHorizontal={14}
          avatarText="TT"
          displayName="fab"
          username="@bangtanbytes"
          postText="I miss them."
          postImg={[
            require("../../assets/Notification/bts-placeholder.png"),
            require("../../assets/Modals/mnet-image.png"),
          ]}
        />
        <Post
          dateTime="06/13/2023 13:06"
          paddingHorizontal={14}
          avatarText="TT"
          displayName="tasha"
          username="@whalien52"
          postText="I miss them."
          postImg={[
            require("../../assets/Notification/bts-placeholder.png"),
            require("../../assets/Notification/bts-placeholder.png"),
            require("../../assets/Modals/mnet-image.png"),
          ]}
        />
        <Post
          dateTime="06/13/2023 13:06"
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
