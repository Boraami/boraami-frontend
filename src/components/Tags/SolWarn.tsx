import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

  const SolWarn = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$warning-solid-fill", //ptd[400]
    height: '$s-sm',
    width: '$s-sm',
    color: '$warning-solid-tex',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })
 
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolWarnTag = ({ onPress, text }: Props) => {
    return <SolWarn onPress={onPress}>{text}</SolWarn>;
  };
  