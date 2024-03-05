import React from "react";
import {
  Input as FormInput,
  InputProps as FormInputProps,
  Label,
  SizableText,
  View,
  XStack,
  YStack,
  styled,
} from "tamagui";
import Icon from "../Icon/Icon";
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";

interface CustomInputProps extends FormInputProps {
  error?: boolean;
}

const Input: React.FC<CustomInputProps> = (props) => <FormInput {...props} />;

const StyledInput = styled(Input, {
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
  width: 343,
  borderColor: "$default-input-border",
  borderWidth: 1,
  backgroundColor: "$input-fill",
  color: "$default-input-text",
  paddingLeft: 44,
  marginTop: 10,
  marginBottom: 10,
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
  disabled: boolean;
}

const InputField = ({
  name,
  placeholder,
  error,
  errorText,
  disabled,
  label,
  helperText,
  ...rest
}: InputProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const errorColor = isDarkTheme ? colorScheme.bwl[500] : colorScheme.bwl[700];
  const defaultIconColor = isDarkTheme ? colorScheme.boraami[500] : colorScheme.boraami[700];
  const disabledIconColor = colorScheme.mono[400];
  const focusBorderColor = !error ? "$focused-input-border" : "$error-input-border";

  return (
    <YStack>
      <Label htmlFor={name}>
        <SizableText
          color={!!error ? errorColor : "$label-input-text"}
          fontFamily="$body"
          size="$md"
        >
          {label}
        </SizableText>
      </Label>
      <XStack>
        <View zIndex={2}>
          <Icon
            name="user-large"
            size={18}
            style={{
              position: "absolute",
              left: 13,
              top: 20,
              padding: 2,
            }}
            color={disabled ? disabledIconColor : !!error ? errorColor : defaultIconColor}
          />
        </View>
        <StyledInput
          error={error}
          focusStyle={{
            borderColor: focusBorderColor,
            borderWidth: 2,
            outlineColor: "transparent", // for web
          }}
          disabled={disabled}
          hoverStyle={{
            borderColor: "$hover-input-border",
            shadowColor: "$hover-input-border",
            shadowRadius: 6,
            shadowOpacity: 1,
          }}
          placeholder={placeholder}
          zIndex={1}
          {...rest}
        />
      </XStack>
    </YStack>
  );
};

export default InputField;
