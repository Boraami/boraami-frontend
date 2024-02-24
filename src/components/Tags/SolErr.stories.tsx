import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolErrTag } from "./SolErr";

const SolErrMeta: Meta<typeof SolErrTag> = {
  title: "SolidErr",
  component: SolErrTag,
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

export default SolErrMeta;

export const medium = {};

export const small = {
args: {
  size: 'sm',
  labeltxt: 'ERROR',
},
};
