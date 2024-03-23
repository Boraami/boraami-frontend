
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Notifications from "./Notifications";
const notificationData = [
  {
    iconName: "user-large" ,
    displayName: 'Luna',
    notificationType: 'followed you',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg:'',
    quotedDisplayName:'',

  },
  {
    iconName: "heart",
    displayName: 'Luna',
    notificationType: 'liked your post',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg:'',
    quotedDisplayName:'',
  },
  {
    iconName:  "comment" ,
    displayName: 'Luna',
    notificationType: 'replied to your post',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg: 'That means when <suga/agust d> will release music, we will finally get ddaeng on spotify under RM, j-hope and agust d/SUGA',
    quotedDisplayName:'',
  },
  {
    iconName:  "retweet" ,
    displayName: 'Luna',
    notificationType: 'quoted your post',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg: '4 years ago, today, BTS won Top Due/Group on BBMAs for the first time (and Top Social Artist for the 3rd year in a row) https://www.youtube.com/watch?v=iy9qZR_OGa0',
    quotedAvatarText:'TT',
    quotedDisplayName:'Bessie Cooper',
    quotedUsername:'@armyuser1',
    quotedPostText: 'I miss them.',
    quotedPostImg: require('../../media/Image.png'),
  },
  {
    iconName:  "comment" ,
    displayName: 'Luna',
    notificationType: 'mentioned you',
    userName: '@Lunandseokjin7',
    dateTime: '02/18/2024 19:48',
    replyMsg:'',
    quotedDisplayName:'',

  },
];

const NotificationsMeta: Meta<typeof Notifications> = {
  title: "Notifications",
  component: Notifications,
  argTypes: {
    
  },
  args: {
    data: notificationData,
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

export const N1 = {};

export const N2 = {
  args: {
    
  },
};