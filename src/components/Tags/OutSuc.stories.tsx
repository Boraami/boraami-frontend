import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutSucTag } from "./OutSuc";

const OutSucMeta: Meta<typeof OutSucTag> = {
  title: "OutlineSuc",
  component: OutSucTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "outsuc",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default OutSucMeta;

export const Basic = {};
