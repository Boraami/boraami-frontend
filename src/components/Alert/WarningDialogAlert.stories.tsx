import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import WarningDialog from "./WarningDialogAlert";

const WarningDialogMeta: Meta<typeof WarningDialog> = {
  title: "Warning Dialog",
  component: WarningDialog,
  argTypes: {},

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default WarningDialogMeta;

export const Default = {
  args: {
    title: "Delete Customer",
    dialogText: "This will remove all data relating to Alex. This action cannot be reversed.",
    highlightedText: " Deleted data can not be recovered.",
    closeBtnText: "Cancel",
    btnText: "I Understand. Delete!",
    handleAction: () => {
      alert("It WORKSSSSS");
    },
    btnStyles: {
      txt: "Open Me",
      name: "open me",
      primary: "normal",
      size: "lg",
    },
  },
};
