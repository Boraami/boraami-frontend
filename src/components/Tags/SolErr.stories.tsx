import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SolErrTag } from "./SolErr";

const SolErrMeta: Meta<typeof SolErrTag> = {
  title: "SolidErr",
  component: SolErrTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "solerr",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default SolErrMeta;

export const Basic = {};

