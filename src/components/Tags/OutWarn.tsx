import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

  const OutWarn = styled(Button, {
    theme: 'light',
    name: "outlined warn",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$warning-outline-border',//ptd[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$warning-outline-text', //ptd[400]
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="#B95D29" />
  })
  
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const OutWarnTag = ({ onPress, text }: Props) => {
    return <OutWarn onPress={onPress}>{text}</OutWarn>;
  };
  