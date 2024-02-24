import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolSucTag } from "./SolSuc";

const SolSucMeta: Meta<typeof SolSucTag> = {
  title: "SolidSuc",
  component: SolSucTag,
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

export default SolSucMeta;

export const medium = {};

export const small = {
args: {
  size: 'sm',
  labeltxt: 'SUCCESS',
},
};
