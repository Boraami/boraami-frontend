import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { Overlay } from "./Overlay";
const OverlayMeta: Meta<typeof Overlay> = {
    title: "Overlay",
    component: Overlay,
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
  
  export default OverlayMeta;
  
  export const overlay = {};
  