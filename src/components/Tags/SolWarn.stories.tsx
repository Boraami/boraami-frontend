import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolWarnTag } from "./SolWarn";

const SolWarnMeta: Meta<typeof SolWarnTag> = {
  title: "SolidWarn",
  component: SolWarnTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "solwarn",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default SolWarnMeta;

export const Basic = {};
