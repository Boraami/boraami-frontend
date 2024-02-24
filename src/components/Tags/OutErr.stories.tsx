import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutErrTag } from "./OutErr";

const OutErrMeta: Meta<typeof OutErrTag> = {
  title: "OutlineErr",
  component: OutErrTag,
  argTypes: {},
  args: {
    size: 'md',
    labeltxt: 'ERROR'
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

export default OutErrMeta;

export const medium = {};

export const small = {
  args: {
    size: 'sm',
    labeltxt: 'ERROR',
  },
};
