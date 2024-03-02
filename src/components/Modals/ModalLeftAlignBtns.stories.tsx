import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { ModalLeftAlignButtons } from "./ModalLeftAlignBtns";
const ModalLeftAlignButtonsMeta: Meta<typeof ModalLeftAlignButtons> = {
    title: "Modal With Left Action Buttons",
    component: ModalLeftAlignButtons,
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
  
  export default ModalLeftAlignButtonsMeta;
  
  export const Modal1 = {
    args:{
      modeltitle:'Application Recieved',
      btn1text:'Cancel',
      btn2text:'Button',
      modeltext:'Thank You! Your application has been received. Please check your email for confirmation. You can subscribe for using full version.'
    }
  };