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
      labeltxt: 'BUTTON'
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
