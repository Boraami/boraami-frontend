import React from "react";
import {
  Button as Btn,
  ButtonProps as BtnProps,
  XStack, YStack, SizableText, FontSizeTokens, styled
} from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";

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
    paddingLeft: number;
    gap: number;
    txtSize: FontSizeTokens;
    iconSize: number;
  };
};

const btnSizes: BtnSizeProps = {
  sm: {
    width: 76,
    height: 24,
    top: 161,
    left: 813,
    border: 1,
    paddingLeft: 4,
    gap: 4,
    txtSize: '$sm',
    iconSize: 16,
  },
  md: {
    width: 93,
    height: 32,
    top: 209,
    left: 813,
    border: 1,
    paddingLeft: 6,
    gap: 6,
    txtSize: '$md',
    iconSize: 20,
  },
  lg: {
    width: 107,
    height: 40,
    top: 261,
    left: 913,
    border: 1,
    paddingLeft: 8,
    gap: 6,
    txtSize: '$lg',
    iconSize: 24,
  }
};

const StyledBtn = styled(Btn, {
  variants: {
    primary: {
      disabled: {
        backgroundColor: '$primary-disabled-btn',
        borderRadius: '$r-subtle',
        opacity: 1.5,
        borderWidth: 1.5,
      },
      normal: {
        backgroundColor: '$primary-default-btn',
        borderRadius: '$r-subtle',
        fontFamily: '$PoppinsReg',
        borderWidth: 1.5,
        color: 'white',
        hoverStyle: {
          borderRadius: '$r-subtle',
          borderColor: "$primary-hover-btn-border",
          backgroundColor: "$primary-hover-btn-fill",
          shadowColor: '#0EA5E9',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 0 }
        },
        focusStyle: {
          borderRadius: '$r-subtle',
          backgroundColor: '$primary-focus-btn-fill',
          borderColor: '$primary-focus-btn-border',
          shadowColor: '#C2A0FF',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 0 },
        },
      },
    },
    secondary: {
      disabled: {
        borderColor: '$secondary-disabled-btn-border',
        borderRadius: '$r-subtle',
        borderWidth: 1.5,
        color: 'grey',
      },
      normal: {
        borderColor: '$secondary-default-btn-border',
        borderRadius: '$r-subtle',
        fontFamily: '$PoppinsReg',
        borderWidth: 1.5,
        color: '#8F66D6', //boraami.500
        hoverStyle: {
          borderRadius: '$r-subtle',
          borderColor: "$secondary-hover-btn-border",
          shadowColor: '#0EA5E9', //serendipity.500
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 0 }
        },
        focusStyle: {
          borderRadius: '$r-subtle',
          borderColor: '$secondary-focus-btn-border',
          shadowColor: '#8F66D6',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 0 },
        }
      },
    },
    tertiary: {
      disabled: {
        fontFamily: '$PoppinsReg',
        borderWidth: 1.5,
        color: 'grey',
      },
      normal: {
        color: '$tertiary-default-text',
        fontFamily: '$PoppinsReg',
        borderWidth: 1.5,
        hoverStyle: {
          borderRadius: '$r-subtle',
          borderColor: "$tertiary-hover-border",
          shadowColor: '#38BDF8',
          borderBottomWidth: 2,
          shadowOpacity: 1,
          shadowRadius: 19,
          shadowOffset: { width: 0, height: 0 }
        },
        focusStyle: {
          borderRadius: '$r-subtle',
          borderColor: '#7957B5',
          shadowColor: '#C2A0FF',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 0 },
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
  size: 'sm' | 'md' | 'lg';
}

export const BtnField = (props: ButtonProps) => {
  const {
    txt,
    size,
    disabled,
    primary,
    tertiary,
    secondary,
  } = props;
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const defaultIconColor = isDarkTheme ? 'white' : 'white';
  const disabledIconColor = '#9E96AD';

  return (
    <YStack>      
      <XStack>
        <Button
          name={props.name}
          height={btnSizes[size].height}
          paddingLeft={btnSizes[size].paddingLeft}
          disabled={disabled}
          primary={primary}
          tertiary={tertiary}
          secondary={secondary}
          icon={<FontAwesome6 name="plus" size={btnSizes[size].iconSize}
            color={disabled ? disabledIconColor : defaultIconColor}
            style={{
              position: 'relative',
            }} />}>
          <SizableText
            fontFamily={'$btn'}
            alignItems={'center'}
            size={btnSizes[size].txtSize}>{txt}</SizableText>
        </Button>
      </XStack>      
    </YStack>
  )
}