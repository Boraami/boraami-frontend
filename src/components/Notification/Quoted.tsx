import React from "react";
import { XStack, YStack, SizableText } from "tamagui";
import Icon from "../Icon/Icon";
import Badge from "../Badge/Badge";
import QuotedPost from "../Post/Post";
import Divider from "../Divider/Divider";

type QuotedNotificationProps = {
  iconName: string;
  displayName: string;
  userName: string;
  dateTime: string;
  replyMsg: string;
  quotedUsername: string;
  quotedAvatarText: string;
  quotedDisplayName: string;
  quotedPostText: string;
  quotedPostImg: string;
};

const QuotedNotification = ({
  iconName,
  displayName,
  userName,
  dateTime,
  replyMsg,
  quotedUsername,
  quotedAvatarText,
  quotedDisplayName,
  quotedPostText,
  quotedPostImg,
}: QuotedNotificationProps) => {
  return (
    <>
      <XStack flexDirection="column">
        <YStack paddingHorizontal={10}>
          <XStack gap={10} paddingVertical={10} justifyContent="center" alignItems="flex-start">
            <Icon name={iconName} size={17} style={{ paddingTop: 10 }} color={"#AA7AFF"} />
            <YStack gap={4} width={"90%"}>
              <XStack justifyContent="space-between" paddingTop={5} paddingRight={5}>
                <XStack justifyContent="center" alignItems="center">
                  <SizableText
                    fontFamily={"$heading"}
                    color={"$username-action-taken-text"}
                    size={"$sm"}
                    paddingLeft={1}
                    lineHeight={24} // to keep it same as md text of same line
                  >
                    {displayName}
                  </SizableText>
                  <SizableText
                    fontFamily={"$body"}
                    size={"$md"}
                    color={"$username-action-taken-text"}
                    paddingLeft={4}
                  >
                    quoted your post
                  </SizableText>
                </XStack>
                <Badge color={"$boraami.700"} size="sm" count={0} />
              </XStack>
              <XStack justifyContent="space-between" alignItems="center">
                <SizableText fontFamily={"$body"} size={"$sm"} color={"$user-tag-text"}>
                  {userName}
                </SizableText>
                <SizableText fontFamily={"$body"} size={"$xs"} color={"$date-time-text"}>
                  {dateTime}
                </SizableText>
              </XStack>
            </YStack>
          </XStack>
          {replyMsg !== "" && (
            <XStack>
              <SizableText
                fontFamily={"$body"}
                size={"$md"}
                color={"$replied-quoted-text"}
                paddingLeft={32}
                paddingBottom={15}
                wordWrap="normal"
              >
                {replyMsg}
              </SizableText>
            </XStack>
          )}
        </YStack>
        {quotedDisplayName !== "" && (
          <XStack justifyContent="center" alignItems="center">
            <QuotedPost
              avatarText={quotedAvatarText}
              displayName={quotedDisplayName}
              postImg={quotedPostImg}
              postText={quotedPostText}
              username={quotedUsername}
            />
          </XStack>
        )}
      </XStack>
      <Divider borderColor={"$divider-subtle"} />
    </>
  );
};

export default QuotedNotification;
