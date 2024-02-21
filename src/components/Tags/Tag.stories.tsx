import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";


const MyButtonMeta: Meta<typeof MyButton> = {
  title: "MyTag",
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