import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { PriBtn } from "./Primary";


const PDefaultMeta: Meta<typeof PriBtn> = {
    title: "Primary",
    component: PriBtn,
    argTypes: {
      onPress: { 
        action: "pressed primary",
      }
    },
    args: {
      size: 'lg',
      labeltxt: 'large'
    },
    decorators: [
      (Story) => (
        <View style={{ 
          alignItems: "center", 
          justifyContent: "center", 
          flex: 1, }}>
        <Story />
      </View>
      ),
    ],
  };
  
  export default PDefaultMeta;

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
