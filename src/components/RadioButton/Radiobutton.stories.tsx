import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import RadioButton from "./Radiobutton";
import { RadioGroup } from "tamagui";

const RadioButtonMeta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {},
  args: {
    value: "1",
    disable: false,
    size: "lg",
    labelText: "label bestie",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <RadioGroup>
          <Story />
        </RadioGroup>
      </View>
    ),
  ],
};

export default RadioButtonMeta;

export const large = {};

export const small = {
  args: {
    value: "1",
    disable: false,
    size: "sm",
    labelText: "label bestie",
  },
};
export const medium = {
  args: {
    value: "1",
    disable: false,
    size: "md",
    gap: 8,
    labeText: "label bestie",
  },
};
