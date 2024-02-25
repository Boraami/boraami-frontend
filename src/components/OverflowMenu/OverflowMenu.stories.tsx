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
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default OverflowMenuMeta;
  
  export const menu = {};
  