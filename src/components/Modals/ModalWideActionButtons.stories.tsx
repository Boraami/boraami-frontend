import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import ModalWideActionBtns from "./ModalWideActionButtons";

const ModalWideActionBtnsMeta: Meta<typeof ModalWideActionBtns> = {
  title: "Modal With Wide Action Buttons",
  component: ModalWideActionBtns,
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

export default ModalWideActionBtnsMeta;

export const ModalWithImage = {
  args: {
    modeltitle: "Title",
    btn1text: "Cancel",
    btn2text: "Button",
    alignment: "image",
    btnStyles: {
      txt: "Open Modal",
      primary: "normal",
      name: "application-close",
      size: "md",
    },
    handleAction: () => {
      alert("Its OKAY BRO");
    },
    modeltext: "You’re being redirected to Mnet Plus",
  },
};

export const LeftAlignedContent = {
  args: {
    modeltitle: "Application Recieved",
    btn1text: "Cancel",
    btn2text: "OK",
    alignment: "left",
    btnStyles: {
      txt: "Open Modal",
      primary: "normal",
      name: "application-close",
      size: "md",
    },
    handleAction: () => {
      alert("It WORKSSSSS");
    },
    modeltext:
      "Thank You! Your application has been received. Please check your email for confirmation. You can subscribe for using full version.",
  },
};
