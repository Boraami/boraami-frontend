import React, { useState } from "react";
import { Button, ButtonProps, SizableText, Stack, StackProps, XStack } from "tamagui";

type Props = ButtonProps & {
  count?: number;
  iconContainerStyles?: StackProps;
  iconBefore: React.JSX.Element;
  iconAfter: React.JSX.Element;
};

function truncNumber(number: number, decimal: number) {
  return Math.trunc(number * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

const formatNumber = (num: number) => {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const truncNum = truncNumber(num / found.threshold, 2).toString();
    const formatted = truncNum + found.suffix;
    if (truncNum.slice(-2) === ".0") {
      return truncNum.slice(0, -2) + found.suffix;
    } else if (truncNum.slice(-3) === ".00") {
      return truncNum.slice(0, -3) + found.suffix;
    }
    return formatted;
  }

  return num;
};

const IconBtn = ({ count, iconBefore, iconAfter,iconContainerStyles, ...rest }: Props) => {
  const [tapped, setTapped] = useState(false);
  const [liked, setLiked] = useState(count);

  const handleIconBtn = () => {
    setTapped(!tapped);
    count && typeof liked === "number" && setLiked(liked + (tapped ? -1 : 1));
  };
  let number = typeof liked === "number" && formatNumber(liked);

  return (
    <Button height={20} size={"$2xs"} onPress={handleIconBtn} {...rest}>
      {/* We can have dynamic values for width height if needed in future but for current use cases this is all we need */}
      <Stack {...iconContainerStyles}>{tapped ? iconAfter : iconBefore}</Stack>
      {count && (
        <SizableText color={"#8F66D6"} size={"$xs"}>
          {number}
        </SizableText>
      )}
    </Button>
  );
};

export default IconBtn;
