import React, { useState } from "react";
import { Button } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";

const LikeIconBtn = () => {
  const [tapped, setTapped] = useState(false);
  const handleIconBtn = () => {
    setTapped(!tapped) 
};
  return (
    <Button
    icon={tapped?
    <FontAwesome name='heart' size={14} color={"#8F66D6"} />:
    <FontAwesome name='heart-o' size={14} color={"#C2A0FF"} />}
    onPress={handleIconBtn}
    />
    
  );
};

export default LikeIconBtn;
