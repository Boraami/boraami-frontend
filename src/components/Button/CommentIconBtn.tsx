import React, { useState } from "react";
import { Button } from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";

const CommentIconBtn = () => {
  const [tapped, setTapped] = useState(false);
  const handleIconBtn = () => {
    setTapped(!tapped) 
};
  return (
    <Button
    icon={tapped?
    <FontAwesome6 name='comment' size={14} color={"#8F66D6"} />:
    <FontAwesome6 name='comment' size={14} color={"#C2A0FF"} />}
    onPress={handleIconBtn}
    />
  );
};

export default CommentIconBtn;
