import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const OutInfo = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$info-outline-border',//serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$info-outline-text', //serendipity[200]
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="#0284C7" />
  })
  
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const OutInfoTag = ({ onPress, text }: Props) => {
    return <OutInfo onPress={onPress}>{text}</OutInfo>;
  };
  