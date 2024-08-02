import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import PostTextField from "./PostTextField";

const PostTextFieldMeta: Meta<typeof PostTextField> = {
  title: "PostTextField",
  component: PostTextField,
  argTypes: {},
  args: {
    helperText: "Helper Text",
    username: "@armyuser1",
    width:310,
    height:115,
    maxLength:100,
    placeholderText:"Default input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.",

  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default PostTextFieldMeta;

export const ReplyPost = {};
