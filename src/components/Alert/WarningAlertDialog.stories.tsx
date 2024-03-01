import React from "react";
import { Meta } from "@storybook/react-native";
import { WarningAlertDialog } from "./WarningAlertDialog";
import { Text, View } from 'tamagui';

const WarningAlertDialogMeta: Meta<typeof WarningAlertDialog> = {
  title: "Warning Alert Dialog",
  component: WarningAlertDialog,
  args: {
    title: 'Delete Customer',
    content: 'This will remove all data relating to Alex. This action cannot be reversed. Deleted data cannot be recovered.',
    backgroundColor: '$error-alert-fill',
    borderColor: '$error-alert-outline',
    color: '$error-text-title', 
    close: '$error-text-title'
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

export default WarningAlertDialogMeta;

export const Default = {};