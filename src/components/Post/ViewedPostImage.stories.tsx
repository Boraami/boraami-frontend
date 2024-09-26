import React from "react";
import { Meta } from "@storybook/react-native";
import ViewedPostImage from "./ViewedPostImage";
import { View } from "tamagui";
import { YStack } from "tamagui";

const ViewedPostImageMeta: Meta<typeof ViewedPostImage> = {
  title: "ViewedPostImage",
  component: ViewedPostImage,
  argTypes: {},
  args: {
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
        <YStack height={"100%"} justifyContent="center" alignItems="flex-end">
        </YStack>
      </View>
    ),
  ],
};

export default ViewedPostImageMeta;

export const ImageViewer = {

};
