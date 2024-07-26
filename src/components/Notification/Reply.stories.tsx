import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import ReplyNotification from "./Reply";

const ReplyMeta: Meta<typeof ReplyNotification> = {
    title: "Reply",
    component: ReplyNotification,
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

  export default ReplyMeta;

  export const repliedNoti = {
    args: {
      iconName:  "comment" ,
      displayName: 'Luna',
      userName: '@Lunandseokjin7',
      dateTime: '02/18/2024 19:48',
      replyMsg: 'That means when <suga/agust d> will release music, we will finally get ddaeng on spotify under RM, j-hope and agust d/SUGA',
    }
  }
