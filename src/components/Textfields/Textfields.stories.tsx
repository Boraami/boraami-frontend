import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "Textfields",
    component: Textfields,
    args: {
      num1: 6,
      num2: 12, 
      defaultText: 'Default input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.',
      fontSize: 14,
      helperText: 'Error Text',
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
    defaultText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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

