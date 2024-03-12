import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { WarningDialog } from "./WarningDialogAlert";

const WarningDialogMeta: Meta<typeof WarningDialog> = {
    title: "Warning Dialog",
    component: WarningDialog,
    argTypes: {},
    args: {
      title: 'Delete Customer',
      name: 'Alex',
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

