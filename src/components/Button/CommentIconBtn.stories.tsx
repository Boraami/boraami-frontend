import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import CommentIconBtn from "./CommentIconBtn";

const CommentIconBtnMeta: Meta<typeof CommentIconBtn> = {
  title: "Button",
  component: CommentIconBtn,
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default CommentIconBtnMeta;

export const CommentIcon = {
  args: {
  },

};
