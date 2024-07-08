import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { FloatingBtnField } from "./FloatingBtn";


const FabMeta: Meta<typeof FloatingBtnField> = {
    title: "FAB",
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

  export default FabMeta;

  export const default_small = {
    args: {
      name: 'button',
      button: 'normal',
      size: 'sm',
      txt: 'Quickstart',
      iconNameBefore: 'plus',
      iconNameAfter: 'heart',
    },
  };

  export const default_medium = {
    args: {
      name: 'button',
      button: 'normal',
      size: 'md',
      txt: 'Quickstart',
    },
  };

export const default_large = {
    args: {
      name: 'button',
      button: 'normal',
      size: 'lg',
      txt: 'Quickstart',
    },
  };

  export const disabled_small = {
    args: {
      name: 'button',
      button: 'disabled',
      disabled: true,
      size: 'sm',
      txt: 'Quickstart'
    },
  };

  export const disabled_medium = {
    args: {
      name: 'button',
      button: 'disabled',
      disabled: true,
      size: 'md',
      txt: 'Quickstart',
    },
  };

  export const disabled_large = {
    args: {
      name: 'button',
      button: 'disabled',
      disabled: true,
      size: 'lg',
      txt: 'Quickstart',
      iconNameBefore: 'plus',
      iconNameAfter: 'heart',
    },
  };
