import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Notifications from "./Notifications";

const NotificationsMeta: Meta<typeof Notifications> = {
  title: "Notifications",
  component: Notifications,
  argTypes: {

  },
  args: {


  },
  decorators: [
    (Story) => (
      <View style={{  flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default NotificationsMeta;

export const liked = {
  args: {
    iconName: "heart",
    displayName: "Alice Smith ",
    notificationType: "like",
    userName: "@alicesmith",
    dateTime: "3h ago",
  }
}

export const followed = {
  args: {
    iconName: "user-large" ,
    displayName: 'Luna',
    notificationType: 'follow',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg:'',
    quotedDisplayName:'',
  }
}

export const replied = {
  args: {
    iconName:  "comment" ,
    displayName: 'Luna',
    notificationType: 'reply',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg: 'That means when <suga/agust d> will release music, we will finally get ddaeng on spotify under RM, j-hope and agust d/SUGA',
    quotedDisplayName:'',
  }
}

export const mentioned = {
  args: {
    iconName:  "comment" ,
    displayName: 'Luna',
    notificationType: 'mention',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg:'',
    quotedDisplayName:"",
    quotedUsername: "",
    quotedAvatarText: "",
    quotedPostText: "",
    quotedPostImg: "",
  }
}

export const reposted = {
  args: {
  iconName:  "retweet" ,
  displayName: 'Luna',
  notificationType: 'repost',
  userName: '@Lunandseokjin7',
  dateTime: '02/18/2024 19:48',
  replyMsg: '4 years ago, today, BTS won Top Due/Group on BBMAs for the first time (and Top Social Artist for the 3rd year in a row) https://www.youtube.com/watch?v=iy9qZR_OGa0',
  quotedAvatarText:'TT',
  quotedDisplayName:'Bessie Cooper',
  quotedUsername:'@armyuser1',
  quotedPostText: 'I miss them.',
  quotedPostImg: require('../../media/Image.png'),}
}
