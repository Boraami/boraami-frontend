import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { AntDesign } from '@expo/vector-icons';

const CBtn = styled(Button, {
  borderRadius: "$r-subtle",
  backgroundColor: "$bg-error-strong",
  color: "$text-invert",
  alignSelf: "center",
});

const PDftBtn = styled(Button, {
  theme: 'light',
  name: "Default",
  flexDirection: 'row',
  alignSelf: 'center',
  borderRadius: "$r-subtle",
  backgroundColor: '$bg-brand-strong',
  hoverStyle: {
    borderRadius: "$r-subtle",  
    borderColor: "#0EA5E9",
    backgroundColor: "$bg-brand-strong",
    shadowColor: '#0EA5E9',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset : { width: 0, height: 0},
  },
  pressStyle: {
    backgroundColor: '$bg-brand-strong',
    borderColor: '#7957B5',
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
  height: '$s-sm',
  width: '$s-sm',
  top: '$s-sm',
  left: '$s-sm',
  gap: '$s-sm',
  paddingHorizontal: '$s-sm',
})

const SDftBtn = styled(Button, {
  theme: 'light',
  name: "Default",
  flexDirection: 'row',
  alignSelf: 'center',
  borderRadius: "$r-subtle",
  borderColor: '$bg-brand-neutral',
  hoverStyle: {
    borderRadius: "$r-subtle",  
    borderColor: '#0EA5E9',
    shadowColor: '#38BDF8',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset : { width: 0, height: 0},
  },
  pressStyle: {
    borderColor: '#7957B5',
    shadowColor: '#C2A0FF',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset : { width: 0, height: 0},
  },
  height: '$sm',
  width: '$sm',
  top: '$sm',
  left: '$sm',
  gap: '$sm',
  paddingHorizontal: '$sm',
})

const TDftBtn = styled(Button, {
  theme: 'light',
  name: "Default",
  flexDirection: 'row',
  alignSelf: 'center',
  hoverStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#0EA5E9',
    shadowColor: '#38BDF8',
    shadowOpacity: 1,
    shadowRadius: 19,
    shadowOffset : { width: 0, height: 0},
  },
  focusStyle: {
    borderColor: '#7957B5',
    shadowColor: '#C2A0FF',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset : { width: 0, height: 0},
  },
  height: '$sm',
  width: '$sm',
  top: '$sm',
  left: '$sm',
  gap: '$sm',
  paddingHorizontal: '$sm',
})

export const DefaultText = styled(Text, {
  name: 'DefaultText',
  color: '$text-invert',
  fontFamily: '$OpenSansBold',
  lineHeight: 10,
  userSelect: 'none',
})


type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

/*export const DefaultBtn = DftBtnFrame as typeof DftBtnFrame & {
  Text: typeof DefaultText
}
DefaultBtn.Text = Text*/

export const PDeftBtn = ({text}: Props) => {
  return <PDftBtn>{text}</PDftBtn>;
};

export const SDeftBtn = ({text}: Props) => {
return <SDftBtn>{text}</SDftBtn>
};

export const TDeftBtn = ({text}: Props) => {
  return <TDftBtn>{text}</TDftBtn>
  };

export const MyButton = ({ onPress, text }: Props) => {
  return <CBtn onPress={onPress}>{text}</CBtn>;
};
