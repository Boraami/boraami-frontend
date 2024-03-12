import React from "react";
import { Meta } from "@storybook/react-native";
import { ShortAlerts } from "./ShortAlerts";
import { SizableText, View } from "tamagui";

const ShortAlertsMeta: Meta<typeof ShortAlerts> = {
  title: "Short Alerts",
  component: ShortAlerts,
  args: {
    name: "default",
    shade: "solid",
    alert: "We are going live in July!",
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <SizableText style={{ color: "white" }}></SizableText>
        <Story />
      </View>
    ),
  ],
};

export default ShortAlertsMeta;

export const DefaultSolidAlert = {
  args: {
    name: "default",
    shade: "solid",
  },
};

export const DefaultShadeAlert = {
  args: {
    name: "default",
    shade: "subtle",
  },
};

export const DefaultOutlineAlert = {
  args: {
    name: "default",
    shade: "outline",
  },
};

export const SuccessSolidAlert = {
  args: {
    name: "success",
    shade: "solid",
    alert: "Selection successfully moved!"
  },
};

export const SuccessSubtleAlert = {
  args: {
    name: "success",
    shade: "subtle",
    alert: "Selection successfully moved!"
  },
};

export const SuccessOutlineAlert = {
  args: {
    name: "success",
    shade: "outline",
    alert: "Selection successfully moved!"
  },
};

export const WarningSolidAlert = {
  args: {
    name: "warning",
    shade: "solid",
    alert: "Poor internet connection!"
  },
};

export const WarningSubtleAlert = {
  args: {
    name: "warning",
    shade: "subtle",
    alert: "Poor internet connection!"
  },
};

export const WarningOutlineAlert = {
  args: {
    name: "warning",
    shade: "outline",
    alert: "Poor internet connection!"
  },
};
