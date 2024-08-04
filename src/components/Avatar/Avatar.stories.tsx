import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Avatar from "./Avatar";

const AvatarMeta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default AvatarMeta;

export const AvatarUser = {
  args: {
    AvatarText: "FA",
  },
};
