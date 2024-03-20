import React, { useState } from "react";
import { XStack, YStack, styled, TextArea, SizableText, ScrollView, TextAreaProps } from "tamagui";

interface TextBoxProps extends TextAreaProps {
  error?: boolean
}

const CustomTextBox: React.FC<TextBoxProps> = (props) => <StyledTextbox {...props} />

type Props = {
  name: "default" ;
  helperText: string;
  placeholder: string;
  maxLength?: number;
  onChangeText?: () => void;
  onChange?: () => void;
  opacity?: number;
  disabled?: boolean;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  error?: boolean;
};

const StyledTextbox = styled(TextArea, {
  height: 136,
  width: 350,
  borderRadius: 6,
  borderWidth: 1,
  placeholderTextColor: '$placeholder-textbox-text',
  fontSize: '$sm',
  lineHeight: 18,
  color: "$default-textbox-text",
  backgroundColor: "$default-textbox-fill",
  borderColor: "$default-textbox-border",
  variants: {
    error: {
      true: {
        backgroundColor: "$error-textbox-fill",
        borderColor: "$error-textbox-border"
      },
    },
    disabled: {
      true: {
        backgroundColor: "$disabled-textbox-fill",
        borderColor: "$disabled-textbox-border",
        color: "$disabled-textbox-text",}
     },
  },
});


export const Textfields = ({
  name,
  maxLength,
  placeholder,
  helperText,
  disabled,
  editable,
  opacity,
  selectTextOnFocus,
  error,
  ...rest
}: Props) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const handleOnChangeText = (text: string) => {
    setInput(text);
    setCount(text.length);
  };

  const stateTextColor = disabled ? "$disabled-helper-text-textfield" : "$default-helper-text-textfield";

  return (
      <YStack>
        <CustomTextBox
          aria-label={name}
          value={input}
          editable={editable}
          placeholder={placeholder}
          selectTextOnFocus={selectTextOnFocus}
          onChangeText={handleOnChangeText}
          disabled={disabled}
          error={error}
          borderWidth={index === 0 ? 1 : 2}
          onFocus={() => setIndex(1)}
          onBlur={()=>setIndex(0)}
          {...rest}
          />
          <XStack flexDirection="row" justifyContent="space-between">
            <SizableText color={stateTextColor} size={"$sm"}>
              {helperText}
            </SizableText>
            <SizableText color={stateTextColor} size={"$sm"}>
              {count}/{maxLength}
            </SizableText>
          </XStack>
      </YStack>
  );
};

