import React from "react";
import { Meta } from "@storybook/react-native";
import { WarningAlertDialog } from "./WarningAlertDialog";
import { Text, View } from 'tamagui';

const WarningAlertDialogMeta: Meta<typeof WarningAlertDialog> = {
  title: "Warning Alert Dialog",
  component: WarningAlertDialog,
  args: {
    title: 'Delete Customer',
    content: 'This will remove all data relating to Alex. This action cannot be reversed.',
    backgroundColor: '$error-alert-fill',
    borderColor: '$error-alert-outline',
    color: '$error-alert-title-text', 
    close: '$error-alert-title-text',
    boldText: 'Deleted data cannot be recovered'
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