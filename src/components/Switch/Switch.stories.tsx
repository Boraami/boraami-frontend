import { SwitchDefault } from "./Switch";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const SwitchDefaultMeta: Meta<typeof SwitchDefault> = {
    title: "Switch",
    component: SwitchDefault,
    args: {
      size:'lg',
      heading:'Label',
      helpertext:'Helper Text',
      checked:false

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
      size:'sm',
      heading:'Label',
      helpertext:'',
      checked:false,
      disabled: false
      },
  };

  export const medium = {
    args: {
      size:'md',
      heading:'',
      helpertext:'Helper Text',
      disabled: true
      },
  };
