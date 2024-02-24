import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutWarnTag } from "./OutWarn";

const OutWarnMeta: Meta<typeof OutWarnTag> = {
  title: "OutlineWarn",
  component: OutWarnTag,
  argTypes: {},
  args: {
    size: 'md',
    labeltxt: 'WARNING'
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

export default OutWarnMeta;

export const medium = {};

export const small = {
  args: {
    size: 'sm',
    labeltxt: 'WARNING',
  },
};
