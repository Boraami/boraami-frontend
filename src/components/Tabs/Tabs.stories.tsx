import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import CustomTab from "./Tabs";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";


const CustomTabMeta: Meta<typeof CustomTab> = {
  title: "Tabs",
  component: CustomTab,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CustomTabMeta;
export const Tab1 = {
    args:{
      tabTitle: 'Button',
      size: "xs",
      disabled: false
    }
  };
  export const Tab2 = {
    args:{
      tabTitle: 'Button',
      size: "sm",
    }
  };
  export const Tab3 = {
    args:{
      tabTitle: 'Button',
      size: "md",
    }
  };
  export const Tab4 = {
    args:{
      tabTitle: 'Button',
      size: "lg",
    }
  };