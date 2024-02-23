import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutInfoTag } from "./OutInfo";

const OutInfoMeta: Meta<typeof OutInfoTag> = {
  title: "OutlineInfo",
  component: OutInfoTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "outinfo",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default OutInfoMeta;

export const Basic = {};
