import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "tamagui";

type IconProps = {
  name: string;
  style?: typeof FontAwesome6.style;
  size: number;
  color: string;
};

const Icon = ({ name, style, size, color }: IconProps) => {
  return (
    <View>
      <FontAwesome6 name={name} style={style} size={size} color={color} />
    </View>
  );
};

export default Icon;
