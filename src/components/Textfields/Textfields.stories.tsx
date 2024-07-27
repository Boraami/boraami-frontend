import React from "react";
import { Meta } from "@storybook/react-native";
import { Text, View } from "tamagui";
import Textfields from "./Textfields";

export const TextfieldsMeta: Meta<typeof Textfields> = {
  title: "Textfields",
  component: Textfields,
  args: {
    placeholder:
      "Default input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.",
    helperText: "Helper Text",
    maxLength: 1000,
    disabled: false,
    backgroundColor: "$default-textbox-fill",
    color: "$default-textbox-text",
    name: "disabled",
    editable: true,
    selectTextOnFocus: true,
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ color: "white" }}></Text>
        <Story />
      </View>
    ),
  ],
};

export default TextfieldsMeta;

export const DefaultTextbox = {
  args: {
    name: "default",
    onChange: () => console.log("it works"),
  },
};

export const ErrorTextbox = {
  args: {
    name: "error",
    error: true,
    helperText: "Error Text",
  },
};

export const DisabledTextbox = {
  args: {
    name: "disabled",
    disabled: true,
    editable: false,
    selectTextOnFocus: false,
    opacity: 0.5,
  },
};
