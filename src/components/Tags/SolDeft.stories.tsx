import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolDeftTag } from "./SolDeft";


const SolDeftMeta: Meta<typeof SolDeftTag> = {
  title: "SolidDeft",
  component: SolDeftTag,
  argTypes: {},
  args: {
    size: 'md',
    labeltxt: 'DEFAULT'
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

export default SolDeftMeta;

export const medium = {};

export const small = {
args: {
  size: 'sm',
  labeltxt: 'DEFAULT',
},
};
