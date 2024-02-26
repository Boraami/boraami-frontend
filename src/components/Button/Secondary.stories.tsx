import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SecBtn } from "./Secondary";

const SDefaultMeta: Meta<typeof SecBtn> = {
    title: "Secondary",
    component: SecBtn,
    argTypes: {
        onPress: { 
            action: "pressed secondary",
        },
    },
    args: {
      size: 'lg',
      labeltxt: 'large'
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

  export const large = {};

  export const small = {
    args: {
      size: 'sm',
      labeltxt: 'small',
    },
  };
  
  export const medium = {
    args: {
      disable: true,
      size: 'md',
      labeltxt: 'medium',
    },
  };
