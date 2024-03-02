import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SwitchDisable } from "./SwitchDisable";

const SwitchDisableMeta: Meta<typeof SwitchDisable> = {
    title: "SwitchDisabled",
    component: SwitchDisable,
    args: {
      
    },
    decorators: [
      (Story) => (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default SwitchDisableMeta;
  
export const small = {args: {
    checked:false,
    size:'sm'
},};
export const large = {args: {
      checked:true,
      size:'lg'
},};
export const medium = {args: {
  checked:true,
  size:'md'
},};
