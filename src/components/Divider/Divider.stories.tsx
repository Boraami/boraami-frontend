import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { Dividers } from "./Divider";

const DividerMeta: Meta<typeof Dividers> = {
  title: "Divider",
  component: Dividers,
//   argTypes: {
//     onPress: { action: "pressed the button" },
//   },
  args: {
    borderColor: '$bg-brand-subtle-light',
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
    borderColor: '$bg-border-neutral', 
  },
};
