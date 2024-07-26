import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import FollowNotification from "./Follow";
import LikeNotification from "./Like";
import MentionNotification from "./Mention";
import QuotedNotification from "./Quoted";
import { reposted_noti } from "./Quoted.stories";
import ReplyNotification from "./Reply";
import { replied_noti } from "./Reply.stories";
import { mentioned_noti } from "./Mention.stories";
import { liked_noti } from "./Like.stories";
import { ScrollView } from "tamagui";

const FollowNotificationMeta: Meta<typeof FollowNotification> = {
  title: "All Notifications",
  component: FollowNotification,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <ScrollView flex={1}>
        <Story />
        <LikeNotification {...liked_noti.args} />
        <MentionNotification {...mentioned_noti.args} />
        <ReplyNotification {...replied_noti.args} />
        <QuotedNotification {...reposted_noti.args} />
      </ScrollView>
    ),
  ],
};

export default FollowNotificationMeta;

export const all_notifications = {
  args: {
    iconName: "user-large",
    displayName: "Luna",
    userName: "@Lunandseokjin7",
    dateTime: "02/18/2024 19:48",
  },
};
