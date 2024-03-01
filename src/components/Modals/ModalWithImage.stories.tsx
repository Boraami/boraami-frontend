import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { ModalWithImage } from "./ModalWithImage";
const ModalWithImageMeta: Meta<typeof ModalWithImage> = {
    title: "Modal With Image",
    component: ModalWithImage,
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
  
  export default ModalWithImageMeta;
  
  export const Modal1 = {
    args:{
      modeltitle:'Title',
      btn1text:'Cancel',
      btn2text:'Button',
      modeltext:'You’re being redirected to Mnet Plus'
    }
  };