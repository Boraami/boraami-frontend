import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OverflowMenu } from "./OverflowMenu";
const overflowmenuItems = [
  {
    menuText: "Report ",
    iconName:"flag",
  },
  {
    menuText: "Mute user",
    iconName:"bell-slash",
  },
  {
    menuText: "Block user",
    iconName:"user-slash",
  },
]
const OverflowMenuMeta: Meta<typeof OverflowMenu> = {
    title: "OverflowMenu",
    component: OverflowMenu,
    argTypes: {
      
    },
    args: {
      data: overflowmenuItems,
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
  