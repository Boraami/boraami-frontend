import React from "react";
import { Meta } from "@storybook/react-native";
import { Disabled } from "./Disabled";
import { Text, View } from 'tamagui';

export const DisabledMeta: Meta<typeof Disabled> = {
    title: "Disabled",
    component: Disabled,
    args: {
      num1: 6,
      num2: 12, 
      defaultText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      fontSize: 14,
      helperText: 'Disabled Text',
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

export default DisabledMeta;

export const Default = {};

