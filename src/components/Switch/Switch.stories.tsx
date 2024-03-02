import { SwitchDefault } from "./Switch";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const SwitchDefaultMeta: Meta<typeof SwitchDefault> = {
    title: "Switch",
    component: SwitchDefault,
    args: {
      size:'lg'

    },
    decorators: [
      (Story) => (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default SwitchDefaultMeta;
  
  export const large = {};
  
  export const small = {
    args: {
      size:'sm'
      },
  };
  
  export const medium = {
    args: {
      size:'md'
      },
  };
  