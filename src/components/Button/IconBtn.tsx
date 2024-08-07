import React, { useState } from "react";
import { Button, ButtonProps, SizableText, Stack, XStack } from "tamagui";

type Props = ButtonProps & {
  count?: number;
  iconBefore: React.JSX.Element;
  iconAfter: React.JSX.Element;
};

const formatNumber = (num: number, precision: number = 2) => {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  if (num <= 999) {
    return num;
  }
  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const number = (num / found.threshold).toFixed(precision);
    const formatted = number + found.suffix;
    if (number.slice(-2) === ".0") {
      return number.slice(0, -2) + found.suffix;
    } else if (number.slice(-3) === ".00") {
      return number.slice(0, -3) + found.suffix;
    }
    return formatted;
  }

  return num;
};

const IconBtn = ({ count, iconBefore, iconAfter, ...rest }: Props) => {
  const [tapped, setTapped] = useState(false);
  const [liked, setLiked] = useState(count);
  const handleIconBtn = () => {
    setTapped(!tapped);
    count && typeof liked === "number" && setLiked(liked + (tapped ? -1 : 1));
  };
  let c = typeof liked === "number" && formatNumber(liked, 2);

  return (
    <Button height={20} size={"$2xs"} onPress={handleIconBtn} {...rest}>
      {/* We can have dynamic values for width height if needed in future but for current use cases this is all we need */}
      <Stack width={16}>{tapped ? iconAfter : iconBefore}</Stack>
      {count && (
        <SizableText color={"#8F66D6"} size={"$xs"}>
          {c}
        </SizableText>
      )}
    </Button>
  );
};

export default IconBtn;
