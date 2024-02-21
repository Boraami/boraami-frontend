import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { MyButton} from "./Button";

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

export const Primary = {
  args: {
    text: "primary",
  },
};

export const Secondary = {
  args: {
    text: "secondary",
  },
};