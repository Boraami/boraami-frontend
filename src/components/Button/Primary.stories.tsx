import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { PDeftBtn } from "./Primary";


const PDefaultMeta: Meta<typeof PDeftBtn> = {
    title: "Primary",
    component: PDeftBtn,
    argTypes: {
      onPress: { 
        action: "pressed primary",
      }
    },
    args: {
      text: "Hello primary",
    },
    decorators: [
      (Story) => (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
      ),
    ],
  };
  
  export default PDefaultMeta;

  export const small = {
    args: {
      text: "Small button",
    },
  };
  
  export const medium = {
    args: {
      text: "Medium button",
    },
  };

  export const big = {
    args: {
        text: "Big button",
    }
  };