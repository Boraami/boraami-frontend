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

export default TagMeta;

export const info_small = {
    args: {
        status: 'info',
        state: 'solid',
        size: 'sm',
        txt: 'INFO',
        showIcon: false,
    },
};

export const success_small = {
    args: {
        status: 'success',
        state: 'solid',
        size: 'sm',
        txt: 'SUCCESS',
        showIcon: false,
    },
};

export const error_small = {
    args: {
        status: 'error',
        state: 'solid',
        size: 'sm',
        txt: 'ERROR',
        showIcon: false,
    },
};

export const warning_small = {
    args: {
        status: 'warning',
        state: 'solid',
        size: 'sm',
        txt: 'WARNING',
        showIcon: false,
    },
};

export const default_small = {
    args: {
        status: 'social',
        state: 'solid',
        size: 'sm',
        txt: 'DEFAULT',
        showIcon: false,
    }
};

export const info_medium_out = {
    args: {
        status: 'info',
        state: 'outline',
        size: 'md',
        txt: 'INFO',
        showIcon: true
    },
};

export const success_medium_out = {
    args: {
        status: 'success',
        state: 'outline',
        showIcon: true,
        size: 'md',
        txt: 'SUCCESS',
    },
};

export const error_medium_out = {
    args: {
        status: 'error',
        state: 'outline',
        size: 'md',
        txt: 'ERROR',
        showIcon: true
    },
};

export const warning_medium_out = {
    args: {
        status: 'warning',
        state: 'outline',
        size: 'md',
        txt: 'WARNING',
        showIcon: true
    },
};

export const default_medium_out = {
    args: {
        status: 'social',
        state: 'outline',
        size: 'md',
        txt: 'DEFAULT',
        showIcon: true
    }
}