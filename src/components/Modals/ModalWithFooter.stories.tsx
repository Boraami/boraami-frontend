import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { ModalWithFooter } from "./ModalWithFooter";
const ModalWithFooterMeta: Meta<typeof ModalWithFooter> = {
    title: "Modal With Footer",
    component: ModalWithFooter,
    argTypes: {
      
    },
    args: {
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "flex-start", justifyContent:'flex-start', flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default ModalWithFooterMeta;
  
  export const Modal1 = {
    args:{
      modeltitle:'Title',
      btn1text:'Cancel',
      btn2text:'Button',
      modeltext:'100+ responsive, accessible, dark mode compatible UI screens that work on web and native platforms to build your app 2x faster.'
    }
  };