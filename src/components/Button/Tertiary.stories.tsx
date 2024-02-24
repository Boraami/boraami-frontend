import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { TerBtn } from "./Tertiary";

const TDefaultMeta: Meta<typeof TerBtn> = {
    title: "Tertiary",
    component: TerBtn,
    argTypes: {
      onPress: { 
        action: "pressed tertiary",
      }
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

  export default TDefaultMeta;

  export const large = {};

  export const small = {
    args: {
      disable: true,
      size: 'sm',
      labeltxt: 'small',
    },
  };
  
  export const medium = {
    args: {
      size: 'md',
      labeltxt: 'medium',
    },
  };
