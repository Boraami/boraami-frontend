import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import { MyButton, PDeftBtn, SDeftBtn, TDeftBtn } from "./Button";

const MyButtonMeta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

const PDefaultMeta: Meta<typeof PDeftBtn> = {
  title: "Primary",
  component: PDeftBtn,
  argTypes: {
    onPress: { 
      action: "pressed primary",
    }
  },
  args: {
    text: "Hello primary",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Story />
    </View>
    ),
  ],
};

const SDefaultMeta: Meta<typeof SDeftBtn> = {
  title: "Secondary",
  component: SDeftBtn,
  argTypes: {
    onPress: { 
      action: "pressed secondary",
    }
  },
  args: {
    text: "Hello secondary",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Story />
    </View>
    ),
  ],
};

const TDefaultMeta: Meta<typeof TDeftBtn> = {
  title: "Tertiary",
  component: TDeftBtn,
  argTypes: {
    onPress: { 
      action: "pressed tertiary",
    }
  },
  args: {
    text: "Hello tertiary",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Story />
    </View>
    ),
  ],
};

export default SDefaultMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: "Another example",
  },
};