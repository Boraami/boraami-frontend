
import React from "react";
import { Meta } from "@storybook/react-native";
import { Long } from "./Long";
import { Text, View } from 'tamagui';

const LongMeta: Meta<typeof Long> = {
  title: "Long",
  component: Long,
  args: {
    shade: 'solid',
    alert: 'We are going live in July!',
    content: 'We are happy to announce that we are going live on July 28th. Get ready!'
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

export default LongMeta;

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
