import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutInfoTag } from "./OutInfo";

const OutInfoMeta: Meta<typeof OutInfoTag> = {
  title: "OutlineInfo",
  component: OutInfoTag,
  argTypes: {},
  args: {
    size: 'md',
    labeltxt: 'INFO'
  },
  decorators: [
    (Story) => (
      <View style={{ 
        alignItems: "center", 
        justifyContent: "center", 
        flex: 1, }}>
      <Story />
    </View>
    ),
  ],
};

export default OutInfoMeta;

export const medium = {};

export const small = {
  args: {
    size: 'sm',
    labeltxt: 'INFO',
  },
};
