import React from "react";
import { Meta } from "@storybook/react-native";
import { Post } from './Post';
import { Text, View } from 'tamagui';

export const PostMeta: Meta<typeof Post> = {
    title: "Post",
    // component: Post,
    args: {},

    decorators: [
        (Story) => (
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ color: 'white'}}></Text>
            <Story />
          </View>
        ),
      ],
    };

export default PostMeta;

export const DefaultPost= {};

