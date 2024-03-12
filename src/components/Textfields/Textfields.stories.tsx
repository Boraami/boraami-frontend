import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "Textfields",
    component: Textfields,
    args: {
      defaultText: 'Default input. Maximum height of container to occupy only 5 lines of input. Provide a scroll post 5 lines.',
      helperText: 'Error Text',
      maxLength: 1000
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

export const PlaceholderTextbox= {
  args: {
    name: 'placeholder',
  },
};

export const DefaultTextbox = {
  args: {
    name: 'default',
  },
};

export const FocusedTextbox = {
  args: {
    name: 'focused',
  },
};

export const ErrorTextbox = {
  args: {
    name: 'error',
  },
};

export const DisabledTextbox = {
  args: {
    name: 'disabled',
  },
};
