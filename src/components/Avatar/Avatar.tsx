import React from "react";
import { Avatar, SizableText } from "tamagui";

export type Props = {
  AvatarText: string;
};

const AvatarUserProfile = ({ AvatarText }: Props) => {
  return (
    <Avatar
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
    </Avatar>
  );
};

export default Avatar;
