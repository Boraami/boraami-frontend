import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import MentionNotification from "./Mention";

const MentionNotificationMeta: Meta<typeof MentionNotification> = {
    title: "Mention",
    component: MentionNotification,
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

  export default MentionNotificationMeta;

  export const mentioned = {
    args: {
      iconName:  "comment" ,
      displayName: 'Luna',
      userName: '@Lunandseokjin7',
      dateTime: '02/18/2024 19:48',
    }
  }
