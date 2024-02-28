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
    backgroundColor: '#F4F3F5', // '$mono.50'
    borderColor: '#5F3D9C',
    borderLeftColor: '#B48BFF', 
    borderLeftWidth: 4,
    color: '#FFFFFF', 
    size: 'long',
    icon: 'heart',
    iconColor: '#FFFFFF',
    closeColor: '#FFFFFF'
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