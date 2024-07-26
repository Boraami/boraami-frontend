import React from "react";
import { View } from "tamagui";
import { Meta } from "@storybook/react-native";
import FormInput from "./Input";

const InputMeta: Meta<typeof FormInput> = {
  title: "FormInput",
  component: FormInput,
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

export const default2xl = {
  args: {
    name: "default",
    placeholder: "Default",
    size: "2xl",
  },
};

export const disabledXl = {
  args: {
    name: "disabled",
    placeholder: "Disabled",
    disabled: true,
    editable: false,
    selectTextOnFocus: false,
    size: "xl",
  },
};

export const errorLg = {
  args: {
    name: "error",
    placeholder: "Error",
    error: true,
    size: "lg",
  },
};

export const labelHelpertextMd = {
  args: {
    name: "labelled",
    placeholder: "Labelled Input",
    label: "First Name",
    helperText: "Should be 12 char long",
    maxLength: 12,
    size: "md",
  },
};

export const labelSm = {
  args: {
    name: "labelled",
    placeholder: "Labelled Input",
    label: "First Name",
    size: "sm",
  },
};
