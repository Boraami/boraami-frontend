import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { WarningDialog } from "./WarningDialog";

const WarningDialogMeta: Meta<typeof WarningDialog> = {
    title: "Warning Dialog",
    component: WarningDialog,
    argTypes: {},
    args: {
      title: 'Delete Customer',
      text1: 'This will remove all data relating to',
      name: 'Alex',
      text2: 'This action cannot be reversed',
      boldtext: 'Deleted data cannot be recovered',
      btn1text: 'Cancel',
      btn2text: 'I understand. Delete.'
    },

    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default WarningDialogMeta;
  
  export const Default = {};

