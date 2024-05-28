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
        type: 'info',
        variant: 'solid',
        size: 'sm',
        txt: 'INFO',
    },
};

export const success_small = {
    args: {
        type: 'success',
        variant: 'solid',
        size: 'sm',
        txt: 'SUCCESS',
    },
};

export const error_small = {
    args: {
        type: 'error',
        variant: 'solid',
        size: 'sm',
        txt: 'ERROR',
    },
};

export const warning_small = {
    args: {
        type: 'warning',
        variant: 'solid',
        size: 'sm',
        txt: 'WARNING',
    },
};

export const default_small = {
    args: {
        type: 'social',
        variant: 'solid',
        size: 'sm',
        txt: 'DEFAULT'
    }
};

export const info_medium_out = {
    args: {
        type: 'info',
        variant: 'outline',
        size: 'md',
        txt: 'INFO',
    },
};

export const success_medium_out = {
    args: {
        type: 'success',
        variant: 'outline',
        size: 'md',
        txt: 'SUCCESS',
    },
};

export const error_medium_out = {
    args: {
        type: 'error',
        variant: 'outline',
        size: 'md',
        txt: 'ERROR',
    },
};

export const warning_medium_out = {
    args: {
        type: 'warning',
        variant: 'outline',
        size: 'md',
        txt: 'WARNING',
    },
};

export const default_medium_out = {
    args: {
        type: 'social',
        variant: 'outline',
        size: 'md',
        txt: 'DEFAULT'
    }
}