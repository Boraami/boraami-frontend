import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import UserNotification from "./LikeFollow";

const UserNotificationMeta: Meta<typeof UserNotification> = {
    title: "LikeFollowMention",
    component: UserNotification,
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

  export default UserNotificationMeta;

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
