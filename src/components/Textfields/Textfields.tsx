import React, { useState } from "react";
import {
  XStack,
  styled,
  ScrollView,
  TextArea,
  SizableText,
} from "tamagui";

type Props = {
  name: "placeholder" | "default" | "focused" | "error" | "disabled";
  helperText: string;
  defaultText: string;
  maxLength?: number;
  onChange?: () => void;
};

const StyledTextbox = styled(TextArea, {
  height: 136,
  width: 350,
  borderRadius: 6,
  borderWidth: 1,

  variants: {
    variant: {
      placeholder: {
        backgroundColor: "$placeholder-textbox-fill",
        borderColor: "$placeholder-textbox-border",
        color: "$placeholder-textbox-text",
      },
      default: {
        backgroundColor: "$default-textbox-fill",
        borderColor: "$default-textbox-border",
        color: "$default-textbox-text",
      },
      focused: {
        backgroundColor: "$focused-textbox-fill",
        borderColor: "$focused-textbox-border",
        color: "$focused-helper-text-textfield",
      },
      error: {
        backgroundColor: "$error-textbox-fill",
        borderColor: "$error-textbox-border",
        color: "$error-textbox-text",
      },
      disabled: {
        backgroundColor: "$disabled-textbox-fill",
        borderColor: "$disabled-textbox-border",
        color: "$disabled-textbox-text",
      },
    },
  },
});


const StyledText = styled(SizableText, {
  variants: {

    // Scrollbar takes the color of the
    variant: {
      placeholder: {
        color: "$placeholder-helper-text",
        // scrollbarColor: "$placeholder-scroll-bar",
      },
      default: {
        color: "$default-helper-text-textfield",
        // scrollbarColor: "$default-scroll-bar",
      },
      focused: {
        // color: "$focused-helper-text",
        color: "$focused-helper-text-textfield",
        // color: "$default-textbox-border",
        // scrollbarColor: "$focused-scroll-bar",
      },
      error: {
        color: "$error-helper-text-textfield",
        scrollbarColor: "$error-scroll-bar",
      },
      disabled: {
        color: "$disabled-helper-text-textfield",
        scrollbarColor: "$disabled-scroll-bar",
      },
    },
  },
});

export const Textfields = ({
  name,
  maxLength,
  defaultText,
  helperText,
}: Props) => {

  const [charCount, setCharCount] = useState(0);

  const handleOnChangeText = (text: string) => {
    setCharCount(text.length);
  };

  return (
    <ScrollView maxHeight={161} paddingBottom={4}>
      <StyledTextbox variant={`${name}`} onChangeText={handleOnChangeText}>
        <SizableText fontFamily={'$body'} size={'$sm'}>{defaultText}</SizableText>
      </StyledTextbox>
      <XStack flexDirection="row" justifyContent="space-between">
          <StyledText variant={`${name}`} size={"$sm"}>{helperText}</StyledText>
          <StyledText variant={`${name}`} size={"$sm"}>/{maxLength}</StyledText>
        </XStack>
    </ScrollView>
  );
};
