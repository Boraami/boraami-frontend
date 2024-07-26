import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { FloatingBtnField } from "./FloatingBtn";

const FabMeta: Meta<typeof FloatingBtnField> = {
  title: "FAB",
  component: FloatingBtnField,
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

export default FabMeta;

export const defaultSmall = {
  args: {
    name: "button",
    button: "normal",
    size: "sm",
    txt: "Quickstart",
    iconNameBefore: "plus",
    iconNameAfter: "heart",
  },
};

export const defaultMedium = {
  args: {
    name: "button",
    button: "normal",
    size: "md",
    txt: "Quickstart",
  },
};

export const defaultLarge = {
  args: {
    name: "button",
    button: "normal",
    size: "lg",
    txt: "Quickstart",
  },
};

export const disabledSmall = {
  args: {
    name: "button",
    button: "disabled",
    disabled: true,
    size: "sm",
    txt: "Quickstart",
  },
};

export const disabledMedium = {
  args: {
    name: "button",
    button: "disabled",
    disabled: true,
    size: "md",
    txt: "Quickstart",
  },
};

export const disabledLarge = {
  args: {
    name: "button",
    button: "disabled",
    disabled: true,
    size: "lg",
    txt: "Quickstart",
    iconNameBefore: "plus",
    iconNameAfter: "heart",
  },
};
