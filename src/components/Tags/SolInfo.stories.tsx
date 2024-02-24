import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolInfoTag } from "./SolInfo";

const SolInfoMeta: Meta<typeof SolInfoTag> = {
  title: "SolidInfo",
  component: SolInfoTag,
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

export default SolInfoMeta;

export const medium = {};

export const small = {
args: {
  size: 'sm',
  labeltxt: 'INFO',
},
};
