import React from "react";
import { XStack, YStack, SizableText, Separator } from "tamagui";
import Icon from "../Icon/Icon";
import Badge from "./Badges";

type LikeFollowProps = {
  iconName: string;
  displayName: string;
  userName: string;
  dateTime: string;
};

export default function FollowNotification({
  iconName,
  displayName,
  userName,
  dateTime
}: LikeFollowProps) {
  const message = "  followed you"
  return (
    <>
      <XStack gap={12} height={60} paddingTop={10} paddingBottom={10} paddingLeft={5} paddingRight={5}>
        <Icon name={iconName} size={17} style={{ paddingTop: 8 }} color={'#AA7AFF'} />
        <YStack gap={4} width={'90%'}>
          <XStack justifyContent='space-between' paddingTop={5}>
            <XStack>
              <SizableText fontFamily={'$heading'} color={'$username-action-taken-text'} size={'$xs'} paddingLeft={1} paddingTop={1}>
                {displayName}
              </SizableText>
              <SizableText fontFamily={'$body'} size={'$xs'} color={'$username-action-taken-text'} paddingLeft={1} paddingTop={1}>
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
      <Separator borderColor={'$boraami.100'} />
    </>
  );
};
