import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import SpinnerComp from "./Spinner";

const SpinnerMeta: Meta<typeof SpinnerComp> = {
  title: "Spinner",
  component: SpinnerComp,
  args: {
    txt: "small",
  },
  decorators: [
    (Story) => (
      <View
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default SpinnerMeta;

export const spinnerXs = {
  args: {
    size: "xs",
  },
};

export const spinnerSmall = {
  args: {
    size: "sm",
  },
};

export const spinnerMedium = {
  args: {
    size: "md",
  },
};

export const spinnerLarge = {
  args: {
    size: "lg",
  },
};
