import React from "react";
import { Avatar as TamaguiAvatar, SizableText } from "tamagui";

export type Props = {
  AvatarText: string;
};

const Avatar = ({ AvatarText }: Props) => {
  return (
    <TamaguiAvatar
      circular
      backgroundColor={"$avatar-bg-color"}
      borderWidth={3}
      width={64}
      height={64}
      borderColor={"$avatar-border-color"}
    >
      <SizableText fontFamily={"$btn"} color={"$avatar-text"} size={"$md"}>
        {AvatarText}
      </SizableText>
    </TamaguiAvatar>
  );
};

export default Avatar;
