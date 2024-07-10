import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import FollowNotification from "./Follow";

const FollowNotificationMeta: Meta<typeof FollowNotification> = {
    title: "Follow",
    component: FollowNotification,
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

  export default FollowNotificationMeta;

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
