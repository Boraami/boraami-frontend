//react-native-image-zoom-viewer
import React, { useState } from "react";
import { SizableText, XStack, Stack, StackProps } from "tamagui";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";
import { TouchableOpacity, Image } from "react-native";
import PostEngagement from "./PostEngagementBtns";
import ViewedImageModal from "./ViewedImageModal";
import { ImageWithFallback } from "../Image/Image";

export type Props = StackProps & {
  username: string;
  avatarText: string;
  displayName: string;
  dateTime: string;
  postText: string;
  postImg?: string[];
  showEngagement?: boolean;
  showDivider?: boolean;
};

const Post = ({
  avatarText,
  displayName,
  username,
  postText,
  dateTime,
  postImg,
  showDivider = true,
  showEngagement = true,
  ...rest
}: Props) => {
  const [optionsMenu, setOptionsMenu] = React.useState(false);
  const [showDialog, setShowDialogue] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState<number[]>([]);

  const images = (Array.isArray(postImg) ? postImg : [postImg]).map((img) => {
    if (typeof img === "number") {
      return { url: Image.resolveAssetSource(img).uri };
    } else {
      return { url: img! };
    }
  });

  return (
    <XStack
      width={"100%"}
      backgroundColor={"$quoted-post-bg-color"}
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
      {postImg && postImg.length > 0 ? (
        <XStack flexWrap="wrap" gap={4} justifyContent="center" alignItems="center">
          {postImg?.map((item, i) => {
            const isLastImage = postImg.length === 3 && i === 2;
            const isOnlyImage = postImg.length === 1 && i === 0;
            const imageWidthStyle = isLastImage ? "100%" : "49%";
            const imageFlexStyle = isOnlyImage ? null : imageWidthStyle;

            return (
              <Stack
                key={i}
                width={isOnlyImage ? "100%" : "49%"}
                flex={1}
                flexBasis={imageFlexStyle}
                aspectRatio={isLastImage ? 2 : 1}
              >
                <TouchableOpacity
                  onPress={() => {
                    setShowDialogue(true);
                    setCurrentIndex(i);
                  }}
                >
                  <ImageWithFallback
                    imgSource={{
                      uri: typeof item === "number" ? Image.resolveAssetSource(item).uri : item!,
                    }}
                    handleError={() => setErrors((prev) => [...prev, i])}
                    contentFit="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      aspectRatio: isLastImage ? 2 : 1,
                      alignSelf: "center",
                      borderRadius: 4,
                      borderWidth: 1.5,
                      borderColor: "#E9E5F0",
                    }}
                  />
                </TouchableOpacity>
              </Stack>
            );
          })}
        </XStack>
      ) : null}
      {postImg && postImg.length > 0 ? (
        <ViewedImageModal
          showDialog={showDialog}
          setCurrentIndex={setCurrentIndex}
          setShowDialogue={setShowDialogue}
          images={images}
          errors={errors}
          currentIndex={currentIndex}
          setOptionsMenu={setOptionsMenu}
          optionsMenu={optionsMenu}
          dateTime={dateTime}
          modalType="ViewTLPost"
        />
      ) : null}
      {showEngagement ? (
        <PostEngagement
          dateTime={dateTime}
          type="TLPostImage"
          postEngagementData={{
            likeCount: 234,
            repostCount: 234,
            commentCount: 234,
          }}
        />
      ) : null}
      <Stack paddingTop={20}>
        {showDivider ? <Divider borderColor={"$divider-strong"} /> : null}
      </Stack>
    </XStack>
  );
};

export default Post;
