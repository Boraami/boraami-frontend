
import React from "react";
import { Meta } from "@storybook/react-native";
import { LongAlert } from "./LongAlert";
import { Text, View } from 'tamagui';

const LongAlertMeta: Meta<typeof LongAlert> = {
  title: "Long Alert",
  component: LongAlert,
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

export default LongAlertMeta;

export const SolidLongAlert = {};

export const SubtleLongAlert = {
  args: {
    shade: 'subtle',
  },
};
export const OutlineLongAlert = {
  args: {
    shade: 'outline',
  },
};
