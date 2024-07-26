import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { TagField } from "./Tags";

const TagMeta: Meta<typeof TagField> = {
  title: "Tags",
  component: TagField,
  argTypes: {},
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default TagMeta;

export const info_md = {
  args: {
    status: "info",
    state: "solid",
    size: "md",
    txt: "INFO",
    showIcon: true,
  },
};

export const success_small = {
  args: {
    status: "success",
    state: "solid",
    size: "sm",
    txt: "SUCCESS",
    showIcon: false,
  },
};

export const error_md = {
  args: {
    status: "error",
    state: "solid",
    size: "md",
    txt: "ERROR",
    showIcon: true,
  },
};

export const warning_small = {
  args: {
    status: "warning",
    state: "solid",
    size: "sm",
    txt: "WARNING",
    showIcon: true,
  },
};

export const default_small = {
  args: {
    status: "social",
    state: "solid",
    size: "sm",
    txt: "DEFAULT",
    showIcon: true,
  },
};

export const smDefaultNoIcon = {
  args: {
    status: "social",
    state: "solid",
    size: "sm",
    txt: "DEFAULT",
    showIcon: false,
  },
};

export const mdSuccessNoIcon = {
  args: {
    status: "social",
    state: "solid",
    size: "md",
    txt: "DEFAULT",
    showIcon: false,
  },
};
