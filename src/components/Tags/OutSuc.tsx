import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { AntDesign } from '@expo/vector-icons';

const OutSuc = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$success-outline-border',///singularity[200]
    height: '$s-sm',
    width: '$s-sm',
    color: '$success-outline-text', //singularity[500]
    icon: <AntDesign name="check" size={24} color="#27846E" />
  })
  

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const OutSucTag = ({ onPress, text }: Props) => {
    return <OutSuc onPress={onPress}>{text}</OutSuc>;
  };
  