import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, styled, Text} from "tamagui";
import { AntDesign } from '@expo/vector-icons';


const SDftBtn = styled(Button, {
    theme: 'light',
    name: "secondary",
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: "$r-subtle",
    color: '$text-secondary',
    icon: <AntDesign name="plus" size={24} color={"#8F66D6"}/>,
    borderColor: '$secondary-default-btn-border',
    hoverStyle: {
      borderRadius: "$r-subtle",  
      borderColor: '$secondary-hover-btn-border',
      shadowColor: '#38BDF8',
      shadowOpacity: 1,
      shadowRadius: 12,
      shadowOffset : { width: 0, height: 0},
    },
    focusStyle: {
      borderColor: '$secondary-focus-btn-border',
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

export const SDeftBtn = ({onPress, text}: Props) => {
return <SDftBtn onPress={onPress}>{text}</SDftBtn>
};

