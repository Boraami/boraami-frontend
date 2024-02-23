import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { OutWarnTag } from "./OutWarn";

const OutWarnMeta: Meta<typeof OutWarnTag> = {
  title: "OutlineWarn",
  component: OutWarnTag,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "outwarn",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default OutWarnMeta;

export const Basic = {};
