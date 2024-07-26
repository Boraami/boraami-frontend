import React from "react";
import { XStack, Label, Text, YStack } from "tamagui";
import RadioItem from "./Radiobutton";
import { RadioGroup } from "tamagui";

type RadioListSizeProps = {
  [key: string]: {
    ls: string;
    ts: number;
  };
};

export type radioBtnProps = {
  data: {
    value: string;
    disable: boolean;
    labelText: string;
  }[];
  heading: string;
  size: "sm" | "md" | "lg";
  helperText: string;
};

const radioSizes: RadioListSizeProps = {
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

const RadiobuttonList = ({ data, heading, size, helperText }: radioBtnProps) => {
  return (
    <XStack flexDirection="column" gap={3}>
      {heading !== "" && (
        <Label
          paddingTop={2}
          size={radioSizes[size].ls}
          fontFamily={"$heading"}
          color="$default-radio-text"
        >
          {heading}
        </Label>
      )}
      <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack gap={10} marginLeft={5}>
          {data.map((item, i) => {
            return (
              <RadioItem
                key={`${heading}${item.labelText}-${i}`}
                value={`${i}`}
                labelText={item.labelText}
                size={size}
                disable={item.disable}
              />
            );
          })}
        </YStack>
      </RadioGroup>
      {helperText !== "" && (
        <Text
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={"$body"}
          fontSize={radioSizes[size].ts}
          marginTop={2}
          color="$boraami.500"
        >
          {helperText}
        </Text>
      )}
    </XStack>
  );
};

export default RadiobuttonList;
