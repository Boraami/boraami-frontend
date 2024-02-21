import { RadiobuttonList } from "./RadiobuttonList";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const RadiobuttonListMeta: Meta<typeof RadiobuttonList> = {
    title: "RadiobuttonList",
    component: RadiobuttonList,
    argTypes: {
      
    },
    args: {
      size:'sm',
      disable:false,
      disable2:false,
      disable3:false,
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
  
  export default RadiobuttonListMeta;
  
  export const small = {};
  
  export const medium = {
    args: {
      size:'md',
      disable:false,
      disable2:false,
      disable3:false,
      labeltxt1:'Label 1',
      labeltxt2:'Label 2',
      labeltxt3:'Label 3',
      heading:'',
      helpertext:'Helper Text'
    },
  };
  export const large = {
    args: {
      heading:'Label',
      helpertext:'Helper Text',
      size:'lg',
      disable:false,
      disable2:false,
      disable3:true,
      labeltxt1:'Label 1',
      labeltxt2:'Label 2',
      labeltxt3:'Label 3',

    },
  };
  