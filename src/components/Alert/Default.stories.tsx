import React from "react";
import { Meta } from "@storybook/react-native";
import { Default } from "./Default";
import { Text, View } from 'tamagui';

const DefaultMeta: Meta<typeof Default> = {
  title: "Default",
  component: Default,
  args: {
    variant: 'default',
    shade: 'solid',
    title: 'We are going live in July!',
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

export default DefaultMeta;

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
