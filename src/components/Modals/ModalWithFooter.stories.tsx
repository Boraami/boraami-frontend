import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import ModalWithFooter from "./ModalWithFooter";

const ModalWithFooterMeta: Meta<typeof ModalWithFooter> = {
  title: "Modal With Footer",
  component: ModalWithFooter,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ModalWithFooterMeta;

export const Modal = {
  args: {
    modeltitle: "Title",
    btn1text: "Cancel",
    btn2text: "Button",
    btnStyles: {
      txt: "Open Modal",
      primary: "normal",
      name: "application-close",
      size: "md",
    },
    handleAction: () => {
      alert("It WORKSSSSSSSSS");
    },
    modeltext:
      "100+ responsive, accessible, dark mode compatible UI screens that work on web and native platforms to build your app 2x faster.",
  },
};
