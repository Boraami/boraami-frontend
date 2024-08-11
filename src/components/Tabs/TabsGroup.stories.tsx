import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import CustomTabGroup from "./TabsGroup";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";


const CustomTabGroupMeta: Meta<typeof CustomTabGroup> = {
  title: "CustomTabGroup",
  component: CustomTabGroup,
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

export default CustomTabGroupMeta;

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