import React from "react";
import {XStack, SizableText } from "tamagui";
import IconBtn from "../Button/IconBtn";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import {useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";
import {Props} from '../Post/Post';

type DateTimeProp = Pick<Props, 'dateTime'> & {
    type: 'ViewedPost' | 'TLPost';
}

const PostEngagement = ({dateTime, type}:DateTimeProp) => {  
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const idleColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.mono[500];
  const activeColor = colorScheme.serendipity[500];
  const renderIcons = ()=>{
    return(
    <>
    <IconBtn
    count={234}
    iconBefore={<FontAwesome name="heart-o" size={16} color={type==='TLPost'?idleColor:'#fff'} />}
    iconAfter={<FontAwesome name="heart" size={16} color={"#EC4899"} />}
    idleColor={type==='TLPost'?idleColor:'#fff'}
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
    iconBefore={<FontAwesome6 name="comment" size={16} color={type==='TLPost'?idleColor:'#fff'} />}
    iconAfter={<FontAwesome6 name="comment" size={16} color={type==='TLPost'?idleColor:'#fff'} />}
    idleColor={type==='TLPost'?idleColor:'#fff'}
    activeColor={type==='TLPost'?idleColor:'#fff'}
    paddingHorizontal={4}
    />
    <IconBtn
    count={234}
    iconBefore={<FontAwesome6 name="retweet" size={16} color={type==='TLPost'?idleColor:'#fff'} />}
    iconAfter={<FontAwesome6 name="retweet" size={16} color={activeColor} />}
    idleColor={type==='TLPost'?idleColor:'#fff'}
    activeColor={activeColor}
    paddingHorizontal={4}
    />
    </>
    )
}

return (
    <XStack paddingTop={type==='TLPost'?12:18} alignItems="center" justifyContent="space-between" flexDirection='row'>
    {type==='TLPost'?
    <XStack gap={14}>
    {renderIcons()}
    </XStack>
    : renderIcons()
    }
    {type==='TLPost' &&
    <SizableText fontFamily={"$body"} size={"$xs"} color={"$date-time-text"}>
    {dateTime}
    </SizableText>
    }   
    </XStack>
  );
};

export default PostEngagement;
