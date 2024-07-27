import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Dividers from "./Divider";

const DividerMeta: Meta<typeof Dividers> = {
  title: "Divider",
  component: Dividers,
  argTypes: {},
  args: {
    borderColor: "$subtle",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default DividerMeta;

export const LightColor = {};

export const NeutralColor = {
  args: {
    borderColor: "$Strong",
  },
};
