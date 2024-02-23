import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { MaterialCommunityIcons } from '@expo/vector-icons';

  const SolInfo = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$info-solid-fill", //serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$info-solid-text',
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="white" />
  })
  
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolInfoTag = ({ onPress, text }: Props) => {
    return <SolInfo onPress={onPress}>{text}</SolInfo>;
  };
  