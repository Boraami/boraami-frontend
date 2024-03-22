import React, { useState } from "react";
import {
  Button as Btn,
  ButtonProps as BtnProps,
  XStack, YStack, SizableText, FontSizeTokens, styled
} from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';
import { useColorScheme } from "react-native";

interface CustomBtnProps extends BtnProps {
  name: string;
  primary: string;
  tertiary: string;
  secondary: string;
};

const Button: React.FC<CustomBtnProps> = (props) => <StyledBtn {...props} />

type BtnSizeProps = {
  [key: string]: {
    width: number;
    height: number;
    top: number;
    left: number;
    border: number;
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
    border: 1,
    paddingHorizontal: 6,
    gap: -3,
    txtSize: '$sm',
    iconSize: 12,
    lineHeight: 12,
  },
  md: {
    width: 93,
    height: 32,
    top: 209,
    left: 813,
    border: 1,
    paddingHorizontal: 6,
    gap: -1,
    txtSize: '$md',
    iconSize: 16,
    lineHeight: 14,
  },
  lg: {
    width: 107,
    height: 40,
    top: 261,
    left: 913,
    border: 1,
    paddingHorizontal: 8,
    gap: 0,
    txtSize: '$lg',
    iconSize: 20,
    lineHeight: 18,
  }
};

const StyledBtn = styled(Btn, {
  borderRadius: '$r-subtle',
  alignSelf: 'center',
  justifyContent: 'center',
  position: 'relative',
  paddingRight: 8,
  variants: {
    primary: {
      disabled: {
        backgroundColor: '$primary-disabled-btn',
        borderWidth: 1.5,
        opacity: 1.5,
        color: '$mono.100',
      },
      normal: {
        backgroundColor: '$primary-default-btn',
        borderWidth: 1.5,
        hoverStyle: {
          borderColor: "$primary-hover-btn-border",
          backgroundColor: "$primary-hover-btn-fill",
          shadowColor: '#0EA5E9',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 }
        },
        focusStyle: {
          backgroundColor: '$primary-focus-btn-fill',
          borderColor: '$primary-focus-btn-border',
          shadowColor: '#C2A0FF',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 },
        },
      },
    },
    secondary: {
      disabled: {
        borderColor: '$secondary-disabled-btn-border',
        borderWidth: 1.5,
      },
      normal: {
        borderColor: '$secondary-default-btn-border',
        borderWidth: 1.5,
        hoverStyle: {
          borderColor: "$secondary-hover-btn-border",
          shadowColor: '#0EA5E9', //serendipity.500
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 1, height: 1 }
        },
        focusStyle: {
          borderColor: '$secondary-focus-btn-border',
          shadowColor: '#8F66D6',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: -5, height: 5 },
        }
      },
    },
    tertiary: {
      disabled: {
        borderRadius: '$r-sharp',
        borderWidth: 1.5,
        color: '#999999',
      },
      normal: {
        borderRadius: '$r-sharp',
        color: '$tertiary-default-text',
        hoverStyle: {
          borderBottomColor: "$tertiary-hover-border",
          shadowColor: '#38BDF8',
          borderBottomWidth: 2,
          shadowOpacity: 0.7,
          shadowRadius: 9,
          shadowOffset: { width: 0, height: 7 }
        },
        focusStyle: {
          borderBottomColor: '#7957B5',
          shadowColor: '#C2A0FF',
          borderBottomWidth: 2,
          shadowOpacity: 1,
          shadowRadius: 9,
          shadowOffset: { width: 0, height: 7 },
        }
      },
    }
  }
});


interface ButtonProps {
  txt: string;
  name: string;
  label: string;
  primary: string;
  tertiary: string;
  secondary: string;
  disabled?: boolean;
  iconName: string;
  size: 'xs' | 'sm' | 'md';
}

export const BtnField = (props: ButtonProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const activeOp = isDarkTheme ? 0.5 : 0.8;

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
    secondary,
    iconName
  } = props;


  const textColor = {
    primary: disabled ? '#E9E5F0': '#F7F3FF',
    secondary: disabled ? '#999999' : '#AA7AFF',
    tertiary: disabled ? '#999999' : '#AA7AFF'
  }
  const color = primary ? textColor.primary : secondary ? textColor.secondary : textColor.tertiary


  let iconComponent = <FontAwesome6 name={iconName}
    size={btnSizes[size].iconSize}
    color={color}
    style={{ position: 'relative' }}
  />;

  return (
    <XStack>
      <Button
        style={{ opacity: isActive ? activeOp : 1 }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        name={name}
        gap={btnSizes[size].gap}
        height={btnSizes[size].height}
        paddingHorizontal={btnSizes[size].paddingHorizontal}
        disabled={disabled}
        primary={primary}
        tertiary={tertiary}
        secondary={secondary}
        icon={iconName ? iconComponent : null}
      >
        <SizableText
          fontFamily={'$btn'}
          textAlign={'center'}
          lineHeight={btnSizes[size].lineHeight}
          color={color}
          size={btnSizes[size].txtSize}
          top={0.1}
        >{txt}</SizableText>
      </Button>
    </XStack>
  )
}