import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { BtnField } from "./Primary";


const PDefaultMeta: Meta<typeof BtnField> = {
    title: "Primary",
    component: BtnField,
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
  
  export default PDefaultMeta;

  export const pri_small = {
    args: {
      name: 'primary',
      primary: 'normal',
      size: 'sm',
      txt: 'small'
    },
  };

  export const sec_small = {
    args: {
      name: 'secondary',
      secondary: 'normal',
      size: 'sm',
      txt: 'small'
    },
  };

  export const ter_small = {
    args: {
      name: 'tertiary',
      tertiary: 'normal',
      size: 'sm',
      txt: 'small'
    },
  };

  export const pri_medium = {
    args: {
      name: 'primary',
      primary: 'normal',
      size: 'md',
      txt: 'medium',
    },
  };

  export const sec_medium = {
    args: {
      name: 'secondary',
      secondary: 'normal',
      size: 'md',
      txt: 'medium',
    },
  };

  export const ter_medium = {
    args: {
      name: 'tertiary',
      tertiary: 'normal',
      size: 'md',
      txt: 'medium',
    },
  };
  
  export const pri_large = {
    args: {
      name: 'primary',
      primary: 'disabled',
      disable: true,
      size: 'lg',
      txt: 'large',
    },
  };

  export const sec_large = {
    args: {
      name: 'secondary',
      secondary: 'disabled',
      disable: true,
      size: 'lg',
      txt: 'large',
    },
  };

  export const ter_large = {
    args: {
      name: 'tertiary',
      tertiary: 'disabled',
      disable: true,
      size: 'lg',
      txt: 'large',
    },
  };