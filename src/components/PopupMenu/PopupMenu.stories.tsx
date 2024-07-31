import React from "react";
import { Meta } from "@storybook/react-native";
import PopupMenu from "./PopupMenu";
import { View, XStack } from "tamagui";
import { YStack } from "tamagui";

const popupMenuItems = [
  {
    menuText: "Report ",
    iconName: "flag",
  },
  {
    menuText: "Mute user",
    iconName: "bell-slash",
  },
  {
    menuText: "Block user",
    iconName: "user-slash",
  },
];

const PopupMenuMeta: Meta<typeof PopupMenu> = {
  title: "PopupMenu",
  component: PopupMenu,
  argTypes: {},
  args: {
    data: popupMenuItems,
  },
  decorators: [
    (Story) => (
      <View flex={1} justifyContent="center" height={"100%"} alignItems="flex-end">
        <YStack height={"100%"} justifyContent="space-between" alignItems="flex-end">
          <Story />
          <Story />
        </YStack>
      </View>
    ),
  ],
};

export default PopupMenuMeta;

export const menu = {};
