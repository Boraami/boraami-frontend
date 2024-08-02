import React, { useState } from "react";
import { XStack, YStack, styled, TextArea, SizableText, TextAreaProps } from "tamagui";
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";

interface TextBoxProps extends TextAreaProps {
  error?: boolean;
}

const CustomTextBox: React.FC<TextBoxProps> = (props) => <StyledTextbox {...props} />;

type Props = TextAreaProps & {
  name: "default";
  width: number;
  height: number;
  value: string;
  helperText: string;
  placeholder: string;
  maxLength: number;
  opacity?: number;
  disabled?: boolean;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  error?: boolean;
  count: number;
};

const StyledTextbox = styled(TextArea, {
  borderRadius: 6,
  borderWidth: 1,
  placeholderTextColor: "$placeholder-textbox-text",
  fontSize: "$sm",
  color: "$default-textbox-text",
  backgroundColor: "$default-textbox-fill",
  borderColor: "$default-textbox-border",
  variants: {
    error: {
      true: {
        backgroundColor: "$error-textbox-fill",
        borderColor: "$error-textbox-border",
      },
    },
    disabled: {
      true: {
        backgroundColor: "$disabled-textbox-fill",
        borderColor: "$disabled-textbox-border",
        color: "$disabled-textbox-text",
      },
    },
  },
});

const Textfields = ({
  name,
  width,
  height,
  value,
  count,
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
  const [index, setIndex] = useState(0);

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const errorColor = isDarkTheme ? colorScheme.bwl[500] : colorScheme.bwl[700];

  const stateTextColor = disabled
    ? "$disabled-helper-text-textfield"
    : "$default-helper-text-textfield";

  return (
    <YStack>
      <CustomTextBox
        aria-label={name}
        value={value} //input
        editable={editable}
        verticalAlign="top"
        height={height}
        size={"$sm"}
        lineHeight={21}
        width={width}
        placeholder={placeholder}
        selectTextOnFocus={selectTextOnFocus}
        disabled={disabled}
        error={error}
        borderWidth={index === 0 ? 1 : 2}
        onFocus={() => setIndex(1)}
        onBlur={() => setIndex(0)}
        {...rest}
      />
      <XStack flexDirection="row" width={width} justifyContent="space-between">
        <SizableText color={stateTextColor} size={"$sm"}>
          {helperText}
        </SizableText>
        <SizableText color={count > maxLength ? errorColor : stateTextColor} size={"$sm"}>
          {count}/{maxLength}
        </SizableText>
      </XStack>
    </YStack>
  );
};

export default Textfields;
