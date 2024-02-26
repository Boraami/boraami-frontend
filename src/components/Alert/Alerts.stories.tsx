import React from "react";
import { Meta } from "@storybook/react-native";
import { Alerts } from "./Alerts";
import { Text, View } from 'tamagui';

const AlertsMeta: Meta<typeof Alerts> = {
  title: "Alerts",
  component: Alerts,
  args: {
    variant: 'default',
    shade: 'solid',
    title: 'We are going live in July!',
    content: '',
    borderLeftWidth: '',  
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

export const LongSolid = {
  args:{
    variant: 'default',
    shade: 'solid',
    content: 'We are happy to announce that we are going live on July 28th. Get ready!',
    bdLeftWidth: 4,  
  }
};

export const LongSubtle = {
  args: {
    variant: 'default',
    shade: 'subtle',
    content: 'We are happy to announce that we are going live on July 28th. Get ready!',
    bdLeftWidth: 4,  
  },
};
export const LongOutline = {
  args: {
    variant: 'default',
    shade: 'outline',
    content: 'We are happy to announce that we are going live on July 28th. Get ready!',
  },
};

export const ShortSolid = {
  args: {
    variant: 'default',
    shade: 'solid',
  },
};

export const ShortSubtle = {
  args: {
    variant: 'default',
    shade: 'subtle',
  },
};

export const ShortOutline = {
  args: {
    variant: 'default',
    shade: 'outline',
  },
};

export const SuccessSolid = {
  args: {
    variant: 'success',
    shade: 'solid',
  },
};

export const SuccessSubtle = {
  args: {
    variant: 'success',
    shade: 'subtle',
  },
};

export const SuccessOutline = {
  args: {
    variant: 'success',
    shade: 'outline',
  },
};

export const ErrorSolid = {
  args: {
    variant: 'error',
    shade: 'solid',
  },
};

export const ErrorSubtle = {
  args: {
    variant: 'error',
    shade: 'subtle',  },
};

export const ErrorOutline = {
  args: {
    variant: 'error',
    shade: 'outline'
  },
};