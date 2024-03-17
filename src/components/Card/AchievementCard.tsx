import React from "react";
import { Card, styled, SizableText, Image, View } from "tamagui";

const StyledAchievementCard = styled(Card, {
  backgroundColor: "$achievement-card-fill",
  borderRadius: "$r-subtle",
  justifyContent: "space-between",
  alignSelf: "center",
  display: "flex",
  flexDirection: "row",
  width: 329,
  height: 87,
});

type AchievementProps = {
  uri: string;
  badgeName: string;
  numOfDays: number;
  boldSizableText?: string;
};

export const AchievementCard = ({
  numOfDays,
  uri,
  badgeName,
}: AchievementProps) => {
 
  return (
    <StyledAchievementCard>
      <View
        style={{
          flexDirection: "row",
          width: 278,
          height: 87,
          alignContent: "center",
          paddingTop: 2, 
          paddingHorizontal: 30,
        }}
      >
        <View style={{ marginTop: 17 }}>
          <Image source={{ uri: uri, width: 48, height: 48 }} marginRight={10} />
        </View>
        <SizableText
          color={"$achievement-card-text"}
          size={"$sm"}
          fontFamily={"$body"}
          style={{ padding: 12 }}
          lineHeight={18} 
          >
          I earned the {''}
          <SizableText size={"$xs"} fontFamily={"$heading"}>
            {badgeName}
          </SizableText>
          <SizableText size={"$sm"} fontFamily={"$body"} style={{ padding: 12 }}>
          {''} for streaming {numOfDays} days in a row!
          </SizableText>
        </SizableText>
      </View>
    </StyledAchievementCard>
  );
};
