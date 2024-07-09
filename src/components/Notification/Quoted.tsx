import React from "react";
import { XStack, YStack, SizableText, Separator } from "tamagui";
import Icon from "../Icon/Icon";
import Badge from "./Badges";
import QuotedPost from "../Post/QuotedPost";

export type QuotedNotificationProps = {
  iconName: string;
  displayName: string;
  userName: string;
  message: string;
  dateTime: string;
  replyMsg: string;
  quotedUsername: string;
  quotedAvatarText: string;
  quotedDisplayName: string;
  quotedPostText: string;
  quotedPostImg: string;
};

const QuotedNotification: React.FC<QuotedNotificationProps> = ({
  iconName,
  displayName,
  userName,
  message,
  dateTime,
  replyMsg,
  quotedUsername,
  quotedAvatarText,
  quotedDisplayName,
  quotedPostText,
  quotedPostImg
}) => {
  return (
    <>
      <XStack flexDirection="column">
      <XStack gap={12} paddingTop={10} paddingBottom={10} paddingLeft={5} paddingRight={5}>
        <Icon name={iconName} size={17} style={{ paddingTop: 8 }} color={'#AA7AFF'} />
        <YStack gap={4} width={'90%'}>
          <XStack justifyContent='space-between' paddingTop={5}>
            <XStack>
              <SizableText fontFamily={'$heading'} color={'$username-action-taken-text'} size={'$xs'} paddingLeft={1} paddingTop={1}>
                {displayName}
              </SizableText>
              <SizableText fontFamily={'$heading'} size={'$xs'} color={'$username-action-taken-text'} paddingLeft={1} paddingTop={1}>
                {message}
              </SizableText>
            </XStack>
            <Badge color={'$boraami.700'} size="sm" count={0} />
          </XStack>
          <XStack justifyContent='space-between'>
            <SizableText fontFamily={'$body'} size={'$xs'} color={'$user-tag-text'}>
              {userName}
            </SizableText>
            <SizableText fontFamily={'$body'} size={'$2xs'} color={'$date-time-text'}>
              {dateTime}
            </SizableText>
          </XStack>
        </YStack>
      </XStack>
      {replyMsg !== "" && (
        <XStack>
          <SizableText
            fontFamily={'$body'}
            size={'$sm'}
            color={'$replied-quoted-text'}
            paddingLeft={3}
            paddingBottom={15}
            wordWrap='normal'
            selectable
          >
            {replyMsg}
          </SizableText>
        </XStack>
      )}
          {quotedDisplayName !== "" && (
        <XStack>
          <QuotedPost
            quotedAvatarText={quotedAvatarText}
            quotedDisplayName={quotedDisplayName}
            quotedPostImg={quotedPostImg}
            quotedPostText={quotedPostText}
            quotedUsername={quotedUsername}
          />
        </XStack>
      )}
      </XStack>
      <Separator borderColor={'$boraami.100'} />
    </>
  );
};

export default QuotedNotification;