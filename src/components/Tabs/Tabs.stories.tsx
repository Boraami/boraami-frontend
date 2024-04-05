import React from "react";
import { View } from "react-native";
import { Meta } from "@storybook/react-native";
import Tabs from "./Tabs";

const TabsMeta: Meta<typeof Tabs> = {
    title: "Tabs",
    component: Tabs,
    argTypes: {
        defaultValue: 'tab1',
        disabled: false, 
        text: 'Button',
    },
    decorators: [
        (Story) => (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <Story />
            </View>
        ),
    ],
};

export default TabsMeta;

export const disabledTab = {
    args: {
        disabled: true, 
    },
};
