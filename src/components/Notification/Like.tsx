import React from "react";
import { XStack, YStack, SizableText } from "tamagui";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Badge from "../Badge/Badge";
import Divider from "../Divider/Divider";

type LikeProps = {
  displayName: string;
  userName: string;
  dateTime: string;
};

const LikeNotification = ({ displayName, userName, dateTime }: LikeProps) => {
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
      <Divider borderColor={"$divider-subtle"} />
    </>
  );
};

export default LikeNotification;
