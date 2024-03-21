import React, { useState } from "react";
import {
  TextArea,
  SizableText,
  Button,
  styled,
  View,
  ScrollView,
} from "tamagui";

type Props = {
  username: string;
  maxChar: number; 
};

const StyledView = styled(View, {
  width: 342,
  height: 249,
  borderRadius: 4,
  borderWidth: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$post-placeholder-textbox-fill",
  borderColor: "$post-placeholder-textbox-fill",
});

const StyledTextArea = styled(TextArea, {
  height: 115,
  borderWidth: 1,
  borderColor: "$post-placeholder-textbox-border",
  borderRadius: 4,
  fontFamily: "$body",
  fontSize: "$xs",
  color: "$post-placeholder-textbox-text",
  placeholderTextColor: "$post-placeholder-textbox-text",
  backgroundColor: "$post-placeholder-textbox-fill",
  lineHeight: 18,
  paddingTop: 6,
  marginVertical: 10,
  alignItems: "center",
  justifyContent: "center",
});

const StyledHelperText = styled(SizableText, {
  color: "$post-placeholder-helper-text",
  fontFamily: "$body",
  size: "$sm",
});

const StyledButton = styled(Button, {
  height: 40,
  backgroundColor: "$mono.400",
  borderRadius: 4,
  color: "$mono.100",
  fontFamily: "$btn",
  fontSize: "$xs",
});

export const Post = ({ username, maxChar }: Props) => {
  const [numChar, setNumChar] = useState(0);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const handleOnChangeText = (text: string) => {
    setInput(text);
    setNumChar(text.length);
}

  return (
    <StyledView>
      <View
        style={{
          width: 310,
          height: 222,
        }}
      >
        <SizableText
          fontFamily={"$body"}
          color={"$post-comment-bg-color"}
          size={"$xs"}
        >
          Replying to @{username}
        </SizableText>

        <ScrollView style={{ height: 114 }}>
          <StyledTextArea
          value={input}
          placeholder='Have something to contribute to the conversation? Post a reply.'
            borderWidth={index === 0 ? 1 : 2}
            onFocus={() => setIndex(1)}
            onBlur={() => setIndex(0)}
          onChangeText={handleOnChangeText}
          >
        </StyledTextArea>

          <View
            style={{
              width: 310,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <StyledHelperText>Helper text</StyledHelperText>
            <StyledHelperText>
              {numChar}/{maxChar}
            </StyledHelperText>
          </View>
        </ScrollView>

        <StyledButton>Post</StyledButton>
      </View>
    </StyledView>
  );
};
