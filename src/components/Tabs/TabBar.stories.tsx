import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import TabBar from "./TabBar";

const TabBarMeta: Meta<typeof TabBar> = {
  title: "Tabs",
  component: TabBar,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
};

export default TabBarMeta;

export const Tab = {};
