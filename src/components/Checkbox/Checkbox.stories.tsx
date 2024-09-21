import React from "react";
import CheckBox from "./Checkbox";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const CheckBoxMeta: Meta<typeof CheckBox> = {
  title: "CheckBox",
  component: CheckBox,
  argTypes: {},
  args: {
    size: "lg",
    labeltext: "Label lg",
    value: "1",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CheckBoxMeta;

export const large = {};

export const small = {
  args: {
    checked: false,
    size: "sm",
    labeltext: "Label",
    value: "1",
    gap: 10,
  },
};
export const medium = {
  args: {
    disable: true,
    checked: true,
    size: "md",
    labeltext: "Label",
    value: "1",
  },
};
