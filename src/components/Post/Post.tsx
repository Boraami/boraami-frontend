import React from "react";
import { SizableText, XStack, Image, Stack, StackProps } from "tamagui";
import Icon from "../Icon/Icon";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";

export type Props = StackProps & {
  username: string;
  avatarText: string;
  displayName: string;
  postText: string;
  postImg?: string | string[];
};

const Post = ({ avatarText, displayName, username, postText, postImg, ...rest }: Props) => {
  return (
    <XStack
      width={"100%"}
      backgroundColor={"$quoted-post-bg-color"}
      // paddingBottom={}
      paddingTop={24}
      flexDirection="column"
      justifyContent="center"
      {...rest}
    >
      <XStack flexDirection="row" justifyContent="space-between" alignItems="center">
        <XStack justifyContent="flex-start" alignItems="center">
          <XStack flexDirection="row">
            <Avatar AvatarText={avatarText} />
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
        paddingBottom={postImg ? 10 : 0} // might be modified once we have icon btns
        paddingTop={10}
        wordWrap="normal"
      >
        {postText}
      </SizableText>
      {typeof postImg == "object" ? (
        <XStack flexWrap="wrap" gap={2}>
          {postImg.map((item, i) => {
            const isLastImage = postImg.length === 3 && i === 2;
            const imageStyle = isLastImage ? "100%" : "49%";
            return (
              <Image
                key={i}
                source={{
                  uri: item,
                }}
                objectFit="cover"
                width={imageStyle}
                aspectRatio={isLastImage ? 2 : 1}
                alignSelf="center"
                borderRadius={4}
                borderWidth={1}
                borderColor="$quoted-post-bg-color"
              />
            );
          })}
        </XStack>
      ) : postImg != null ? (
        <Image
          source={{
            uri: postImg,
          }}
          objectFit="cover"
          width={"100%"}
          aspectRatio={1}
          alignSelf="center"
          borderRadius={4}
          borderWidth={1}
          borderColor="$quoted-post-bg-color"
        />
      ) : null}
      <Divider borderColor={"$divider-strong"} paddingTop={24} />
    </XStack>
  );
};

export default Post;
