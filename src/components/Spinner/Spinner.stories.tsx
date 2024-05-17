import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { SpinnerComp } from "./Spinner";

const SpinnerMeta: Meta<typeof SpinnerComp> = {
    title: "Spinner",
    component: SpinnerComp,
    args: {
      txt: 'small'
    },
    decorators: [
      (Story) => (
        <View style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1, }}>
        <Story />
      </View>
      ),
    ],
  };

  export default SpinnerMeta;

  export const spinner_xs = {
    args: {
      size: 'xs',
    },
  };

  export const spinner_small = {
    args: {
      size: 'small',
    },
  };

  export const spinner_medium = {
    args: {
      size: 'medium',
    },
  };

  export const spinner_large = {
    args: {
      size: 'large',
    },
  };