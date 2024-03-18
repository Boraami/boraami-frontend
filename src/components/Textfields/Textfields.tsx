import React, { useState } from "react";
import { TextInput, ScrollView } from 'react-native';
import { XStack, styled, TextArea, Input, TextAreaProps, SizableText } from "tamagui";

// import { XStack, styled, ScrollView, TextArea, SizableText } from "tamagui";

type Props = {
  name: "placeholder" | "default" | "focused" | "error" | "disabled";
  helperText: string;
  placeholder: string;
  maxLength?: number;
  onChange?: () => void;
  disabled?: boolean;
  editable?: boolean;
};

// TextArea 'disabled' property not showing up on newly created StyledTextbox component ...

// const TextArea: React.FC<CustomTextAreaProps> = (props) => <StyledTextbox {...props} />;

// const StyledTextbox = styled(TextInput, {
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
    variant: {
      placeholder: {
        color: "$placeholder-helper-text",
      },
      default: {
        color: "$default-helper-text-textfield",
      },
      focused: {
        color: "$focused-helper-text-textfield",
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
  placeholder,
  helperText,
  disabled,
}: Props) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleOnChangeText = (text: string) => {
    setCount(text.length);
  };

//  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   setInput(e.target.value);
// };

  return (
    <ScrollView style={{ maxHeight: 161, paddingBottom: 4 }} showsVerticalScrollIndicator={true}  >
      <StyledTextbox
        value={input}
        placeholder={placeholder}
        variant={`${name}`}
        onChangeText={handleOnChangeText}
        disabled={disabled} 
      >

      <TextArea disabled={disabled}></TextArea>

        {/* <StyledTextbox fontFamily={'$body'} size={'$sm'} placeholder={placeholder} variant={`${name}`} onChangeText={handleOnChangeText}> */}
        <SizableText fontFamily={"$body"} size={"$sm"}>
          {placeholder}
        </SizableText>
      </StyledTextbox>
      <XStack flexDirection="row" justifyContent="space-between">
        <StyledText variant={`${name}`} size={"$sm"}>
          {helperText}
        </StyledText>
        <StyledText variant={`${name}`} size={"$sm"}>
          {count}/{maxLength}
        </StyledText>
      </XStack>
    </ScrollView>
  );
};
