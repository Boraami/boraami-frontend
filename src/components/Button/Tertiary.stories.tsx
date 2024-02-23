import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { TDeftBtn } from "./Tertiary";

const TDefaultMeta: Meta<typeof TDeftBtn> = {
    title: "Tertiary",
    component: TDeftBtn,
    argTypes: {
      onPress: { 
        action: "pressed tertiary",
      }
    },
    args: {
      text: "Hello tertiary",
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

  export const small = {
    args: {
      text: "small tertiary",
    },
  };
  
  export const medium = {
    args: {
      text: "medium tertiary",
    },
  };

  export const big = {
    args: {
        text: "big tertiary",
    }
  };