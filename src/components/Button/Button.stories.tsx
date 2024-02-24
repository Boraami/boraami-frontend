import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { MyButton, PDeftBtn, SDeftBtn, TDeftBtn } from "./Button";

const MyButtonMeta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: "Another example",
  },
};