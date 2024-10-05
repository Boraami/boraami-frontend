import React from "react";
import { Meta } from "@storybook/react-native";
import ViewedPostOptionsMenu from "./ViewedPostOptionsMenu";
import { View } from "tamagui";
import { YStack } from "tamagui";

export const menuItems = [
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

const ViewedPostOptionsMenuMeta: Meta<typeof ViewedPostOptionsMenu> = {
  title: "ViewedPostOptionsMenu",
  component: ViewedPostOptionsMenu,
  argTypes: {},
  args: {
    data: menuItems,
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
        <YStack height={"100%"} justifyContent="center" alignItems="flex-end"></YStack>
      </View>
    ),
  ],
};

export default ViewedPostOptionsMenuMeta;

export const menu = {};
