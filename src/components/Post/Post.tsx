import React from "react";
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
  count: number;
  maxCount: number;
};

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
  // focus state:
});

const StyledHelperText = styled(SizableText, {
  color: "$post-placeholder-helper-text",
  fontFamily: "$body",
  size: "$sm",
});

const StyledButton = styled(Button, {
  //   width: 310,
  height: 40,
  backgroundColor: "$mono.400",
  borderRadius: 4,
  color: "$mono.100",
  fontFamily: "$btn",
  fontSize: "$xs",
});

/* Issues:
- backgroundColor not applying
- components are not aligned or same width
- handleIinput
- handleFocus state */

export const Post = ({ username, count, maxCount }: Props) => {
  return (
    <View
      style={{
        width: 342,
        height: 249,
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "$post-placeholder-textbox-fill",
      }}
    >
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
          <StyledTextArea>
            Have something to contribute to the conversation? Post a reply.
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
              {count}/{maxCount}
            </StyledHelperText>
          </View>
        </ScrollView>

        <StyledButton>Post</StyledButton>
      </View>
    </View>
  );
};
