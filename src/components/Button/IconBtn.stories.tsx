import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import IconBtn from "./IconBtn";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const IconBtnMeta: Meta<typeof IconBtn> = {
  title: "Button",
  component: IconBtn,
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <IconBtn
          count={9999999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={"#C2A0FF"} />}
          iconAfter={<FontAwesome name="heart" size={14} color={"#8F66D6"} />}
        />
        <IconBtn
          count={1098}
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
