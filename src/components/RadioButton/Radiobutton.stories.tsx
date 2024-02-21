import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { RadioButton } from "./Radiobutton";

const RadioButtonMeta: Meta<typeof RadioButton> = {
    title: "RadioButton",
    component: RadioButton,
    argTypes: {
      
    },
    args: {
      disable:false,
      labeltext: 'Label 1',
      size:'lg',
      value:'1',
      value2:'2',
      disable2:false,
      labeltext2: 'Label 2',
      size2:'lg',
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default RadioButtonMeta;
  
  export const large = {};
  
  export const small = {
    args: {
      disable:false,
      labeltext: 'Label',
      size:'sm',
      value:'1',
      value2:'2',
      disable2:false,
      labeltext2: 'Label',
      size2:'sm',
    },
  };
  export const medium = {
    args: {
      disable:false,
      labeltext: 'Label',
      size:'md',
      value:'1',
      value2:'2',
      disable2:true,
      labeltext2: 'Label',
      size2:'md',
    },
  };
  