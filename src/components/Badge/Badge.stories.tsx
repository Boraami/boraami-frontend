import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Badge from "./Badge";

const BadgeMeta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default BadgeMeta;

export const small = {
  args: {
    color: "$serendipity.700",
    size: "sm",
  },
};

export const medium = {
  args: {
    color: "$bwl.400",
    size: "md",
  },
};

export const OnlyLargeCount30 = {
  args: {
    color: "$boraami.700",
    size: "lg",
    count: 30,
  },
};

export const OnlyLargeCount5 = {
  args: {
    color: "$boraami.700",
    size: "lg",
    count: 5,
  },
};

export const OnlyLargeCount20 = {
  args: {
    color: "$butter.700",
    size: "lg",
    count: 20,
  },
};
