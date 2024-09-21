import React from "react";
import { createSwitch } from "@tamagui/switch";
import { XStack, SizableText, Label, Stack, styled } from "tamagui";

const Frame = styled(Stack, {
  borderRadius: 20,
  padding: 2,
  variants: {
    checked: {
      true: {
        backgroundColor: "$default-checked-handle",
      },
      false: {
        backgroundColor: "$default-unchecked-handle", // make var for it in future
      },
    },
  } as const,
  defaultVariants: {
    checked: false,
  },
});

const Thumb = styled(Stack, {
  backgroundColor: "$boraami.50",
  borderRadius: 20,
  animation: "medium",
  variants: {
    checked: {
      true: {},
      false: {},
    },
  } as const,
});

export const SwitchBasic = createSwitch({
  Frame,
  // @ts-ignore (gives error if i remove this comment lol...)
  Thumb,
});
type SwSize = {
  [key: string]: {
    w: number;
    h: number;
    thumb: number;
  };
};

const SwitchSize: SwSize = {
  sm: {
    w: 32,
    h: 16,
    thumb: 12,
  },
  md: {
    w: 40,
    h: 20,
    thumb: 16,
  },
  lg: {
    w: 48,
    h: 24,
    thumb: 20,
  },
};

type SwitchProps = {
  size: string;
  heading: string;
  helpertext: string;
  disabled: boolean;
};

type SwitchLabelSizeProps = {
  [key: string]: {
    ls: string;
    ts: number;
  };
};

const SwitchLabelSizes: SwitchLabelSizeProps = {
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

const SwitchDefault = ({ size, heading, helpertext, disabled }: SwitchProps) => {
  return (
    <XStack flexDirection="column" gap={4} /*size gap diff */>
      {heading == "" ? null : (
        <Label
          size={SwitchLabelSizes[size].ls}
          fontFamily={"$heading"}
          color="$default-label-text"
        >
          {heading}
        </Label>
      )}
      <SwitchBasic
        disabled={disabled}
        opacity={disabled ? 0.5 : 1}
        width={SwitchSize[size].w}
        height={SwitchSize[size].h}
      >
        <SwitchBasic.Thumb width={SwitchSize[size].thumb} height={SwitchSize[size].thumb} />
      </SwitchBasic>
      {helpertext == "" ? null : (
        <SizableText
          fontFamily={"$body"}
          fontSize={SwitchLabelSizes[size].ts}
          color="$default-helper-text"
        >
          {helpertext}
        </SizableText>
      )}
    </XStack>
  );
};

export default SwitchDefault;
