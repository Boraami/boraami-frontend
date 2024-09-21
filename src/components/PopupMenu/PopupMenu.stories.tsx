import React from "react";
import { Meta } from "@storybook/react-native";
import PopupMenu from "./PopupMenu";
import { View } from "tamagui";
import { YStack } from "tamagui";

export const popupMenuItems = [
  {
    menuText: "Report ",
    iconName: "flag",
    handleAction: () => {
      alert("works");
    },
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
      <View
        flex={1}
        paddingRight={20}
        justifyContent="center"
        height={"100%"}
        alignItems="flex-end"
      >
        <YStack height={"100%"} justifyContent="space-between" alignItems="flex-end">
          <Story />
          <Story />
        </YStack>
      </View>
    ),
  ],
};

export default PopupMenuMeta;

export const menu = {
  args: {
    sheetHeightPerc: 35,
    offsetX: -18,
  },
};

export const menuWithTitle = {
  args: {
    title: "Popup Menu",
    sheetHeightPerc: 40,
    offsetX: -18,
  },
};
