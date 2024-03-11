import React from "react";
import { Meta } from "@storybook/react-native";
import { ShortAlert } from "./ShortAlert";
import { SizableText, View } from 'tamagui';

const ShortAlertMeta: Meta<typeof ShortAlert> = {
  title: "ShortAlert",
  component: ShortAlert,
  args: {
    shade: 'solid',
    alert: 'We are going live in AUGUST!',
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

export default ShortAlertMeta;

export const SolidShortAlert = {
  name: 'short',
  shade: 'solid',
};

export const SubtleShortAlert = {
  name: 'short',
  shade: 'subtle',
};

export const OutlineShortAlert = {
  name: 'short',
  shade: 'outline',
};

export const SolidSuccessAlert = {
  name: 'success',
  shade: 'solid',
};

export const SubtleSuccessAlert = {
  name: 'success',
  shade: 'subtle',
};

export const OutlineSuccessAlert = {
  name: 'success',
  shade: 'outline',
};

export const SolidErrorAlert = {
  name: 'error',
  shade: 'solid',
};

export const SubtleErrorAlert = {
  name: 'error',
  shade: 'subtle',
};

export const OutlineErrorAlert = {
  name: 'error',
  shade: 'outline',
};
