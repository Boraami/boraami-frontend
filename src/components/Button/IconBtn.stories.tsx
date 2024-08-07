import React from "react";
import { Meta } from "@storybook/react-native";
import IconBtn from "./IconBtn";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { View } from "tamagui";

const IconBtnMeta: Meta<typeof IconBtn> = {
  title: "Button",
  component: IconBtn,
  decorators: [
    () => (
      <View flex={1} justifyContent="center" alignItems="center" backgroundColor={"$app-bg"}>
        <IconBtn
          count={999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome name="heart" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={1022}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={1299}
          iconBefore={<FontAwesome name="heart-o" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome name="heart" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={9999}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={99999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome name="heart" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={999999}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={10999999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome name="heart" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={99999999}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          iconBefore={<FontAwesome6 name="comment" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome6 name="comment" size={14} color={"#8F66D6"} />}
        />
      </View>
    ),
  ],
};

export default IconBtnMeta;

export const IconButtons = {};
