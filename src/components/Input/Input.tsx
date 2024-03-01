import React from "react";
import { Input as FormInput, Text, View, XStack, YStack, styled } from "tamagui";
import Icon from "../Icon/Icon";
import { Platform } from "react-native";

const StyledInput = styled(FormInput, {
  variants: {},
  width: 343,
  borderColor: "$bwl.400",
  borderWidth: 1,
  backgroundColor: "$bg",
  color: "$butter.50",
  paddingLeft: 44,
  placeholderTextColor: "$border-brand-strong",
  borderRadius: "$r-subtle",
  shadowColor: Platform.OS === "android" ? "$bwl.400" : "$bwl.400",
  shadowRadius: 4,
  shadowOpacity: 1,
  elevation: 6,
});

const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <XStack>
      <View zIndex={2}>
        <Icon
          name="user-large"
          size={18}
          style={{
            position: "absolute",
            left: 13,
            top: 10,
            padding: 2,
          }}
          color={"#5F3D9C"}
        />
      </View>

      <StyledInput
        hoverStyle={{ borderColor: "green", shadowColor: "green" }}
        placeholder={placeholder}
        zIndex={1}
      ></StyledInput>
    </XStack>
  );
};

export default Input;
