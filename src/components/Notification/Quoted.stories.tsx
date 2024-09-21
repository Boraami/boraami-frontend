import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import QuotedNotification from "./Quoted";

const QuotedMeta: Meta<typeof QuotedNotification> = {
  title: "Quoted",
  component: QuotedNotification,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default QuotedMeta;

export const repostedNoti = {
  args: {
    iconName: "retweet",
    displayName: "Luna",
    userName: "@Lunandseokjin7",
    dateTime: "02/18/2024 19:48",
    replyMsg:
      "4 years ago, today, BTS won Top Due/Group on BBMAs for the first time (and Top Social Artist for the 3rd year in a row) https://www.youtube.com/watch?v=iy9qZR_OGa0",
    quotedAvatarText: "TT",
    quotedDisplayName: "Bessie Cooper",
    quotedUsername: "@armyuser1",
    quotedPostText: "I miss them.",
    quotedPostImg: require("../../assets/Notification/Image.png"),
  },
};
