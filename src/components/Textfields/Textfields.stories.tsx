import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "Textfields",
    component: Textfields,
    args: {
      display: 'flex',
      borderRadius: 1,
      borderColor: '$placeholder-textbox-border',
      backgroundColor: '$placeholder-textbox-fill',
      color: '$placeholder-textbox-text',
      fontSize: 14,
      height: 136,
      width: 428
  },

    decorators: [
        (Story) => (
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ color: 'white'}}></Text>
            <Story />
          </View>
        ),
      ],
    };

export default TextfieldsMeta;


// Default variant:
export const Placeholder = {};

export const Focused = {
    args: {
    
    },
};

export const Error = {
    args: {
    
    },
};

export const Disabled = {
    args: {
    
    },
};

