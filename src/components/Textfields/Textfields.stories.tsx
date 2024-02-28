import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "Textfields",
    component: Textfields,
    args: {
      height: 136,
      width: 428, 
      display: 'flex',
      borderRadius: 6,
      num1: 6,
      num2: 12, 
      bdColor: '$placeholder-textbox-border',
      bgColor: '$placeholder-textbox-fill',
      bdWidth: 1,
      color: '$placeholder-textbox-text',
      message: 'Default input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.',
      fontSize: 14,
      errorText: 'Error Text',
      errorTextColor: 'black',
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

export const Default = {
  args: {
    bdColor: '$default-textbox-border',
    bgColor: '$default-textbox-fill',
    color: '$default-textbox-text',
    errorTextColor: 'black',

  },
};

export const Focused = {
    args: {
      bdColor: '$focused-textbox-border',
      bgColor: '$focused-textbox-fill',
      color: '$focused-textbox-text',
      bdWidth: 1,
    },
};

export const Error = {
    args: {
      bdColor: '$error-textbox-border',
      bgColor: '$error-textbox-fill',
      // bgColor: '#FDF2F8',
      color: '$error-textbox-text',
      errorTextColor: '#FDF2F8',
      bdWidth: 2,
      errorText: 'Error Text',  
    },
};

export const Disabled = {
    args: {
      bdColor: '$disabled-textbox-border',
      bgColor: '$disabled-textbox-fill',
      color: '$disabled-textbox-text'

    },
};

