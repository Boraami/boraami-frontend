import React from "react";
import { Card, styled, SizableText, Image, View } from "tamagui";

const StyledAchievementCard = styled(Card, {
  backgroundColor: "$achievement-card-fill",
  borderRadius: "$r-subtle",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  width: 329,
  height: 87,
  paddingHorizontal: 15,
});

type AchievementProps = {
  uri: string;
  badgeName: string;
  numOfDays: number;
  boldSizableText?: string;
};

const AchievementCard = ({ numOfDays, uri, badgeName }: AchievementProps) => {
  return (
    <StyledAchievementCard>
      <View width="25%">
        <Image source={{ uri: uri, width: 86, height: 86 }} />
      </View>
      <SizableText color={"$achievement-card-text"} size={"$sm"} fontFamily={"$body"} width={"65%"}>
        I earned the {""}
        <SizableText size={"$xs"} fontFamily={"$heading"}>
          {badgeName}
        </SizableText>
        <SizableText size={"$sm"} fontFamily={"$body"} style={{ padding: 12 }}>
          {""} for streaming {numOfDays} days in a row!
        </SizableText>
      </SizableText>
    </StyledAchievementCard>
  );
};

export default AchievementCard;
