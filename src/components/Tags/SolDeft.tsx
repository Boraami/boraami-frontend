import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { Entypo } from '@expo/vector-icons';

  const SolDeflt = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$default-solid-fill", //boraami[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$default-solid-text',
    icon: <Entypo name="heart" size={24} color="white" />
  })
  
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolDeftTag = ({ onPress, text }: Props) => {
    return <SolDeflt onPress={onPress}>{text}</SolDeflt>;
  };
  