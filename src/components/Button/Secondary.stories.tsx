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
      text: "small secondary",
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
      text: "medium secondary",
      height: '$md',
      width: '$md',
      top: '$md',
      left: '$md',
      gap: '$md',
      paddingHorizontal: '$md',
    },
  };

  export const big = {
    args: {
        text: "big secondary",
        height: '$lg',
        width: '$lg',
        top: '$lg',
        left: '$lg',
        gap: '$lg',
        paddingHorizontal: '$lg',
    }
  };