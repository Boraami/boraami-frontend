import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import LikeNotification from "./Like";

const LikeNotificationMeta: Meta<typeof LikeNotification> = {
    title: "Like",
    component: LikeNotification,
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

  export default LikeNotificationMeta;

  export const liked = {
    args: {
      iconName: "heart",
      displayName: "Alice Smith ",
      userName: "@alicesmith",
      dateTime: "3h ago",
    }
  }
