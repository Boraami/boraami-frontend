import React, { useState } from "react";
import { Button, SizableText } from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";

type Props = {
  count: number;
};

const RepostIconBtn = ({count}:Props) => {
  const [tapped, setTapped] = useState(false);
  const [repost, setRepost] = useState(count)
  const handleIconBtn = () => {
    setTapped(!tapped) 
    setRepost(repost+(tapped?-1:1))   
  };
  let c = repost < 1 ? null : repost > 999 ? ((Math.abs(repost)/1000).toFixed(1))+'k':repost
  return (
    <Button
    icon={tapped?
    <FontAwesome6 name='retweet' size={14} color={"#8F66D6"} />:
    <FontAwesome6 name='retweet' size={14} color={"#C2A0FF"}  />}
    onPress={handleIconBtn}
    >
    <SizableText  color={'#8F66D6'} size={"$sm"}>
    {c}
    </SizableText></Button> 
  );
};

export default RepostIconBtn;
