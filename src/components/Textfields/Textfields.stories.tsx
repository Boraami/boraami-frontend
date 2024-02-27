import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

export const TextfieldsMeta: Meta<typeof Textfields> = {
    title: "TextFields",
    component: Textfields,
    args: {
    
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

export const Default = {};

export const Placeholder = {
    args: {
    
    },
};

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

