import React from "react";
import { Avatar, ScrollView, Separator, SizableText, XStack, YStack } from "tamagui";
import Icon from "../Icon/Icon";
import Badge from "./Badges";
import { SafeAreaView } from "react-native-safe-area-context";
import QuotedPost from "../Post/QuotedPost";
export type Props = {
  data: {
    iconName: "user-large" | "comment" | "retweet" | "heart";
    displayName: string,
    notificationType: string,
    userName: string,
    dateTime: string,
    replyMsg: string,
    quotedUsername: string,
    quotedAvatarText: string,
    quotedDisplayName: string,
    quotedPostText: string,
    quotedPostImg: string,
  }[];
};

export default function Notifications ({data}: Props){
  return (
    <SafeAreaView>
      <ScrollView>
      {data.map((item, i) => {
        return (
        <XStack flexDirection="column" key={`${item.userName}${item.dateTime}-${i}`}>
        <XStack
        gap={12}
        height={60}
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={5}
        paddingRight={5}
        >
          <Icon
            name={item.iconName}
            size={17}
            style={{
              paddingTop: 8,
            }}
            color={'#AA7AFF'}
          />
          <YStack gap={4} width={'90%'}>
            <XStack justifyContent='space-between' paddingTop={5}>
            <XStack>
              <SizableText
              fontFamily={'$heading'}
              color={'$username-action-taken-text'}
              size={'$xs'}
              paddingLeft={1}
              paddingTop={1}>{item.displayName}</SizableText> 
              <SizableText
              fontFamily={'$body'}
              size={'$xs'}
              color={'$username-action-taken-text'}
              paddingLeft={5}
              wordWrap='normal'
              >{item.notificationType}</SizableText>
            </XStack>
            <Badge color={'$boraami.700'} size="sm" count={0} />
            </XStack>
            <XStack
            justifyContent='space-between'>
            <SizableText
            fontFamily={'$body'}
            size={'$xs'}
            color={'$user-tag-text'}>
            {item.userName}
            </SizableText>
            <SizableText
            fontFamily={'$body'}
            size={'$2xs'}
            color={'$date-time-text'}>
            {item.dateTime}
            </SizableText>
            </XStack>
          </YStack>
        </XStack>
        {item.replyMsg!== "" && (
          <XStack>
          <SizableText
            fontFamily={'$body'}
            size={'$sm'}
            color={'$replied-quoted-text'}
            paddingLeft={3}
            paddingBottom={15}
            wordWrap='normal'
            selectable>{item.replyMsg}</SizableText>
          </XStack>)}
        {item.quotedDisplayName!==""&&(
          <XStack paddingBottom={15}>
            <QuotedPost 
            quotedAvatarText={item.quotedAvatarText} 
            quotedDisplayName={item.quotedDisplayName} 
            quotedPostImg={item.quotedPostImg} 
            quotedPostText={item.quotedPostText} 
            quotedUsername={item.quotedUsername}/>
            </XStack>
        )}
        <Separator borderColor={'$boraami.100'}/>
      </XStack>
      );
      })}
      
      </ScrollView>
    </SafeAreaView>
  )
};
/*
*/