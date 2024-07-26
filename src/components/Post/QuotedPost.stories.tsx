import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import QuotedPost from "./QuotedPost";
const QuotedPostMeta: Meta<typeof QuotedPost> = {
    title: "QuotedPost",
    component: QuotedPost,
    argTypes: {
      
    },
    args: {
        avatarText:'TT',
        displayName:'Bessie Cooper',
        username:'@armyuser1',
        postText: 'I miss them.',
        postImg: require('../../assets/Notification/Image.png'),
    },
    decorators: [
      (Story) => (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      ),
    ],
  };
  
  export default QuotedPostMeta;
  
  export const QuotedPost1 = {};
  