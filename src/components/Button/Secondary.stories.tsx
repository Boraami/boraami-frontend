import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SDeftBtn } from "./Secondary";

const SDefaultMeta: Meta<typeof SDeftBtn> = {
    title: "Secondary",
    component: SDeftBtn,
    argTypes: {
        onPress: { 
            action: "pressed secondary",
        },
        height: {
            height: 'sm',
        }
    },
    args: {
      text: "Hello secondary",
    },
    decorators: [
      (Story) => (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
      ),
    ],
  };

  export default SDefaultMeta;

  export const small = {
    args: {
      text: "Small button",
      height: '$sm',
      width: '$sm',
      top: '$sm',
      left: '$sm',
      gap: '$sm',
      paddingHorizontal: '$sm',
    },
  };
  
  export const medium = {
    args: {
      text: "Medium button",
      height: '$s-md',
      width: '$s-md',
      top: '$s-md',
      left: '$s-md',
      gap: '$s-md',
      paddingHorizontal: '$s-md',
    },
  };

  export const big = {
    args: {
        text: "Big button",
        height: '$s-lg',
        width: '$s-lg',
        top: '$s-lg',
        left: '$s-lg',
        gap: '$s-lg',
        paddingHorizontal: '$s-lg',
    }
  };