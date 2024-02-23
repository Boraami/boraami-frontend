import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, styled, Text} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

const TDftBtn = styled(Button, {
    theme: 'light',
    name: "tertiary",
    flexDirection: 'row',
    alignSelf: 'center',
    color: '$tertiary-default-text',
    icon: <AntDesign name="plus" size={24} color={"#8F66D6"}/>,
    chromeless: true,
    hoverStyle: {
      borderBottomWidth: 2,
      borderBottomColor: '$tertiary-hover-border',
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

export const TDeftBtn = ({onPress, text}: Props) => {
  return <TDftBtn onPress={onPress}>{text}</TDftBtn>
  };