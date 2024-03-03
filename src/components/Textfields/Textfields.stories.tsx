import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "Textfields",
    component: Textfields,
    args: {
      // height: 136,
      // width: 428, 
      // display: 'flex',
      // borderRadius: 6,
      num1: 6,
      num2: 12, 
      bdColor: '$placeholder-textbox-border',
      bgColor: '$placeholder-textbox-fill',
      color: '$placeholder-textbox-text',
      message: 'Default input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.',
      fontSize: 14,
      helperText: 'Error Text',
      helperTextColor: '$placeholder-helper-text',
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

export const Placeholder = {};

export const Default = {
  args: {
    bdColor: '$default-textbox-border',
    bgColor: '$default-textbox-fill',
    color: '$default-textbox-text',
    helperTextColor: '$default-helper-text-textfield',
  },
};

export const Focused = {
    args: {
      bdColor: '$focused-textbox-border',
      bgColor: '$focused-textbox-fill',
      color: '$focused-textbox-text',
      helperTextColor: '$focused-helper-text-textfield',
    },
};

export const Error = {
    args: {
      bdColor: '$error-textbox-border',
      bgColor: '$error-textbox-fill',
      color: '$error-textbox-text',
      helperTextColor: '$error-helper-text-textfield',
      helperText: 'Error Text',  
    },
};

export const Disabled = {
    args: {
      bdColor: '$disabled-textbox-border',
      bgColor: '$disabled-textbox-fill',
      color: '$disabled-textbox-text',
      helperTextColor: '$disabled-helper-text-textfield',
    },
};

