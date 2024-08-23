import React from "react";
import { Meta } from "@storybook/react-native";
import FollowNotification from "./Follow";
import LikeNotification from "./Like";
import MentionNotification from "./Mention";
import QuotedNotification from "./Quoted";
import { repostedNoti } from "./Quoted.stories";
import ReplyNotification from "./Reply";
import { repliedNoti } from "./Reply.stories";
import { mentionedNoti } from "./Mention.stories";
import { likedNoti } from "./Like.stories";
import { ScrollView } from "tamagui";

const FollowNotificationMeta: Meta<typeof FollowNotification> = {
  title: "All Notifications",
  component: FollowNotification,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <ScrollView flex={1} backgroundColor={"$app-bg"}>
        <Story />
        <LikeNotification {...likedNoti.args} />
        <MentionNotification {...mentionedNoti.args} />
        <ReplyNotification {...repliedNoti.args} />
        <QuotedNotification {...repostedNoti.args} />
      </ScrollView>
    ),
  ],
};

export default FollowNotificationMeta;

export const allNotifications = {
  args: {
    iconName: "user-large",
    displayName: "Luna",
    userName: "@Lunandseokjin7",
    dateTime: "02/18/2024 19:48",
  },
};
