import React from "react";
import { Meta } from "@storybook/react-native";
import IconBtn from "./IconBtn";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { View } from "tamagui";
import { colorScheme } from "../../themes/theme";

const idleColor = colorScheme.mono[500];
const activeColor = colorScheme.boraami[500];

const IconBtnMeta: Meta<typeof IconBtn> = {
  title: "Button",
  component: IconBtn,
  decorators: [
    () => (
      <View flex={1} justifyContent="center" alignItems="center" backgroundColor={"$app-bg"}>
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={idleColor} />}
          iconAfter={<FontAwesome name="heart" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={1022}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={idleColor} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={1299}
          iconBefore={<FontAwesome name="heart-o" size={14} color={idleColor} />}
          iconAfter={<FontAwesome name="heart" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={9999}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={idleColor} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={99999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={idleColor} />}
          iconAfter={<FontAwesome name="heart" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={999999}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={idleColor} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={10999999}
          iconBefore={<FontAwesome name="heart-o" size={14} color={idleColor} />}
          iconAfter={<FontAwesome name="heart" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          count={99999999}
          iconBefore={<FontAwesome6 name="retweet" size={14} color={idleColor} />}
          iconAfter={<FontAwesome6 name="retweet" size={14} color={activeColor} />}
        />
        <IconBtn
          idleColor={idleColor}
          activeColor={activeColor}
          iconBefore={<FontAwesome6 name="comment" size={14} color={idleColor} />}
          iconAfter={<FontAwesome6 name="comment" size={14} color={activeColor} />}
        />
      </View>
    ),
  ],
};

export default IconBtnMeta;

export const IconButtons = {};
