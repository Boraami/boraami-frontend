import React from "react";
import { XStack, YStack, SizableText, Separator } from "tamagui";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon from "../Icon/Icon";
import Badge from "./Badges";

type LikeProps = {
  displayName: string;
  userName: string;
  dateTime: string;
};

export default function LikeNotification({ displayName, userName, dateTime }: LikeProps) {
  return (
    <>
      <XStack gap={12} padding={10}>
        <FontAwesome name={"heart"} size={18} style={{ paddingTop: 10 }} color={"#AA7AFF"} />
        <YStack gap={4} width={"90%"}>
          <XStack justifyContent="space-between" paddingTop={5}>
            <XStack>
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
                liked your post
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
      <Separator borderColor={"$boraami.100"} />
    </>
  );
}
