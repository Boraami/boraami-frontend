import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import LikeIconBtn from "./LikeIconBtn";

const LikeIconBtnMeta: Meta<typeof LikeIconBtn> = {
  title: "Button",
  component: LikeIconBtn,
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

export default LikeIconBtnMeta;

export const LikeIcon = {
  args: {
  },

};
