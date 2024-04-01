import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import AvatarUserProfile from "./Avatar";
const AvatarData = [
    {
        AvatarText:'AA',
        AvatarUsername:'Yoongi’s wife',
        UserTag: '@tangerines4life', 
    },
    {
        AvatarText:'AA',
        AvatarUsername:'Jimin’s wife',
        UserTag: '@tangerines4life', 
    },
    {
        AvatarText:'AA',
        AvatarUsername:'Seokjin’s wife',
        UserTag: '@tangerines4life', 
    },
    {
        AvatarText:'AA',
        AvatarUsername:'Namjoon’s wife',
        UserTag: '@tangerines4life', 
    },
    {
        AvatarText:'AA',
        AvatarUsername:'Jungkook’s wife',
        UserTag: '@tangerines4life', 
    },
    {
        AvatarText:'AA',
        AvatarUsername:'Taehyung’s wife',
        UserTag: '@tangerines4life', 
    },
    {
        AvatarText:'AA',
        AvatarUsername:'Hobi’s wife',
        UserTag: '@tangerines4life', 
    },
];
const AvatarUserProfileMeta: Meta<typeof AvatarUserProfile> = {
    title: "AvatarUserProfile",
    component: AvatarUserProfile,
    argTypes: {
      
    },
    args: {
        data: AvatarData, 
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
  
  export const AvatarUserProfile1 = {};