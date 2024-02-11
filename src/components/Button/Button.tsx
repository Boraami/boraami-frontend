import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { Button, H1, styled } from "tamagui";

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
