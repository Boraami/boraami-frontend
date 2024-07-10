import React, { useState } from "react";
import {
  Button as Btn,
  ButtonProps as BtnProps,
  SizableText,
  FontSizeTokens,
  styled,
} from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";
import { ButtonProps } from "react-native";

interface CustomBtnProps extends BtnProps {
  name: string;
  primary?: string;
  tertiary?: string;
  secondary?: string;
}

const Button: React.FC<CustomBtnProps> = (props) => <StyledBtn {...props} />;

type BtnSizeProps = {
  [key: string]: {
    width: number;
    height: number;
    top: number;
    left: number;
    paddingHorizontal: number;
    gap: number;
    txtSize: FontSizeTokens;
    iconSize: number;
    lineHeight: number;
  };
};

const btnSizes: BtnSizeProps = {
  sm: {
    width: 76,
    height: 24,
    top: 161,
    left: 105,
    paddingHorizontal: 6,
    gap: -3,
    txtSize: "$sm",
    iconSize: 12,
    lineHeight: 12,
  },
  md: {
    width: 93,
    height: 32,
    top: 209,
    left: 813,
    paddingHorizontal: 6,
    gap: -1,
    txtSize: "$md",
    iconSize: 16,
    lineHeight: 14,
  },
  lg: {
    width: 107,
    height: 40,
    top: 261,
    left: 913,
    paddingHorizontal: 8,
    gap: 0,
    txtSize: "$lg",
    iconSize: 20,
    lineHeight: 18,
  },
};

const StyledBtn = styled(Btn, {
  borderRadius: "$r-subtle",
  alignSelf: "center",
  justifyContent: "center",
  position: "relative",
  paddingRight: 8,
  variants: {
    primary: {
      disabled: {
        backgroundColor: "$primary-disabled-btn",
        borderWidth: 1.5,
        opacity: 1.5,
        color: "$mono.100",
      },
      normal: {
        backgroundColor: "$primary-default-btn",
        borderColor: "transparent",
        borderWidth: 2,
        hoverStyle: {
          backgroundColor: "$primary-hover-btn-fill",
          shadowColor: "#0EA5E9",
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 },
        },
        focusStyle: {
          backgroundColor: "$primary-focus-btn-fill",
          shadowColor: "#C2A0FF",
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 },
        },
      },
    },
    secondary: {
      disabled: {
        borderColor: "$secondary-disabled-btn-border",
        borderWidth: 1,
      },
      normal: {
        borderColor: "$secondary-default-btn-border",
        borderWidth: 1,
        hoverStyle: {
          borderWidth: 1.5,
          shadowColor: "#0EA5E9",
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 },
        },
        focusStyle: {
          borderWidth: 25.5,
          shadowColor: "#8F66D6",
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: -5, height: 5 },
        },
      },
    },
    tertiary: {
      disabled: {
        borderRadius: "$r-sharp",
        borderWidth: 1.5,
        color: "#999999",
      },
      normal: {
        borderRadius: 0,
        color: "$tertiary-default-text",
        borderBottomWidth: 2,
        hoverStyle: {
          shadowColor: "#38BDF8",
          borderBottomWidth: 2,
          shadowOpacity: 0.7,
          shadowRadius: 9,
          shadowOffset: { width: 0, height: 7 },
        },
        focusStyle: {
          shadowColor: "#C2A0FF",
          borderBottomWidth: 2,
          shadowOpacity: 1,
          shadowRadius: 9,
          shadowOffset: { width: 0, height: 7 },
        },
      },
    },
  },
});

export interface BtnFieldProps {
  title: string;
  name: string;
  iconName?: string;
  disabled?: boolean;
  size: "xs" | "sm" | "md";
  iconPosition?: "left" | "right";
  primary?: "normal" | "disabled";
  tertiary?: "normal" | "disabled";
  secondary?: "normal" | "disabled";
}
type x = BtnFieldProps & ButtonProps;

export const BtnField = (props: x) => {
  const [isActive, setIsActive] = useState(false);

  const handlePressIn = () => {
    setIsActive(true);
  };

  const handlePressOut = () => {
    setIsActive(false);
  };
  const {
    title,
    size,
    name,
    primary,
    tertiary,
    disabled,
    iconName,
    secondary,
    iconPosition = "left",
    ...rest
  } = props;

  const textColor = {
    primary: disabled ? "#E9E5F0" : "#F7F3FF",
    secondary: disabled ? "#999999" : "#AA7AFF",
    tertiary: disabled ? "#999999" : "#AA7AFF",
  };
  const color = primary ? textColor.primary : secondary ? textColor.secondary : textColor.tertiary;

  const bColor = {
    primary: isActive ? "$boraami.400" : "transparent",
    secondary: isActive
      ? "$serendipity.500"
      : disabled
      ? "$secondary-disabled-btn-border"
      : "$secondary-default-btn-border",
    tertiary: isActive ? "$boraami.500" : "transparent",
  };
  const hoverColor = primary ? bColor.primary : secondary ? bColor.secondary : bColor.tertiary;

  const bWidth = {
    primary: isActive ? 1.5 : 1,
    secondary: isActive ? 1.5 : 1,
    tertiary: isActive ? 1.5 : 1,
  };

  const width = primary ? bWidth.primary : secondary ? bWidth.secondary : bWidth.tertiary;

  const iconComponent = (
    <FontAwesome6
      name={iconName}
      size={btnSizes[size].iconSize}
      color={color}
      style={{ position: "relative" }}
    />
  );

  return (
    <Button
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      name={name}
      gap={btnSizes[size].gap}
      height={btnSizes[size].height}
      paddingHorizontal={btnSizes[size].paddingHorizontal}
      disabled={disabled}
      primary={primary ? primary : undefined}
      tertiary={tertiary ? tertiary : undefined}
      secondary={secondary ? secondary : undefined}
      borderWidth={width}
      borderColor={primary || secondary ? hoverColor : "transparent"}
      borderBottomColor={tertiary ? hoverColor : "transparent"}
      icon={iconName ? iconComponent : null}
      flexDirection={iconPosition === "right" ? "row-reverse" : "row"}
      {...rest}
    >
      <SizableText
        fontFamily={"$btn"}
        textAlign={"center"}
        lineHeight={btnSizes[size].lineHeight}
        color={color}
        size={btnSizes[size].txtSize}
        top={0.1}
      >
        {title}
      </SizableText>
    </Button>
  );
};
