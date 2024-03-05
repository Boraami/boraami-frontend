import React from 'react'
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { View } from 'tamagui'

type Props = {
  color: string;
  name: string;
  size: number;
  style: typeof FontAwesome6.style 
  
  // style: typeof FontAwesome.style 
};

const Icon = ({ color, name, style, size }: Props) => {
  return (
    <View>
        <FontAwesome6 name={name} style={style} size={size} color={color}/>
    </View>
  )
}

export default Icon;
