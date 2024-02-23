import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

  const SolErr = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$error-solid-fill", //bwl[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$error-solid-text',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolErrTag = ({ onPress, text }: Props) => {
    return <SolErr onPress={onPress}>{text}</SolErr>;
  };
  