import React from "react";
import { Meta } from "@storybook/react-native";
import { Success } from "./SuccessAlert";
import { Text, View } from 'tamagui';

const SuccessMeta: Meta<typeof Success> = {
  title: "Success",
  component: Success,
  args: {
    shade: 'solid',
    alert: 'Selection successfully moved!',
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

export default SuccessMeta;

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
