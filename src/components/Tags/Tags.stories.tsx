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
        variant: 'solid',
        size: 'sm',
        txt: 'INFO',
        icoN: false,
    },
};

export const success_small = {
    args: {
        status: 'success',
        state: 'solid',
        size: 'sm',
        txt: 'SUCCESS',
        icoN: false,
    },
};

export const error_small = {
    args: {
        status: 'error',
        state: 'solid',
        size: 'sm',
        txt: 'ERROR',
        icoN: false,
    },
};

export const warning_small = {
    args: {
        status: 'warning',
        state: 'solid',
        size: 'sm',
        txt: 'WARNING',
        icoN: false,
    },
};

export const default_small = {
    args: {
        status: 'social',
        state: 'solid',
        size: 'sm',
        txt: 'DEFAULT',
        icoN: false,
    }
};

export const info_medium_out = {
    args: {
        status: 'info',
        state: 'outline',
        size: 'md',
        txt: 'INFO',
        icoN: true
    },
};

export const success_medium_out = {
    args: {
        status: 'success',
        state: 'outline',
        icoN: true,
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
        icoN: true
    },
};

export const warning_medium_out = {
    args: {
        status: 'warning',
        state: 'outline',
        size: 'md',
        txt: 'WARNING',
        icoN: true
    },
};

export const default_medium_out = {
    args: {
        status: 'social',
        state: 'outline',
        size: 'md',
        txt: 'DEFAULT',
        icoN: true
    }
}