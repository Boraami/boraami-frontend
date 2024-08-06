import React, { useState } from "react";
import { Button, SizableText, XStack } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  count: number;
};

const LikeIconBtn = ({count}:Props) => {
  const [tapped, setTapped] = useState(false);
  const [like, setLike] = useState(count)
  const handleIconBtn = () => {
    setTapped(!tapped) 
    setLike(like+(tapped?-1:1))   
  };
  let c = like < 1 ? null : like > 999 ? ((Math.abs(like)/1000).toFixed(1))+'k':like
  return (
    <Button
    height={20}
    size={"$2xs"}
    icon={tapped?
    <FontAwesome name='heart' size={14} color={"#8F66D6"} />:
    <FontAwesome name='heart-o' size={14} color={"#C2A0FF"} />}
    onPress={handleIconBtn}
    >
    <SizableText  color={'#8F66D6'} size={"$sm"}>
    {c}
    </SizableText></Button>  
  );
};

export default LikeIconBtn;
