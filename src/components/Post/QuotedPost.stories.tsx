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
        quotedAvatarText:'TT',
        quotedDisplayName:'Bessie Cooper',
        quotedUsername:'@armyuser1',
        quotedPostText: 'I miss them.',
        quotedPostImg: require('../../assets/Notification/Image.png'),
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
  