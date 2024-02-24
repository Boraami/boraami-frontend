import React from "react";
import { Meta } from "@storybook/react-native";
import { Alerts } from "./Alerts";
import { Text, View} from 'tamagui';

const AlertsMeta: Meta<typeof Alerts> = {
  title: "Alerts",
  component: Alerts,
  args: {
    title: 'We are going live in July!',
    content: 'We are happy to announce that we are going live on July 28th. Get ready!',
    backgroundColor: '#5F3D9C',
    borderColor: '#5F3D9C',
    borderLeftColor: '#B48BFF', 
    borderLeftWidth: 4,
    color: '#FFFFFF', 
    // borderWidth: 1,
    size: 'long',
    icon: 'heart',
    iconColor: '#FFFFFF',
    closeColor: '#FFFFFF'
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
    borderColor: '#F0E8FF',
    color: '#322941',
    icon: 'heart',
    iconColor: '#5F3D9C',
    closeColor: '#737373'
  },
};
export const LongAlertOutline = {
  args: {
    backgroundColor: '#322941',
    // backgroundColor: '#FFFFFF',
    color: '#322941',
    icon: 'heart',
    iconColor: '#5F3D9C',
    closeColor: '#737373',
    borderLeftWidth: 0, 
    borderColorWidth: '#FFFFFF', 
    borderColor: '#7957B5'
  },
};

export const ShortAlertSolid = {
  args: {
    backgroundColor: '#5F3D9C',
    color: '#FFFFFF',
    // content: '',
    size: 'short'
  },
};

export const ShortAlertSubtle = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
    // content: '',
    borderWidth: 0, 
    size: 'short',
    icon: 'heart',
    iconColor: '#5F3D9C',
    closeColor: '#737373'
  },
};

export const ShortAlertOutline = {
  args: {
    backgroundColor: '#F0E8FF',
    color: '#322941',
    // content: '',
    size: 'short',
    icon: 'heart',
    iconColor: '#5F3D9C',
    closeColor: '#737373',
  },
};

export const SuccessAlertSolid = {
  args: {
    backgroundColor: '#2F9D83',
    color: '#FFFFFF',
    title: 'Selection successfully moved!',
    // content: '',
    size: 'short',
    icon: 'checkcircleo',
    iconSize: 20,
    iconColor: '#FFFFFF',
    closeColor: '#FFFFFF',
    borderLeftColor: '#2F9D83'

  },
};

export const SuccessAlertSubtle = {
  args: {
    backgroundColor: '#2F9D83',
    title: 'Selection successfully moved!',
    color: '#322941',
    // content: '',
    size: 'short',
    icon: 'checkcircleo',
    iconSize: 20,
    iconColor: '#2F9D83',
    closeColor: '#737373',
    borderLeftColor: ''
  },
};

export const SuccessAlertOutline = {
  args: {
    backgroundColor: '#FFFFFF',
    title: 'Selection successfully moved!',
    color: '#000000',
    // content: '',
    borderColor: '#2F9D83',
    borderLeftColor: '#2F9D83',
    borderLeftWidth: 0,
    size: 'short',
    icon: 'checkcircleo',
    iconSize: 20,
    iconColor: '#2F9D83',
    closeColor: '#737373',
  },
};

export const ErrorAlertSolid = {
  args: {
    backgroundColor: '#FB923C',
    color: '#322941',
    title: 'Poor internet connection!',
    // content: '',
    size: 'short',
    icon: 'warning',
    // iconColor: '#240E4D',
    iconColor: '$bg-neutral-strong',
    closeColor: '#240E4D'
  },
};

export const ErrorAlertSubtle = {
  args: {
    backgroundColor: '#FEE8D6',
    color: '#500A0A',
    title: 'Poor internet connection!',
    // content: '',
    size: 'short',
    icon: 'warning',
    iconColor: '#FFFFFF',
    closeColor: '#FFFFFF'
  },
};

export const ErrorOutline = {
  args: {
    backgroundColor: '#FFFFFF',
    color: '#500A0A',
    borderColor: '#FB923C',
    borderWidth: 1,
    title: 'Poor internet connection!',
    // content: '',
    size: 'short',
    icon: 'warning',
    iconColor: '#FFFFFF',
    closeColor: '#FFFFFF'
  },
};