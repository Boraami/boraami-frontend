import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SwitchWithLabel } from "./SwitchwithLabel";
const SwitchWithLabelMeta: Meta<typeof SwitchWithLabel> = {
    title: "SwitchWithLabel",
    component: SwitchWithLabel,
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
  
  export default SwitchWithLabelMeta;
  
export const small = {args: {
    size:'sm',
    checked:true,
    disable:false,
    heading:'Label',
    helpertext:'Helper Text'
},};
export const mediumDisabled = {args: {
      size:'md',
      checked:false,
      disable:true,
      heading:'Label',
      helpertext:'Helper Text'
},};
export const largeDisabled = {args: {
    size:'lg',
    disable:true,
    checked:true,
    heading:'Label',
    helpertext:'Helper Text'
},};
