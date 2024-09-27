//react-native-image-zoom-viewer
import React, { useState } from "react";
import { SizableText, XStack, Stack, StackProps, } from "tamagui";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";
import {  TouchableOpacity,Image,useColorScheme} from "react-native";
import PostEngagement from '../Post/PostEngagement'
import ViewedImageModal from "./ViewedImageModal";
//why isntit getting pushed whyyyyyyyyyyyyyy

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
  const [optionsMenu,setOptionsMenu]= React.useState(false)
  const [showDialog,setShowDialogue] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = (Array.isArray(postImg) ? postImg : [postImg]).filter((uri)=> typeof uri==='number').map((img)=>{
      if(typeof img === 'number'){
        return{url: Image.resolveAssetSource(img).uri};
      } else {
        return{url:img!};
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
      <XStack flexWrap="wrap" gap={2}>
      {postImg?.map((item, i) => {
        const isLastImage = postImg.length === 3 && i === 2;
        const isOnlyImage = postImg.length === 1 && i === 0;
        const imageWidthStyle = isLastImage ? "100%" : "49%";
        const imageFlexStyle = isOnlyImage ? null : imageWidthStyle;
        return (
          <TouchableOpacity 
          key={i} 
          style={{flexBasis: imageFlexStyle}}
          onPress={()=>{
            setShowDialogue(true);
            setCurrentIndex(i)
          }}>
          <Image
            key={i}
            source={{
              uri:typeof item === 'number'?Image.resolveAssetSource(item).uri:item!,
            }}
            style={{
              objectFit:"cover",
              width: '100%',
              aspectRatio:isLastImage ? 2 : 1,
              alignSelf:"center",
              borderRadius:4,
              borderWidth:1,
              borderColor:"$quoted-post-bg-color",
            }}
            
          /></TouchableOpacity>
        );
      })}
      </XStack>
      <ViewedImageModal
      showDialog={showDialog}
      setShowDialogue={setShowDialogue}
      images={images}
      currentIndex={currentIndex}
      setOptionsMenu={setOptionsMenu}
      optionsMenu={optionsMenu}
      dateTime={dateTime}
      modalType='ViewTLPost'
      />
      {showEngagement ? (
        <PostEngagement dateTime={dateTime} type='TLPost' />
      ) : null}
      <Stack paddingTop={20}>
        {showDivider ? <Divider borderColor={"$divider-strong"} /> : null}
      </Stack>
    </XStack>
  );
};

export default Post;