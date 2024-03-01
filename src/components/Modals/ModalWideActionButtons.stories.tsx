import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { ModalWideActionBtns } from "./ModalWideActionButtons";
const ModalWideActionBtnsMeta: Meta<typeof ModalWideActionBtns> = {
    title: "Modal With Wide Action Buttons",
    component: ModalWideActionBtns,
    argTypes: {
      
    },
    args: {
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default ModalWideActionBtnsMeta;
  
  export const Modal1 = {
    args:{
      modeltitle:'Account Created Successfully',
      btn1text:'Cancel',
      btn2text:'Button',
      modeltext:'Thank You! Your account has been created successfully. Please check your email for confirmation. You can subscribe for using full version.'
    }
  };