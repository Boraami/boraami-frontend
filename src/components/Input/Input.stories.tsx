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

export const Basic = {};

export const AnotherExample = {
  args: {
    placeholder: "This in another input",
  },
};
