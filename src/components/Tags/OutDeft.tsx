import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { Entypo } from '@expo/vector-icons';

  const OutDeft = styled(Button, {
    theme: 'light',
    name: "outlined deft",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$default-solid-text',//boraami[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$default-outline-text', //boraami[600]
    icon: <Entypo name="heart" size={24} color="#744FB5" />
  })

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const OutDeftTag = ({ onPress, text }: Props) => {
    return <OutDeft onPress={onPress}>{text}</OutDeft>;
  };
  