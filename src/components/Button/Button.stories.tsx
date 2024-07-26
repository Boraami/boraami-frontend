import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { BtnField } from "./Button";
import { FontAwesome6 } from "@expo/vector-icons";

const ButtonMeta: Meta<typeof BtnField> = {
  title: "Button",
  component: BtnField,
  args: {
    txt: "small",
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const prSmall = {
  args: {
    name: "primary",
    primary: "normal",
    size: "sm",
    txt: "BUTTON",
    iconName: "plus",
    iconPosition: "right",
  },
};

export const secSmall = {
  args: {
    name: "secondary",
    secondary: "normal",
    size: "sm",
    txt: "BUTTON",
  },
};

export const terSmall = {
  args: {
    name: "tertiary",
    tertiary: "normal",
    size: "sm",
    txt: "BUTTON",
  },
};

export const priMedium = {
  args: {
    name: "primary",
    primary: "normal",
    size: "md",
    txt: "BUTTON",
  },
};

export const secMedium = {
  args: {
    name: "secondary",
    secondary: "normal",
    size: "md",
    txt: "BUTTON",
  },
};

export const terMedium = {
  args: {
    name: "tertiary",
    tertiary: "normal",
    size: "md",
    txt: "BUTTON",
  },
};

export const priLarge = {
  args: {
    name: "primary",
    primary: "disabled",
    disabled: true,
    size: "lg",
    txt: "BUTTON",
    iconName: "heart",
  },
};

export const secLarge = {
  args: {
    name: "secondary",
    secondary: "disabled",
    disabled: true,
    size: "lg",
    txt: "BUTTON",
  },
};

export const terLarge = {
  args: {
    name: "tertiary",
    tertiary: "disabled",
    disabled: true,
    size: "lg",
    txt: "BUTTON",
    iconName: "gear",
  },
};
