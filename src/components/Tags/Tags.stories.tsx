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
        name: 'info',
        info: 'solid',
        size: 'sm',
        txt: 'INFO',
    },
};

export const success_small = {
    args: {
        name: 'success',
        success: 'solid',
        size: 'sm',
        txt: 'SUCCESS',
    },
};

export const error_small = {
    args: {
        name: 'error',
        error: 'solid',
        size: 'sm',
        txt: 'ERROR',
    },
};

export const warning_small = {
    args: {
        name: 'warning',
        warning: 'solid',
        size: 'sm',
        txt: 'WARNING',
    },
};

export const default_small = {
    args: {
        name: 'social',
        deflt: 'solid',
        size: 'sm',
        txt: 'DEFAULT'
    }
};

export const info_medium_out = {
    args: {
        name: 'info',
        info: 'outline',
        size: 'md',
        txt: 'INFO',
    },
};

export const success_medium_out = {
    args: {
        name: 'success',
        success: 'outline',
        size: 'md',
        txt: 'SUCCESS',
    },
};

export const error_medium_out = {
    args: {
        name: 'error',
        error: 'outline',
        size: 'md',
        txt: 'ERROR',
    },
};

export const warning_medium_out = {
    args: {
        name: 'warning',
        warning: 'outline',
        size: 'md',
        txt: 'WARNING',
    },
};

export const default_medium_out = {
    args: {
        name: 'social',
        deflt: 'outline',
        size: 'md',
        txt: 'DEFAULT'
    }
}