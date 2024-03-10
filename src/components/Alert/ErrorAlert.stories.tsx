import React from "react";
import { Meta } from "@storybook/react-native";
import { Error } from "./ErrorAlert";
import { Text, View } from 'tamagui';

const ErrorMeta: Meta<typeof Error> = {
  title: "Error",
  component: Error,
  args: {
    shade: 'solid',
    alert: 'Poor intenet connection!',
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ color: 'white'}}></Text>
        <Story />
      </View>
    ),
  ],
};

export default ErrorMeta;

export const Solid = {};

export const Subtle = {
  args: {
    shade: 'subtle',
  },
};
export const Outline = {
  args: {
    shade: 'outline',
  },
};
