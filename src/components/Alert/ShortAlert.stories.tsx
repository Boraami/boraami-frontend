import React from "react";
import { Meta } from "@storybook/react-native";
import { Default } from "./ShortAlert";
import { SizableText, View } from 'tamagui';

const DefaultMeta: Meta<typeof Default> = {
  title: "Default",
  component: Default,
  args: {
    shade: 'solid',
    alert: 'We are going live in July!',
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <SizableText style={{ color: 'white'}}></SizableText>
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
