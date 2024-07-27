import React from "react";
import { createCheckbox } from "@tamagui/checkbox";
import { FontAwesome6 } from "@expo/vector-icons";
import { Label, XStack, YStack, Stack, styled } from "tamagui";
//-Notes-
//DONE: checkbox check icon opacity, checkbox size={}, dynamic labels,focus state, hover state

const Frame = styled(Stack, {
  borderColor: "$boraami.700", //gives error if '$bg-brand-strong' is used cuz its alr using themestack
  borderRadius: 2,
  alignItems: "center",
  justifyContent: "center",
  variants: {
    checked: {
      indeterminate: {},
      true: {
        backgroundColor: "rgba(95,61,156, 1)",
        //applied like this because otherwise the opacity is applied to check icon too
      },
      false: {},
    },
  } as const,
  defaultVariants: {
    checked: false,
  },
});
const Indicator = styled(Stack, {});
export const Checkbox = createCheckbox({
  Frame,
  Indicator,
});

type CBSize = {
  [key: string]: {
    cs: number;
    is: number;
    s: string;
    bw: number;
  };
};

const CheckboxSize: CBSize = {
  sm: {
    cs: -5,
    is: 9,
    s: "$sm",
    bw: 1.2,
  },
  md: {
    cs: -2,
    is: 12,
    s: "$md",
    bw: 2,
  },
  lg: {
    cs: 0,
    is: 15,
    s: "$lg",
    bw: 2,
  },
};
type CheckboxProps = {
  disable?: boolean;
  checked?: boolean;
  size: string;
  labeltext: string;
  value: string;
};

const CheckBox = ({ value, disable, size, labeltext, checked }: CheckboxProps) => {
  //sizing=> -6=9, -5=11, -4=13, -3=14, -2=16, no-size=20
  // -4->sm, -2->md, 0->lg(acc to design)
  //in order to make it disabled, u have to give a checked state
  const id = `Checkbox-${value}`;
  return (
    <XStack>
      {disable ? (
        <YStack flexDirection="row" gap={9} alignItems="center">
          <Checkbox
            value={value}
            id={id}
            disabled={true}
            borderWidth={CheckboxSize[size].bw}
            opacity={0.4}
            borderColor={"$boraami.700"}
            backgroundColor={checked ? "$boraami.700" : "transparent"}
            checked={checked}
            sizeAdjust={CheckboxSize[size].cs}
          >
            <Checkbox.Indicator paddingBottom={1}>
              <FontAwesome6 name="check" size={CheckboxSize[size].is} color="white" />
            </Checkbox.Indicator>
          </Checkbox>
          <Label
            paddingLeft={1}
            htmlFor={id}
            size={CheckboxSize[size].s}
            opacity={0.4}
            fontFamily={"$body"}
            color="$label-text"
          >
            {labeltext}
          </Label>
        </YStack>
      ) : (
        <YStack flexDirection="row" gap={9} alignItems="center">
          <Checkbox
            value={value}
            id={id}
            borderWidth={CheckboxSize[size].bw}
            sizeAdjust={CheckboxSize[size].cs}
            hoverStyle={{
              borderWidth: 0.75,
              shadowOpacity: 0.9,
              shadowRadius: 4,
              borderColor: "$serendipity.500",
            }}
            focusStyle={{
              borderWidth: 2,
              borderColor: "$boraami.400",
            }}
          >
            <Checkbox.Indicator paddingBottom={1}>
              <FontAwesome6 name="check" size={CheckboxSize[size].is} color="#F7F3FF" />
            </Checkbox.Indicator>
          </Checkbox>
          <Label
            paddingLeft={1}
            htmlFor={id}
            size={CheckboxSize[size].s}
            fontFamily={"$body"}
            color="$label-text"
          >
            {labeltext}
          </Label>
        </YStack>
      )}
    </XStack>
  );
};

export default CheckBox;
