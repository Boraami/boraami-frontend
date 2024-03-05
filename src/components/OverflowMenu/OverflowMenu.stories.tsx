import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OverflowMenu } from "./OverflowMenu";
const OverflowMenuMeta: Meta<typeof OverflowMenu> = {
    title: "OverflowMenu",
    component: OverflowMenu,
    argTypes: {
      
    },
    args: {
      menutext1:'Report',
      menutext2:'Mute user',
      menutext3:'Block user',

    },
    decorators: [
      (Story) => (
        <View style={{ marginTop:100 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default OverflowMenuMeta;
  
  export const menu = {};
  