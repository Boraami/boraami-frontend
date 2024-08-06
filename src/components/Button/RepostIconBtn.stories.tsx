import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import RepostIconBtn from "./RepostIconBtn";

const RepostIconBtnMeta: Meta<typeof RepostIconBtn> = {
  title: "Button",
  component: RepostIconBtn,
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

export default RepostIconBtnMeta;

export const RepostIcon = {
  args: {
  },

};
