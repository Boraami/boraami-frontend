import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { FloatingBtnField } from "./FloatingBtn";


const ButtonMeta: Meta<typeof FloatingBtnField> = {
    title: "Button",
    component: FloatingBtnField,
    args: {
      txt: 'small'
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

  export default ButtonMeta;

  export const default_small = {
    args: {
      name: 'floating',
      floating: 'normal',
      size: 'sm',
      txt: 'Quickstart',
    },
  };

  export const default_medium = {
    args: {
      name: 'floating',
      floating: 'normal',
      size: 'md',
      txt: 'Quickstart',
    },
  };

export const default_large = {
    args: {
      name: 'floating',
      floating: 'normal',
      size: 'lg',
      txt: 'Quickstart',
    },
  };

  export const disabled_small = {
    args: {
      name: 'floating',
      floating: 'disabled',
      disabled: true,
      size: 'sm',
      txt: 'Quickstart'
    },
  };

  export const disabled_medium = {
    args: {
      name: 'floating',
      floating: 'disabled',
      disabled: true,
      size: 'md',
      txt: 'Quickstart',
    },
  };

  export const disabled_large = {
    args: {
      name: 'floating',
      floating: 'disabled',
      disabled: true,
      size: 'lg',
      txt: 'Quickstart',
    },
  };
