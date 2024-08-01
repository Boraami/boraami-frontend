import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Divider from "./Divider";
import { SizableText } from "tamagui";

const DividerMeta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  args: {
    width: "100%",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1, width: "100%" }}>
        <SizableText color={"$text-icon-color"}>Hello There </SizableText>
        <Story />
      </View>
    ),
  ],
};

export default DividerMeta;

export const lightColor = {};

export const neutralColor = {
  args: {
    borderColor: "strong",
    width: "100%",
  },
};

export const anyColor = {
  args: {
    borderColor: "$bwl.500",
  },
};
