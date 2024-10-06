import React, { useState } from "react";
import { SizableText, XStack } from "tamagui";
import Textfields from "../Textfields/Textfields";
import BtnField from "../Button/Button";

export type Props = {
  username: string;
  helperText: string;
  height: number;
  width: number;
  placeholderText: string;
  maxLength: number;
};

const PostTextField = ({
  username,
  maxLength,
  helperText,
  width,
  height,
  placeholderText,
}: Props) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleOnChangeText = (text: string) => {
    setInput(text);
    setCount(text.length);
  };

  return (
    <XStack
      backgroundColor={"$post-replying-to-text"}
      padding={24}
      gap={12}
      width={"100%"}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SizableText width={width} color={"$post-comment-bg-color"} size={"$xs"}>
        Replying to {username}
      </SizableText>
      <Textfields
        width={width}
        height={height}
        value={input}
        count={count}
        placeholder={placeholderText}
        helperText={helperText}
        maxLength={maxLength}
        disabled={false}
        name="default"
        editable={true}
        onChangeText={handleOnChangeText}
        selectTextOnFocus={true}
      />
      <BtnField
        txt={"Post"}
        size="lg"
        name="dialog-close"
        width={width}
        disabled={count == 0 || count > maxLength}
        primary={count == 0 || count > maxLength ? "disabled" : "normal"}
        onPress={() => {
          alert("Posted");
        }}
      />
    </XStack>
  );
};

export default PostTextField;
