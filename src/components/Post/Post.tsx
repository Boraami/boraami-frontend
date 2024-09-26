//react-native-image-zoom-viewer
import React, { useState } from "react";
import { SizableText, XStack, Stack, StackProps, Button, YStack,  } from "tamagui";
import PopupMenu from "../PopupMenu/PopupMenu";
import { popupMenuItems } from "../PopupMenu/PopupMenu.stories";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";
import IconBtn from "../Button/IconBtn";
import { colorScheme } from "../../themes/theme";
import { Pressable, StatusBar, useColorScheme , Linking, Platform } from "react-native";
import { Modal, TouchableOpacity, Alert,Image, Dimensions} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import ViewedPostOptionsMenu from "./ViewedPostOptionsMenu";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

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
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const idleColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.mono[500];
  const activeColor = colorScheme.serendipity[500];
  const [optionsMenu,setOptionsMenu]= React.useState(false)
  const [showDialog,setShowDialogue] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEngagementVisible, setEngagementVisible ] = useState(true);
  const images = (Array.isArray(postImg) ? postImg : [postImg]).filter((uri)=> typeof uri==='number').map((img)=>{
      if(typeof img === 'number'){
        return{url: Image.resolveAssetSource(img).uri};
      } else {
        return{url:img!};
      }
  });

  const requestMediaLibraryPermission = async () => {
    const { status } = await MediaLibrary.getPermissionsAsync();
    if (status === 'granted') {
      return true; // Permission already granted
    }
    if (status === 'denied') {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (!granted) {
        showPermissionAlert();
        return false;
      }
      return true;
    }
    if (status === 'undetermined') {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      return granted;
    }
    return false;
  };

  const showPermissionAlert = () => {
    Alert.alert(
      'Permission Denied',
      'Please enable media library permissions in your device settings to save images.',
      [
        {
          text: 'Open Settings',
          onPress: () => openAppSettings(),
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  const saveImageToGallery = async (imageUrl: string) => {
    setOptionsMenu(false)
    try {
      //Requesting media library permissions
      const hasPermission = await requestMediaLibraryPermission();
      if(!hasPermission) return;
      //Downloading the image to the cache directory
      const localFilePath = `${FileSystem.cacheDirectory}downloaded-image.jpg`; // Temporary file path
      const downloadResult = await FileSystem.downloadAsync(imageUrl, localFilePath);
      if (downloadResult.status === 200) {
        //Saving the downloaded image to the gallery
        const asset = await MediaLibrary.createAssetAsync(downloadResult.uri);
        await MediaLibrary.createAlbumAsync('Boraami', asset, true); // Create or add to album - becauseof this every time user saves img, it sees an alert askking permission. it cant be removed as its for security reasons.
        //Delete the temporary file after saving
        await FileSystem.deleteAsync(downloadResult.uri);
        Alert.alert('Success', 'Image has been saved to your gallery.');
      } else {
        Alert.alert('Error', `Failed to download image. Status code: ${downloadResult.status}`);
      }
    } catch (error) {
      console.error('Error saving image:', error);
      Alert.alert('Error', `Failed to save image: ${error}`);
    }
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
                key={i}
                source={{
                  uri:urlConversion,
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
        onRequestClose={() => {
          setShowDialogue(false),
          setOptionsMenu(false),
          setEngagementVisible(true)
        }}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        >
        <XStack flex={1} backgroundColor= 'rgba(0,0,0,1)'>
          <StatusBar hidden={true}/>
          <XStack flex={1}>
          
            <XStack flex={1}>
            <ImageViewer
            imageUrls={images}
            renderIndicator={()=><XStack/>}
            style={{flex:1, width:"100%"}}
            index={currentIndex}
            onSwipeDown={() => setShowDialogue(false)}
            enableSwipeDown={true}
            saveToLocalByLongPress={false}
            onLongPress={()=>
              console.log(images[currentIndex]?.url)
            }
            failImageSource= {{url:'https://example.com/sample-image.jpg'}}
            onClick={()=>{
              setEngagementVisible(!isEngagementVisible)
              
            }}
            />
          </XStack>
          
            {isEngagementVisible && (
            <XStack 
              position='absolute'
              top={40}
              right={10}
              backgroundColor=  'rgba(0,0,0,0.7)' 
              borderRadius= {100}>
            <Button 
              alignSelf='flex-start'
              onPress={() => setOptionsMenu(!optionsMenu)} 
              circular
            ><FontAwesome6 name="ellipsis-vertical" size={18} color={'#fff'}/></Button>
            </XStack>
            )}
            {optionsMenu && (
            <>
            <Pressable style={{top:0,bottom:0,left:0,right:0,position:'absolute' }} onPress={()=>setOptionsMenu(false)}/>
            <YStack 
              position='absolute'
              top={85}
              right={55}
              width={115}
              height= {55} //80,111,85:55- prev pos. for me
              backgroundColor= 'white'
              borderRadius= {4}
              // iOS shadow properties
              shadowColor= '#000'
              shadowOffset= {{ width: 0, height: 2 }}
              shadowOpacity= {0.3}
              shadowRadius={4}
              flexWrap='wrap'
              // Android elevation
              elevation={100}>
            <ViewedPostOptionsMenu data={[
            {
              menuText: "Save Image ",
              iconName: "download",
              handleAction: () => {
                saveImageToGallery(images[currentIndex]?.url)
              },
            },
          ]} />
            </YStack>
            </>
            )}
            {isEngagementVisible && (
              <XStack 
              position='absolute'
              top={40}
              left={10}
              borderRadius={100}
              backgroundColor='rgba(0,0,0,0.5)' >
              <Button 
              alignSelf='flex-start'
              onPress={() => setShowDialogue(false)} 
              circular
            ><FontAwesome name="chevron-left" size={16} color={'#fff'}/></Button></XStack>
            )}
            {isEngagementVisible && (
          <YStack 
                position='absolute' 
                bottom={0}
                left={0}
                right={0}
                paddingHorizontal={20}
                height={60}
                backgroundColor= 'rgba(0,0,0,0.5)'>
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
              iconAfter={<FontAwesome6 name="comment" size={16} color={'#fff'} />}
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
              </YStack>
            )}
        </XStack>
        </XStack>
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

export default Post;