import React, { useState } from "react";
import {
  Input as FormInput,
  InputProps as FormInputProps,
  Label,
  SizableText,
  View,
  XStack,
  YStack,
  styled,
  FontSizeTokens,
} from "tamagui";
import Icon from "../Icon/Icon";
import { Platform, useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";

interface CustomInputProps extends FormInputProps {
  error?: boolean;
}

const Input: React.FC<CustomInputProps> = (props) => <StyledInput {...props} />;

type InputSizeProps = {
  [key: string]: {
    iconSize: number;
    textSize: FontSizeTokens;
    top: number;
    left: number;
    height: number;
    paddingLeft: number;
  };
};

const inputSizes: InputSizeProps = {
  sm: {
    iconSize: 12,
    textSize: "$xs",
    top: 12,
    left: 14,
    paddingLeft: 38,
    height: 32,
  },
  md: {
    iconSize: 16,
    textSize: "$sm",
    top: 12,
    left: 14,
    paddingLeft: 42,
    height: 36,
  },
  lg: {
    iconSize: 16,
    textSize: "$md",
    top: 14,
    left: 16,
    paddingLeft: 46,
    height: 40,
  },
  xl: {
    iconSize: 20,
    textSize: "$lg",
    top: 13,
    left: 16,
    paddingLeft: 52,
    height: 44,
  },
  "2xl": {
    iconSize: 20,
    textSize: "$xl",
    top: 16,
    left: 16,
    paddingLeft: 54,
    height: 48,
  },
};

const StyledInput = styled(FormInput, {
  variants: {
    error: {
      true: {
        borderColor: "$error-input-border",
        shadowColor: "$error-input-border",
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 2,
      },
    },
    disabled: {
      true: {
        borderColor: "$inactive-input-border",
        color: "$inactive-input-text",
        placeholderTextColor: "$inactive-input-text",
      },
    },
  },
  hoverStyle: {
    borderColor: "$hover-input-border",
    shadowColor: "$hover-input-border",
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  width: "100%",
  height: 32,
  borderColor: "$default-input-border",
  borderWidth: 1,
  backgroundColor: "$input-fill",
  color: "$default-input-text",
  marginTop: 4,
  marginBottom: 4,
  placeholderTextColor: "$placeholder-input-text",
  borderRadius: "$r-subtle",
});

interface InputProps extends FormInput {
  name: string;
  label?: string;
  helperText?: string;
  placeholder: string;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  maxLength?: number;
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  onChange?: () => void;
}

const InputField = (props: InputProps) => {
  const {
    name,
    placeholder,
    error,
    errorText,
    disabled,
    label,
    helperText,
    maxLength,
    size,
    ...rest
  } = props;
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const errorColor = isDarkTheme ? colorScheme.bwl[500] : colorScheme.bwl[700];
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.boraami[700];
  const disabledIconColor = colorScheme.mono[400];
  const focusBorderColor = !error ? "$focused-input-border" : "$error-input-border";

  const [charCount, useCharCount] = useState(0);

  const handleOnChangeText = (text: string) => {
    useCharCount(text.length);
  };

  return (
    <YStack>
      {label && (
        <Label
          htmlFor={name}
          marginBottom={Platform.OS === "android" ? -10 : size === "xl" ? 2 : -2}
        >
          <SizableText
            color={!!error ? errorColor : "$label-input-text"}
            fontFamily="$body"
            size={inputSizes[size].textSize}
            lineHeight={28} // android had problems with lineheight so had to adjust with marginBottom of label and lineheight
          >
            {label}
          </SizableText>
        </Label>
      )}
      <XStack>
        <View zIndex={2}>
          <Icon
            name="user-large"
            size={inputSizes[size].iconSize}
            style={{
              position: "absolute",
              left: inputSizes[size].left,
              top: inputSizes[size].top,
              padding: 2,
            }}
            color={disabled ? disabledIconColor : !!error ? errorColor : defaultIconColor}
          />
        </View>
        <Input
          height={inputSizes[size].height}
          paddingLeft={inputSizes[size].paddingLeft}
          maxLength={maxLength}
          focusStyle={{
            borderColor: focusBorderColor,
            borderWidth: 2,
            outlineColor: "transparent", // for web
          }}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
          fontSize={inputSizes[size].textSize}
          zIndex={1}
          onChangeText={handleOnChangeText}
          {...rest}
        />
      </XStack>
      {helperText && (
        <XStack width={"100%"} justifyContent="space-between">
          <SizableText
            color={!!error ? errorColor : "$label-input-text"}
            fontFamily="$body"
            size={inputSizes[size].textSize}
          >
            {helperText}
          </SizableText>
          <SizableText
            color={!!error ? errorColor : "$label-input-text"}
            fontFamily="$body"
            size={inputSizes[size].textSize}
          >
            {charCount}/{maxLength}
          </SizableText>
        </XStack>
      )}
    </YStack>
  );
};

export default InputField;
