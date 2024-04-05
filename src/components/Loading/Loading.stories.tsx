import React from "react";
import { Meta } from "@storybook/react-native";
import { Loading } from './Loading';
import { Button, Spinner, View, Text } from 'tamagui';

export const LoadingMeta: Meta<typeof Loading> = {
    title: "Loading",
    component: Loading,
    args: {
      size: "small",
      spinnerColor: "$loading-ring",
      iconColor: "$star-icon",
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

export default LoadingMeta;


