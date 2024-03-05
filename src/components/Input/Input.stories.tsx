import React from "react";
import { View } from "tamagui";
import { Meta } from "@storybook/react-native";
import FormInput from "./Input";

const InputMeta: Meta<typeof FormInput> = {
  title: "FormInput",
  component: FormInput,
  argTypes: {
    onPress: { action: "pressed the input" },
  },
  args: {
    placeholder: "Placeholder",
  },
  decorators: [
    (Story) => (
      <View
        backgroundColor={"$bg"}
        style={{
          alignItems: "center",
          padding: 20,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

export const Default = {
  args: {
    name: "default",
    placeholder: "Default",
  },
};

export const Error = {
  args: {
    name: "error",
    placeholder: "Error",
    error: true,
  },
};

export const Disabled = {
  args: {
    name: 'disabled',
    placeholder: "Disabled",
    disabled: true,
    editable: false,
    selectTextOnFocus: false,
  },
};

export const Label = {
  args: {
    name: 'labelled',
    placeholder: "Labelled Input",
    label: "First Name"
  },
};
