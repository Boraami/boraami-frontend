import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, styled, Text} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

const CBtn = styled(Button, {
  borderRadius: "$r-subtle",
  backgroundColor: "$bg-error-strong",
  color: "$text-invert",
  alignSelf: "center",
});

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};


export const MyButton = ({ onPress, text }: Props) => {
  return <CBtn onPress={onPress}>{text}</CBtn>;
};
