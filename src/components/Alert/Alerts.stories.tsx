import React from "react";
// import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { Alerts } from "./Alerts";
import { Text, View} from 'tamagui';

const AlertsMeta: Meta<typeof Alerts> = {
  title: "Alerts",
  component: Alerts,
  args: {
    borderColor: '#B48BFF',
    backgroundColor: '#5F3D9C',
    borderLeftColor: '#B48BFF', 
    color: '#FFFFFF', 
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

export default AlertsMeta;

export const LongAlertSolid = {};

export const LongAlertSubtle = {
  args: {
    backgroundColor: '$boraami.100',
    // backgroundColor: '#F0E8FF',
    // color: '#322941',
  },
};

export const LongAlertOutline = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
  },
};

export const ShortAlertSolid = {
  args: {
    backgroundColor: '#5F3D9C',
    color: '#322941',
  },
};

export const ShortAlertSubtle = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
  },
};

export const ShortAlertOutline = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
  },
};

export const SuccessAlertSolid = {
  args: {
    backgroundColor: '#2F9D83',
    color: '#322941',
  },
};

export const SuccessAlertSubtle = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
  },
};

export const SuccessAlertOutline = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
  },
};

export const ErrorAlertSolid = {
  args: {
    backgroundColor: '$ptd.400',
    // backgroundColor: '$bg-ptd.400',
    // backgroundColor: '#FB923C',
    color: '#322941',
  },
};

export const ErrorAlertSubtle = {
  args: {
    backgroundColor: '#FEE8D6',
    color: '#322941',
  },
};

export const ErrorAlertOutline = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#FB923C',
    borderColor: '#FB923C',
  },
};