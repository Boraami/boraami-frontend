import React from "react";
import { XStack, Label, YStack, SizableText } from "tamagui";
import CheckBox from "./Checkbox";

type CBSizeProps = {
  [key: string]: {
    ls: string;
    ts: number;
  };
};
const CBSizes: CBSizeProps = {
  sm: {
    ls: "$xs",
    ts: 12,
  },
  md: {
    ls: "$sm",
    ts: 14,
  },
  lg: {
    ls: "$md",
    ts: 16,
  },
};

type Props = {
  data: {
    disable?: boolean;
    checked?: boolean;
    labeltxt: string;
    value: string;
  }[];
  heading: string;
  helpertext: string;
  size: string;
};

const CheckBoxList = ({ size, heading, helpertext, data }: Props) => {
  return (
    <XStack flexDirection="column" gap={10}>
      {heading === "" ? null : (
        <Label
          paddingTop={2}
          size={CBSizes[size].ls}
          fontFamily={"$heading"}
          color="$disabled-label-text"
        >
          {heading}
        </Label>
      )}

      <YStack gap={10} marginLeft={5}>
        {data.map((item, i) => {
          return (
            <CheckBox
              key={`${item.labeltxt}${item.value}-${i}`}
              value={item.value}
              labeltext={item.labeltxt}
              size={size}
              disable={item.disable}
              checked={item.checked}
            />
          );
        })}
      </YStack>
      {helpertext === "" ? null : (
        <SizableText
          fontFamily={"$body"}
          fontSize={CBSizes[size].ts}
          marginTop={2}
          color="$boraami.500"
        >
          {helpertext}
        </SizableText>
      )}
    </XStack>
  );
};

export default CheckBoxList;
