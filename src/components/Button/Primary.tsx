import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, styled, Text} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

const CBtn = styled(Button, {
  borderRadius: "$r-subtle",
  backgroundColor: "$bg-error-strong",
  color: "$text-invert",
  alignSelf: "center",
});

const PDftBtn = styled(Button, {
  theme: 'light',
  name: "primary",
  flexDirection: 'row',
  alignSelf: 'center',
  color: '$text-invert',
  icon: <AntDesign name="plus" size={12} color={"white"}/>,
  borderRadius: "$r-subtle",
  backgroundColor: '$primary-default-btn',
  hoverStyle: {
    borderRadius: "$r-subtle",  
    borderColor: "$primary-hover-btn-border",
    backgroundColor: "$primary-hover-btn-fill",
    shadowColor: '#0EA5E9',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset : { width: 0, height: 0},
  },
  focusStyle: {
    backgroundColor: '$primary-focus-btn-fill',
    borderColor: '$primary-focus-btn-border',
    shadowColor: '#C2A0FF',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset : { width: 0, height: 0},
  },
/*  variants: {
    sizes: {
      '...spacing': (val, {tokens}) => ({
        paddingHorizontal: tokens.spacing[val],
        height: tokens.spacing[val],
        width: tokens.spacing[val],
        left: tokens.spacing[val],
        top: tokens.spacing[val],
        gap: tokens.spacing[val],
      }),
    }
  } as const,*/
  height: '$sm',
  width: '$sm',
  top: '$sm',
  left: '$sm',
  gap: '$sm',
  paddingHorizontal: '$sm',
})

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  /*export const DefaultBtn = DftBtnFrame as typeof DftBtnFrame & {
    Text: typeof DefaultText
  }
  DefaultBtn.Text = Text*/
  
export const PDeftBtn = ({ onPress, text}: Props) => {
    return <PDftBtn onPress={onPress}>{text}</PDftBtn>;
  };
  