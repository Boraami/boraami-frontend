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
  
  export const WideActionButtons = {
    args:{
      modeltitle:'Account Created Successfully',
      btn1text:'Cancel',
      btn2text:'Button',
      alignment:'center',

      modeltext:'Thank You! Your account has been created successfully. Please check your email for confirmation. You can subscribe for using full version.'
    }
  };
  export const ModalWithImage = {
    args:{
      modeltitle:'Title',
      btn1text:'Cancel',
      btn2text:'Button',
      alignment:'image',

      modeltext:'You’re being redirected to Mnet Plus'
    }
  };
    
  export const LeftAlignedContent = {
    args:{
      modeltitle:'Application Recieved',
      btn1text:'Cancel',
      btn2text:'Button',
      alignment:'left',
      modeltext:'Thank You! Your application has been received. Please check your email for confirmation. You can subscribe for using full version.'
    }
  };