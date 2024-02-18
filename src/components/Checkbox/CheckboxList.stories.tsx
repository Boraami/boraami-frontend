import { CheckBoxList } from "./CheckboxList";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const CheckBoxListMeta: Meta<typeof CheckBoxList> = {
    title: "CheckBoxList",
    component: CheckBoxList,
    argTypes: {
      
    },
    args: {
      size:'sm',
      labeltxt1:'Label 1',
      labeltxt2:'Label 2',
      labeltxt3:'Label 3',
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
      labeltxt1:'Label 1',
      labeltxt2:'Label 2',
      labeltxt3:'Label 3',
      heading:'Label',
      helpertext:'Helper Text'
    },
  };
  export const large = {
    args: {
      heading:'Label',
      helpertext:'Helper Text',
      size:'lg',
      labeltxt1:'Label 1',
      labeltxt2:'Label 2',
      labeltxt3:'Label 3',

    },
  };
  