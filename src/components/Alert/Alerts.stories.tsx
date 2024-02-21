import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { Alerts } from "./Alerts";

const AlertsMeta: Meta<typeof Alerts> = {
  title: "Alerts",
  component: Alerts,
//   argTypes: {},
  args: {
    borderColor: '$bg-brand-subtle-light',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default Alerts;

export const LongAlertSolid = {};

export const LongAlertSubtle = {};

export const LongAlertOutline = {};

export const ShortAlertSolid = {};

export const ShortAlertSubtle = {};

export const ShortAlertOutline = {};

export const SuccessAlertSolid = {};

export const SuccessAlertSubtle = {};

export const SuccessAlertOutline = {};

export const ErrorAlertSolid = {};

export const ErrorAlertSubtle = {};

export const ErrorAlertOutline = {};