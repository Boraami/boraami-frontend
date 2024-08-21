import React from "react";
import { SizableText, XStack, Image, Stack, StackProps } from "tamagui";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";
import IconBtn from "../Button/IconBtn";
import { colorScheme } from "../../themes/theme";
import { useColorScheme } from "react-native";

export type Props = StackProps & {
  username: string;
  avatarText: string;
  displayName: string;
  dateTime: string;
  postText: string;
  postImg?: string | string[];
};

const Post = ({
  avatarText,
  displayName,
  username,
  postText,
  dateTime,
  postImg,
  ...rest
}: Props) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";

  const idleColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.mono[500];
  const activeColor = isDarkTheme ? colorScheme.boraami[300] : colorScheme.boraami[500];

  return (
    <XStack
      width={"100%"}
      backgroundColor={"$quoted-post-bg-color"}
      // paddingBottom={}
      paddingTop={20}
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
      <XStack paddingTop={12} alignItems="center" justifyContent="space-between">
        <XStack gap={8}>
          <IconBtn
            count={234}
            iconBefore={<FontAwesome name="heart-o" size={16} color={idleColor} />}
            iconAfter={<FontAwesome name="heart" size={16} color={activeColor} />}
            idleColor={idleColor}
            activeColor={activeColor}
            // This is how you handle the toggle between function depending on tap of icon for example sending liking unliking api request
            handleBtnAction={(tapped, setTapped, liked, setLiked) => {
              if (tapped) {
                alert("You LIKED it!");
                // Mocking api request throwing error and setting tapped and liked count to prev value
                let promise = new Promise(function (resolve, reject) {
                  setTimeout(() => {
                    reject(new Error("Error occurred")); // reject the Promise with an error
                  }, 2000);
                });
                // If it throws an error we reverse the tap and like count
                promise.catch(() => {
                  setTapped(false);
                  setLiked(liked);
                });
              } else {
                alert("You UNLIKED it!"); // unlike api request
              }
            }}
            paddingHorizontal={4}
          />
          <IconBtn
            count={234}
            iconBefore={<FontAwesome6 name="retweet" size={16} color={idleColor} />}
            iconAfter={<FontAwesome6 name="retweet" size={16} color={activeColor} />}
            idleColor={idleColor}
            activeColor={activeColor}
            paddingHorizontal={4}
          />
          <IconBtn
            count={234}
            iconBefore={<FontAwesome6 name="comment" size={16} color={idleColor} />}
            iconAfter={<FontAwesome6 name="comment" size={16} color={activeColor} />}
            idleColor={idleColor}
            activeColor={activeColor}
            paddingHorizontal={4}
          />
        </XStack>
        <SizableText fontFamily={"$body"} size={"$xs"} color={"$date-time-text"}>
          {dateTime}
        </SizableText>
      </XStack>
      <Stack paddingTop={20}>
        <Divider borderColor={"$divider-strong"} />
      </Stack>
    </XStack>
  );
};

export default Post;
