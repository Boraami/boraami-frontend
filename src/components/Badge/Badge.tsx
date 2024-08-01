import React from "react";
import { XStack, SizableText } from "tamagui";

type BadgeSizeProps = {
  [key: string]: {
    w: number;
    h: number;
  };
};

const badgeSizes: BadgeSizeProps = {
  sm: {
    w: 8,
    h: 8,
  },
  md: {
    w: 12,
    h: 12,
  },
  lg: {
    w: 28,
    h: 28,
  },
};

type Props = {
  color: string;
  size: string;
  count: number;
};

const Badge = ({ color, size, count }: Props) => {
  //font changed from 14->12 to adjust the design look according to design files
  let c = count < 1 ? "0" : count <= 20 ? count : count > 20 && "20+";
  return (
    <>
      {size == "lg" ? (
        <XStack
          width={badgeSizes[size].w}
          height={badgeSizes[size].w}
          borderRadius={20}
          backgroundColor={color}
          justifyContent="center"
          alignItems="center"
        >
          <SizableText
            fontFamily={"$btn"}
            marginTop={-1}
            fontSize={"$xs"}
            color={"$large-badge-text"}
          >
            {c}
          </SizableText>
        </XStack>
      ) : (
        <XStack
          width={badgeSizes[size].w}
          height={badgeSizes[size].w}
          borderRadius={20}
          backgroundColor={color}
        ></XStack>
      )}
    </>
  );
};

export default Badge;
