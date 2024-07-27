import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import AvatarUserProfile from "./Avatar";

const AvatarUserProfileMeta: Meta<typeof AvatarUserProfile> = {
  title: "AvatarUserProfile",
  component: AvatarUserProfile,
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

export default AvatarUserProfileMeta;

export const AvatarUser = {
  args: {
    AvatarText: "FA",
  },
};
