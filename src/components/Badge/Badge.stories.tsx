import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { Badge } from "./Badge";
const BadgeMeta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
    argTypes: {
      
    },
    args: {
      size:'sm'
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default BadgeMeta;
  
  export const badgeSM = {};
  export const badgeMD = {
    args: {
      size:'md'
    },
  };
  export const badgeLG = {
    args: {
      size:'lg',
      text:'20+'
    },
  };
