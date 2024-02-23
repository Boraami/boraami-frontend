import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutErrTag } from "./OutErr";

const OutErrMeta: Meta<typeof OutErrTag> = {
  title: "OutlineErr",
  component: OutErrTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "outerr",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default OutErrMeta;

export const Basic = {};