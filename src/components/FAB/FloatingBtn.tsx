import React, { useState } from "react";
import {
  Button as Btn,
  ButtonProps as BtnProps,
  XStack,
  SizableText,
  FontSizeTokens,
  styled,
} from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";

interface CustomBtnProps extends BtnProps {
  name: string;
  button: "normal" | "disabled"; //only way to explicitly specify the type of button
}

const FAButton: React.FC<CustomBtnProps> = (props) => <StyledBtn {...props} />;

type BtnSizeProps = {
  [key: string]: {
    height: number;
    paddingHorizontal: number;
    gap: number;
    txtSize: FontSizeTokens;
    iconSize: number;
    lineHeight: number;
    borderRadius: number;
  };
};

const btnSizes: BtnSizeProps = {
  sm: {
    height: 24,
    paddingHorizontal: 8,
    gap: -3,
    txtSize: "$sm",
    iconSize: 8,
    lineHeight: 12,
    borderRadius: 90,
  },
  md: {
    height: 36,
    paddingHorizontal: 16,
    gap: -1,
    txtSize: "$md",
    iconSize: 15,
    lineHeight: 16,
    borderRadius: 90,
  },
  lg: {
    height: 60,
    paddingHorizontal: 24,
    gap: 0,
    txtSize: "$lg",
    iconSize: 19,
    lineHeight: 18,
    borderRadius: 90,
  },
};

const StyledBtn = styled(Btn, {
  alignSelf: "center",
  justifyContent: "center",
  position: "relative",
  paddingRight: 8,
  variants: {
    button: {
      disabled: {
        backgroundColor: "$disabled-FAB-fill",
        borderWidth: 1.5,
        color: "$disabled-FAB-text",
      },
      normal: {
        backgroundColor: "$default-FAB-fill",
        borderColor: "transparent",
        borderWidth: 2,
        color: "$default-FAB-text",
        focusStyle: {
          backgroundColor: "$focus-FAB-fill",
          color: "$focus-FAB-text",
          borderColor: "$focus-FAB-outline",
          shadowColor: "#C2A0FF",
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 },
        },
      },
    },
  },
});

interface ButtonProps {
  txt: string;
  name: string;
  disabled?: boolean;
  iconNameAfter: string;
  iconNameBefore: string;
  size: "sm" | "md" | "lg";
  button: "normal" | "disabled";
}

export const FloatingBtnField = (props: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handlePressIn = () => {
    setIsActive(true);
  };

  const handlePressOut = () => {
    setIsActive(false);
  };

  const { txt, size, name, button, disabled, iconNameAfter, iconNameBefore } = props;

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconColor = disabled ? colorScheme.boraami[50] : colorScheme.mono[100];

  const borderColor = {
    button: isActive ? "$focus-FAB-outline" : "transparent",
  };
  const borderC = borderColor.button;
  const bWidth = {
    button: isActive ? 2.5 : 1,
  };
  const width = bWidth.button;

  const iconBefore = (
    <FontAwesome6
      name={iconNameBefore}
      size={btnSizes[size].iconSize}
      color={iconColor}
      style={{ position: "relative" }}
    />
  );

  const iconAfter = (
    <FontAwesome6
      name={iconNameAfter}
      size={btnSizes[size].iconSize}
      color={iconColor}
      style={{ position: "relative" }}
    />
  );

  return (
    <XStack>
      <FAButton
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        button={button}
        name={name}
        gap={btnSizes[size].gap}
        scaleIcon={size === "sm" ? 0.6 : 1}
        height={btnSizes[size].height}
        borderRadius={btnSizes[size].borderRadius}
        borderColor={borderC}
        borderWidth={width}
        paddingHorizontal={btnSizes[size].paddingHorizontal}
        icon={iconNameBefore ? iconBefore : null}
        iconAfter={iconNameAfter ? iconAfter : null}
      >
        <SizableText
          fontFamily={"$btn"}
          textAlign={"center"}
          lineHeight={btnSizes[size].lineHeight}
          color={"white"}
          size={btnSizes[size].txtSize}
          top={0.1}
        >
          {txt}
        </SizableText>
      </FAButton>
    </XStack>
  );
};
