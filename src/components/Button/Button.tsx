import React, { useState } from "react";
import {
  Button as Btn,
  ButtonProps as TamaguiBtnProps,
  SizableText,
  FontSizeTokens,
  styled,
  SizableTextProps,
} from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";

interface CustomBtnProps extends TamaguiBtnProps {
  name: string;
  primary?: string;
  tertiary?: string;
  secondary?: string;
}

const Button: React.FC<CustomBtnProps> = (props) => <StyledBtn {...props} />;

type BtnSizeProps = {
  [key: string]: {
    height: number;
    paddingHorizontal: number;
    txtSize: FontSizeTokens;
    iconSize: number;
  };
};

const btnSizes: BtnSizeProps = {
  sm: {
    height: 24,
    paddingHorizontal: 10,
    txtSize: "$sm",
    iconSize: 12,
  },
  md: {
    height: 32,
    paddingHorizontal: 10,
    txtSize: "$md",
    iconSize: 16,
  },
  lg: {
    height: 40,
    paddingHorizontal: 12,
    txtSize: "$lg",
    iconSize: 20,
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
  txt: string;
  name: string;
  iconName?: string;
  disabled?: boolean;
  size: "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  primary?: "normal" | "disabled";
  tertiary?: "normal" | "disabled";
  secondary?: "normal" | "disabled";
  iconFromParent?: React.JSX.Element;
  btnTextStyles?: SizableTextProps;
}

type CustomBtnFieldProps = BtnFieldProps & CustomBtnProps;

const BtnField = (props: CustomBtnFieldProps) => {
  const [isActive, setIsActive] = useState(false);

  const handlePressIn = () => {
    setIsActive(true);
  };

  const handlePressOut = () => {
    setIsActive(false);
  };
  const {
    txt,
    size,
    name,
    primary,
    tertiary,
    disabled,
    iconName,
    secondary,
    iconFromParent,
    iconPosition = "left",
    btnTextStyles,
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
      ? "$boraami.400"
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

  const iconComponent = iconFromParent ? (
    iconFromParent
  ) : (
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
      scaleIcon={size === "sm" ? 0.4 : 0.8}
      height={btnSizes[size].height}
      paddingHorizontal={btnSizes[size].paddingHorizontal}
      disabled={disabled}
      primary={primary ? primary : undefined}
      tertiary={tertiary ? tertiary : undefined}
      secondary={secondary ? secondary : undefined}
      borderWidth={width}
      borderColor={primary || secondary ? hoverColor : "transparent"}
      borderBottomColor={tertiary ? hoverColor : "transparent"}
      icon={iconName || iconFromParent ? iconComponent : null}
      flexDirection={iconPosition === "right" ? "row-reverse" : "row"}
      {...rest}
    >
      <SizableText
        fontFamily={"$btn"}
        textAlign={"center"}
        color={color}
        size={btnSizes[size].txtSize}
        top={0.1}
        {...btnTextStyles}
      >
        {txt}
      </SizableText>
    </Button>
  );
};

export default BtnField;
