import React from "react";
import { Meta } from "@storybook/react-native";
import { Alerts } from "./Alerts";
import { Text, View} from 'tamagui';

const AlertsMeta: Meta<typeof Alerts> = {
  title: "Alerts",
  component: Alerts,
  args: {
    backgroundColor: '#5F3D9C',
    borderLeftColor: '#B48BFF', 
    color: '#FFFFFF', 
    borderColor: '#5F3D9C',
    borderWidth: 1,
    title: 'We are going live in July!',
    content: 'We are happy to announce that we are going live on July 28th. Get ready!',
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
    backgroundColor: '#F0E8FF',
    borderLeftColor: '#B48BFF', 
    color: '#322941',
  },
};
export const LongAlertOutline = {
  args: {
    backgroundColor: '#FFFFFF',
    color: '#322941',
  },
};

export const ShortAlertSolid = {
  args: {
    backgroundColor: '#5F3D9C',
    color: '#FFFFFF',
    content: '',
  },
};

export const ShortAlertSubtle = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
    content: '',
    borderWidth: 0, 
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
    color: '#FFFFFF',
    content: 'Selection successfully moved!',
    title: '',
  },
};

export const SuccessAlertSubtle = {
  args: {
    backgroundColor: '#2F9D83',
    content: 'Selection successfully moved!',
    color: '#322941',
    title: '',
  },
};

export const SuccessAlertOutline = {
  args: {
    backgroundColor: '#FFFFFF',
    content: 'Selection successfully moved!',
    color: '#000000',
    title: '',
    borderColor: '#2F9D83',
  },
};

export const ErrorAlertSolid = {
  args: {
    backgroundColor: '#FB923C',
    color: '#322941',
    content: 'Poor internet connection!',
    title: '',
  },
};

export const ErrorAlertSubtle = {
  args: {
    backgroundColor: '#FEE8D6',
    color: '#500A0A',
    content: 'Poor internet connection!',
    title: '',
  },
};

export const ErrorOutline = {
  args: {
    backgroundColor: '#FFFFFF',
    color: '#500A0A',
    borderColor: '#FB923C',
    borderWidth: 1,
    content: 'Poor internet connection!',
    title: '',
  },
};