import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutDeftTag } from "./OutDeft";

const OutDeftMeta: Meta<typeof OutDeftTag> = {
  title: "OutlineDeft",
  component: OutDeftTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "outdeft",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default OutDeftMeta;

export const Basic = {};
