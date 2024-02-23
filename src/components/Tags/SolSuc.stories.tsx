import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolSucTag } from "./SolSuc";

const SolSucMeta: Meta<typeof SolSucTag> = {
  title: "SolidSuc",
  component: SolSucTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "solsuc",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default SolSucMeta;

export const Basic = {};
