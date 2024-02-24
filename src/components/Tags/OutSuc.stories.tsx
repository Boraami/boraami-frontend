import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutSucTag } from "./OutSuc";

const OutSucMeta: Meta<typeof OutSucTag> = {
  title: "OutlineSuc",
  component: OutSucTag,
  argTypes: {},
  args: {
    size: 'md',
    labeltxt: 'SUCCESS'
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

export default OutSucMeta;

export const medium = {};

export const small = {
  args: {
    size: 'sm',
    labeltxt: 'SUCCESS',
  },
};
