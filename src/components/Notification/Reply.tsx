import React from "react";
import { XStack, YStack, SizableText, Separator } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import Badge from "../Badge/Badge";

type ReplyProps = {
  displayName: string;
  userName: string;
  dateTime: string;
  replyMsg: string;
};

const ReplyNotification = ({ displayName, userName, dateTime, replyMsg }: ReplyProps) => {
  return (
    <>
      <XStack flexDirection="column">
        <XStack gap={12} padding={10} paddingBottom={4}>
          <FontAwesome name="comment" size={17} style={{ paddingTop: 10 }} color={"#AA7AFF"} />
          <YStack gap={4} width={"90%"}>
            <XStack justifyContent="space-between" paddingTop={5}>
              <XStack>
                <SizableText
                  fontFamily={"$heading"}
                  color={"$username-action-taken-text"}
                  size={"$sm"}
                  paddingLeft={1}
                  lineHeight={24}
                >
                  {displayName}
                </SizableText>
                <SizableText
                  fontFamily={"$body"}
                  size={"$md"}
                  color={"$username-action-taken-text"}
                  paddingLeft={4}
                >
                  replied to your post
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
          <XStack paddingHorizontal={10}>
            <SizableText
              fontFamily={"$body"}
              size={"$md"}
              color={"$replied-quoted-text"}
              paddingLeft={3}
              paddingBottom={15}
              wordWrap="normal"
            >
              {replyMsg}
            </SizableText>
          </XStack>
        )}
      </XStack>
      <Separator borderColor={"$boraami.100"} />
    </>
  );
};

export default ReplyNotification;
