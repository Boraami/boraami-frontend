import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolInfoTag } from "./SolInfo";

const SolInfoMeta: Meta<typeof SolInfoTag> = {
  title: "SolidInfo",
  component: SolInfoTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "solinfo",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default SolInfoMeta;

export const Basic = {};
