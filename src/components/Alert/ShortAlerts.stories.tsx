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
    name: "default_solid",
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
  },
};

export const SuccessSubtleAlert = {
  args: {
    name: "success",
    shade: "subtle",
  },
};

export const SuccessOutlineAlert = {
  args: {
    name: "success",
    shade: "outline",
  },
};

export const WarningSolidAlert = {
  args: {
    name: "warning",
    shade: "solid",
  },
};

export const WarningSubtleAlert = {
  args: {
    name: "warning",
    shade: "subtle",
  },
};

export const WarningOutlineAlert = {
  args: {
    name: "warning",
    shade: "outline",
  },
};
