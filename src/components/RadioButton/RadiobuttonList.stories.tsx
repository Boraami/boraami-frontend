import RadiobuttonList  from "./RadiobuttonList";
import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";

const radioBtns = [
  {
    value: "1",
    disable: false,
    labelText: "Label 1",
  },
  {
    value: "2",
    disable: false,
    labelText: "Label 2",
  },
  {
    value: "3",
    disable: false,
    labelText: "Label 3",
  },
];

const RadiobuttonListMeta: Meta<typeof RadiobuttonList> = {
  title: "RadiobuttonList",
  component: RadiobuttonList,
  argTypes: {},
  args: {
    data: radioBtns,
    heading: "List",
    size: "sm",
    helperText: "This is radio btn bestie",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default RadiobuttonListMeta;

export const small = {};

export const medium = {
  args: {
    data: radioBtns,
    heading: "List",
    size: "md",
    helperText: "This is radio btn bestie",
  },
};

export const large = {
  args: {
    data: radioBtns,
    heading: "List",
    size: "lg",
    helperText: "This is radio btn bestie",
  },
};
