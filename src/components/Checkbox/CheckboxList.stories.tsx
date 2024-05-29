import { CheckBoxList } from "./CheckboxList";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
const CheckboxData = [
  {
    disable: false,
    checked: false, 
    labeltxt: 'Label 1',
    value: 1,
  },
  {
    disable: false,
    checked: false, 
    labeltxt: 'Label 2',
    value: 2,
  },
  {
    disable: false,
    checked: false, 
    labeltxt: 'Label 3',
    value: 3,
  },
]
const CheckBoxListMeta: Meta<typeof CheckBoxList> = {
    title: "CheckBoxList",
    component: CheckBoxList,
    argTypes: {
      
    },
    args: {
      size:'sm',
      data: CheckboxData,
      heading:'Label',
      helpertext:'Helper Text'
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default CheckBoxListMeta;
  
  export const small = {};
  
  export const medium = {
    args: {
      size:'md',
      data: CheckboxData,      
      heading:'Label',
      helpertext:''
    },
  };
  export const large = {
    args: {
      heading:'',
      data: CheckboxData,
      helpertext:'Helper Text',
      size:'lg',
    },
  };
  