import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import AvatarUserProfile from "./Avatar";

const AvatarUserProfileMeta: Meta<typeof AvatarUserProfile> = {
    title: "AvatarUserProfile",
    component: AvatarUserProfile,
    argTypes: {

    },
    args: {
    },
    decorators: [
      (Story) => (
        <View>
          <Story />
        </View>
      ),
    ],
  };

  export default AvatarUserProfileMeta;

  export const AvatarUser1 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Yoongi’s wife',
        UserTag: '@tangerines4life',
    }
  }

  export const AvatarUser2 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Jimin’s wife',
        UserTag: '@tangerines4life',
    }
  }

  export const AvatarUser3 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Seokjin’s wife',
        UserTag: '@tangerines4life',
    }
  }

  export const AvatarUser4 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Namjoon’s wife',
        UserTag: '@tangerines4life',
    }
  }

  export const AvatarUser5 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Jungkook’s wife',
        UserTag: '@tangerines4life',
    }
  }

  export const AvatarUser6 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Taehyung’s wife',
        UserTag: '@tangerines4life',
    }
  }

  export const AvatarUser7 = {
    args: {
        AvatarText:'AA',
        AvatarUsername:'Hobi’s wife',
        UserTag: '@tangerines4life',
    }
  }
