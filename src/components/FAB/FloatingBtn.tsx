import React, { useState } from "react";
import {
  Button as Btn,
  ButtonProps as BtnProps,
  XStack, SizableText, FontSizeTokens, styled
} from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";

interface CustomBtnProps extends BtnProps {
  name: string;
  button: string;
};

const FAButton: React.FC<CustomBtnProps> = (props) => <StyledBtn {...props} />

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
    borderRadius: number;
  };
};

const btnSizes: BtnSizeProps = {
  sm: {
    width: 127,
    height: 24,
    top: 161,
    left: 105,
    paddingHorizontal: 6,
    gap: -3,
    txtSize: '$sm',
    iconSize: 8,
    lineHeight: 12,
    borderRadius: 90
  },
  md: {
    width: 172,
    height: 36,
    top: 209,
    left: 813,
    paddingHorizontal: 6,
    gap: -1,
    txtSize: '$md',
    iconSize: 15,
    lineHeight: 16,
    borderRadius: 90
  },
  lg: {
    width: 186,
    height: 60,
    top: 261,
    left: 913,
    paddingHorizontal: 8,
    gap: 0,
    txtSize: '$lg',
    iconSize: 19,
    lineHeight: 18,
    borderRadius: 90
  }
};

const StyledBtn = styled(Btn, {
  alignSelf: 'center',
  justifyContent: 'center',
  position: 'relative',
  paddingRight: 8,
  variants: {
    button: {
      disabled: {
        backgroundColor: '$disabled-FAB-fill',
        borderWidth: 1.5,
        color: '$disabled-FAB-text',
      },
      normal: {
        backgroundColor: '$default-FAB-fill',
        borderColor: "transparent",
        borderWidth: 2,
        color: '$default-FAB-text',
        focusStyle: {
          backgroundColor: '$focus-FAB-fill',
          color: '$focus-FAB-text',
          borderColor: '$focus-FAB-outline',
          shadowColor: '#C2A0FF',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 },
        },
      },
    },
  }
});


interface ButtonProps {
  txt: string;
  name: string;
  disabled?: boolean;
  iconNameAfter: string;
  iconNameBefore: string;
  size: 'xs' | 'sm' | 'md';
  button: 'normal' | 'disabled';
}

export const FloatingBtnField = (props: ButtonProps) => {
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
    disabled,
    button,
    iconNameAfter,
    iconNameBefore,
  } = props;

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const iconColor = disabled ? colorScheme.boraami[50] : colorScheme.mono[100];

  const borderColor = {
    button: isActive ? '$focus-FAB-outline' : 'transparent'
  }
  const borderC = borderColor.button;
  const bWidth = {
    button: isActive ? 2.5 : 1
  }
  const width = bWidth.button;

  const iconBefore = <FontAwesome6 name={iconNameBefore}
    size={btnSizes[size].iconSize}
    color={iconColor}
    style={{ position: 'relative' }}
  />;

  const iconAfter = <FontAwesome6 name={iconNameAfter}
    size={btnSizes[size].iconSize}
    color={iconColor}
    style={{ position: 'relative' }}
  />;

  return (
    <XStack>
      <FAButton
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        button={button}
        name={name}
        disabled={disabled}
        gap={btnSizes[size].gap}
        width={btnSizes[size].width}
        height={btnSizes[size].height}
        borderRadius={btnSizes[size].borderRadius}
        borderColor={borderC}
        borderWidth={width}
        paddingHorizontal={btnSizes[size].paddingHorizontal}
        icon={<FontAwesome6 name={'plus'}
          size={btnSizes[size].iconSize}
          color={iconColor}
          style={{ position: 'relative' }}
        />}
        iconAfter={<FontAwesome6 name={'heart'}
          size={btnSizes[size].iconSize}
          color={iconColor}
          style={{ position: 'relative' }}
        />}
      >
        <SizableText
          fontFamily={'$btn'}
          textAlign={'center'}
          lineHeight={btnSizes[size].lineHeight}
          color={'white'}
          size={btnSizes[size].txtSize}
          top={0.1}
        >{txt}</SizableText>
      </FAButton>
    </XStack>
  )
}