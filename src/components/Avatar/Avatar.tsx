import React from "react";
import { Avatar as TamaguiAvatar, SizableText, AvatarProps } from "tamagui";

export type Props = AvatarProps & {
  AvatarText: string;
};

const Avatar = ({ AvatarText, ...rest }: Props) => {
  return (
    <TamaguiAvatar
      circular
      backgroundColor={"$avatar-bg-color"}
      borderWidth={2}
      width={64}
      height={64}
      borderColor={"$avatar-border-color"}
      {...rest}
    >
      <SizableText fontFamily={"$btn"} color={"$avatar-text"} size={"$md"}>
        {AvatarText}
      </SizableText>
    </TamaguiAvatar>
  );
};

export default Avatar;
