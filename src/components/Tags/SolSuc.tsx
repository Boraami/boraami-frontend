import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { AntDesign } from '@expo/vector-icons';


  const SolSuc = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$success-solid-fill", //singularity[500]
    height: '$s-sm',
    width: '$s-sm',
    color: '$success-solid-text',
    icon: <AntDesign name="check" size={24} color="white" />
  })

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolSucTag = ({ onPress, text }: Props) => {
    return <SolSuc onPress={onPress}>{text}</SolSuc>;
  };
  