import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { ModalWithSingleActionButton } from "./ModalSingleActionButton";
const ModalWithSingleActionButtonMeta: Meta<typeof ModalWithSingleActionButton> = {
    title: "Modal With single Action Button",
    component: ModalWithSingleActionButton,
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
  
  export default ModalWithSingleActionButtonMeta;
  
  export const Modal1 = {
    args:{
      modeltitle:'Application Recieved',
      btntext:'Alright',
      modeltext:'Your application has been received. We will review your application and respond within the next 48 hours.'
    }
  };