import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

  const OutErr = styled(Button, {
    theme: 'light',
    name: "outlined info",
    borderRadius: "$r-subtle",
    alignSelf: 'center',
    borderColor:'$error-outline-border',//bwl[200]
    height: '$s-sm',
    width: '$s-sm',
    color:  '$error-outline-text', //bwl[600]
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="#DB2777" />
  })

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const OutErrTag = ({ onPress, text }: Props) => {
    return <OutErr onPress={onPress}>{text}</OutErr>;
  };
  