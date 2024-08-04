import React from "react";
import { Avatar, SizableText, XStack, Image, Stack } from "tamagui";
import Icon from "../Icon/Icon";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";

export type Props = {
  username: string;
  avatarText: string;
  displayName: string;
  postText: string;
  postImg: string;
};

const Post = ({ avatarText, displayName, username, postText, postImg }: Props) => {
  return (
    <XStack
      backgroundColor={"$quoted-post-bg-color"}
      paddingBottom={20}
      paddingTop={10}
      paddingLeft={40}
      paddingRight={40}
      width={"100%"}
      flexDirection="column"
      justifyContent="center"
    >
      <XStack flexDirection="row" justifyContent="space-between" alignItems="center">
        <XStack justifyContent="flex-start" alignItems="center">
          <XStack flexDirection="row">
            <Avatar
              circular
              backgroundColor={"$boraami.700"}
              borderWidth={1}
              borderColor={"$boraami.700"}
              width={32}
              height={32}
            >
              <SizableText fontFamily={"$btn"} color={"$mono.50"} size={"$xs"}>
                {avatarText}
              </SizableText>
            </Avatar>
          </XStack>
          <SizableText
            fontFamily={"$heading"}
            color={"$quoted-post-username"}
            size={"$xs"}
            paddingLeft={8}
            lineHeight={18}
          >
            {displayName}
          </SizableText>
          <SizableText
            fontFamily={"$btn"}
            color={"$quoted-post-user-tag"}
            size={"$xs"}
            paddingLeft={4}
          >
            {username}
          </SizableText>
        </XStack>
        <PopupMenu data={popupMenuItems} sheetHeightPerc={35} iconWidth={14} />
      </XStack>
      <SizableText
        fontFamily={"$body"}
        size={"$sm"}
        color={"$replied-quoted-text"}
        paddingLeft={3}
        paddingBottom={10}
        paddingTop={10}
        wordWrap="normal"
      >
        {postText}
      </SizableText>
      <Image
        source={{
          uri: postImg,
        }}
        objectFit="cover"
        width={'100%'}
        aspectRatio={1}
        alignSelf="center"
        borderRadius={4}
        borderWidth={1}
        borderColor="$quoted-post-bg-color"
      />
    </XStack>
  );
};

export default Post;
