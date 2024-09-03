//react-native-awesome-gallery
import React, { useState } from "react";
import { SizableText, XStack, Stack, StackProps, Button } from "tamagui";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";
import IconBtn from "../Button/IconBtn";
import { colorScheme } from "../../themes/theme";
import { useColorScheme } from "react-native";
import { Modal, TouchableOpacity, View,Image, StatusBar} from "react-native";
import Gallery from "react-native-awesome-gallery";

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

const Posts = ({
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
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const [showDialog,setShowDialogue] = React.useState(false);
  const idleColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.mono[500];
  const activeColor = colorScheme.serendipity[500];
  const [isEngagementVisible, setEngagementVisible ] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = (Array.isArray(postImg) ? postImg : [postImg]).filter((uri)=> typeof uri==='number').map((img)=>{
      if(typeof img === 'number'){
        return Image.resolveAssetSource(img).uri;
      } else {
        return img!;
      }
  });
  const [imageUris, setImageUris] = useState(images);
  const imageData = imageUris.map((imageUri, index) => ({
    uri: imageUri,
    onError: () => handleImageError(index),
  }));
  const handleImageError = (index:number) => {
    const updatedImages = [...imageUris];
    updatedImages[index] = 'path/to/fallback-image.jpg';
    setImageUris(updatedImages);
  };

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

            let urlConversion = '';
            if(typeof item === 'number'){
                urlConversion = Image.resolveAssetSource(item).uri
              } else {
                urlConversion = item!
              }
            return (
              <TouchableOpacity 
              key={i} 
              style={{flexBasis: imageFlexStyle}}
              onPress={()=>{
                setShowDialogue(true);
                setCurrentIndex(i)
              }}>
              <Image
                source={{
                  uri: urlConversion,
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
      <Modal 
        visible={showDialog}
        onRequestClose={() => setShowDialogue(false)}
        transparent={true}
        animationType="fade"
      >
        <View style={{flex:1, backgroundColor: 'rgba(0,0,0,1)'}}>
          <StatusBar hidden={true}/>
          <View style={{flex:1}}>
         <Gallery
            keyExtractor={(item,i)=>i}
            data={imageData.map((item) => item.uri)}
            initialIndex={currentIndex}
            style={{flex:1, width:"100%",}}
            onSwipeToClose={() => setShowDialogue(false)}
            onTap={()=>setEngagementVisible(!isEngagementVisible)}
          />
          {isEngagementVisible && (
              <View style={{position:'absolute', top:0,left:5, borderRadius:100, backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <Button 
              alignSelf='flex-start'
              onPress={() => setShowDialogue(false)} 
              circular
            ><FontAwesome name="chevron-left" size={16} color={'#fff'}/></Button></View>
            )}
            {isEngagementVisible && (
              <View style={{
                position:'absolute', 
                bottom:0,
                left:0,
                right:0,
                paddingHorizontal:20,
                height:60,
                backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <XStack paddingTop={18} alignItems="center" justifyContent="space-between" flexDirection="row">
            <IconBtn
              count={234}
              iconBefore={<FontAwesome name="heart-o" size={16} color={'#fff'} />}
              iconAfter={<FontAwesome name="heart" size={16} color={"#EC4899"} />}
              idleColor={'#fff'}
              activeColor={"#EC4899"}
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
              iconBefore={<FontAwesome6 name="comment" size={16} color={'#fff'} />}
              iconAfter={<FontAwesome6 name="comment" size={16} color={idleColor} />}
              idleColor={'#fff'}
              activeColor={'#fff'}
              paddingHorizontal={4}
            />
            <IconBtn
              count={234}
              iconBefore={<FontAwesome6 name="retweet" size={16} color={'#fff'} />}
              iconAfter={<FontAwesome6 name="retweet" size={16} color={activeColor} />}
              idleColor={'#fff'}
              activeColor={activeColor}
              paddingHorizontal={4}
            />
          </XStack>
              </View>
            )}
        </View>
        </View>
      </Modal>
      {showEngagement ? (
        <XStack paddingTop={12} alignItems="center" justifyContent="space-between">
          <XStack gap={14}>
            <IconBtn
              count={234}
              iconBefore={<FontAwesome name="heart-o" size={16} color={idleColor} />}
              iconAfter={<FontAwesome name="heart" size={16} color={"#EC4899"} />}
              idleColor={idleColor}
              activeColor={"#EC4899"}
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
              iconBefore={<FontAwesome6 name="comment" size={16} color={idleColor} />}
              iconAfter={<FontAwesome6 name="comment" size={16} color={idleColor} />}
              idleColor={idleColor}
              activeColor={idleColor}
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
          </XStack>
          <SizableText fontFamily={"$body"} size={"$xs"} color={"$date-time-text"}>
            {dateTime}
          </SizableText>
        </XStack>
      ) : null}
      <Stack paddingTop={20}>
        {showDivider ? <Divider borderColor={"$divider-strong"} /> : null}
      </Stack>
    </XStack>
  );
};

export default Posts;