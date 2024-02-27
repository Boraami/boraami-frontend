import React from "react";
import { Meta } from "@storybook/react-native";
import { Textfields } from "./Textfields";
import { Text, View } from 'tamagui';

const TextfieldsMeta: Meta<typeof Textfields> = {
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

const Placeholder = {
    args: {
    
    },
};

const Focused = {
    args: {
    
    },
};

const Error = {
    args: {
    
    },
};

const Disabled = {
    args: {
    
    },
};

