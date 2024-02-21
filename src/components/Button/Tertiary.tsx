import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, styled, Text} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

const TDftBtn = styled(Button, {
    theme: 'light',
    name: "Default",
    flexDirection: 'row',
    alignSelf: 'center',
    color: '$text-secondary',
    icon: <AntDesign name="plus" size={24} color={"#8F66D6"}/>,
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

export const TDeftBtn = ({text}: Props) => {
  return <TDftBtn>{text}</TDftBtn>
  };