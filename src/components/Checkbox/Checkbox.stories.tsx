import { CheckBox } from "./Checkbox";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const CheckBoxMeta: Meta<typeof CheckBox> = {
    title: "CheckBox",
    component: CheckBox,
    argTypes: {
      
    },
    args: {
      size:'lg',
      labeltext:'Label'

    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default CheckBoxMeta;
  
  export const large = {};
  
  export const small = {
    args: {
      checked:false,
      size:'sm',
      labeltext:'Label'

    },
  };
  export const medium = {
    args: {
      disable:true,
      checked:true,
      size:'md',
      labeltext:'Label'
    },
  };
  