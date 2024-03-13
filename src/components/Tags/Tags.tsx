import React from "react";
import {
    Button as Btn,
    ButtonProps as BtnProps,
    SizableText,
    FontSizeTokens,
    styled
} from "tamagui";
import {
    AntDesign,
    Entypo,
    FontAwesome6,
    MaterialCommunityIcons
} from '@expo/vector-icons';

interface CustomTagProps extends BtnProps {
    name: string;
    info: string;
    error: string;
    success: string;
    warning: string;
    deflt: string;
};

const Button: React.FC<CustomTagProps> = (props) => <StyledTag {...props}>{props.children}</StyledTag>

type TagSizeProps = {
    [key: string]: {
        width: number;
        height: number;
        border: number;
        paddingLeft: number;
        gap: number;
        txtSize: FontSizeTokens;
        iconSize: number;
    };
};

const tagSizes: TagSizeProps = {
    sm: {
        width: 76,
        height: 20,
        border: 1,
        paddingLeft: 4,
        gap: 4,
        txtSize: '$xs',
        iconSize: 12,
    },
    md: {
        width: 82,
        height: 24,
        border: 1,
        paddingLeft: 6,
        gap: 6,
        txtSize: '$sm',
        iconSize: 12,
    }
};

const StyledTag = styled(Btn, {
    variants: {
        info: {
            solid: {
                backgroundColor: '$info-solid-fill',
                color: '$info-solid-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$info-outline-border',
                color: '$info-outline-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        success: {
            solid: {
                backgroundColor: '$success-solid-fill',
                color: '$success-solid-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$success-outline-border',
                color: '$success-outline-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        error: {
            solid: {
                backgroundColor: '$error-solid-fill',
                color: '$error-solid-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$error-outline-border',
                color: '$error-outline-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        warning: {
            solid: {
                backgroundColor: '$warning-solid-fill',
                color: '$warning-solid-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$warning-outline-border',
                color: '$warning-outline-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        default: {
            solid: {
                backgroundColor: '$default-solid-fill',
                color: '$default-solid-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$default-outline-border',
                color: '$default-outline-text',
                fontFamily: '$PoppinsReg',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
    },
});

interface ButtonProps {
    txt: string;
    name: string;
    info: string;
    error: string;
    success: string;
    warning: string;
    deflt: string;
    size: 'sm' | 'md';
}

export const TagField: React.FC<ButtonProps> = (props) => {
    const {
        txt,
        size,
        info,
        name,
        error,
        success,
        warning,
        deflt,
    } = props;

    let iconComponent = null;

    if (name === 'info') {
        iconComponent = (
            <MaterialCommunityIcons
                name="lightbulb"
                size={tagSizes[size].iconSize}
                color={info === 'solid' ? 'white' : '#0284C7'}
            />
        );
    } else if (name === 'success') {
        iconComponent = (
            <AntDesign
                name="check"
                size={tagSizes[size].iconSize}
                color={success === 'solid' ? 'white' : '#27846E'}
            />
        );
    } else if (name === 'error') {
        iconComponent = (
            <FontAwesome6
                name="triangle-exclamation"
                size={tagSizes[size].iconSize}
                color={error === 'solid' ? 'white' : '#DB2777'}
            />
        );
    } else if (name === 'warning') {
        iconComponent = (
            <FontAwesome6
                name="triangle-exclamation"
                size={tagSizes[size].iconSize}
                color={warning === 'solid' ? 'black' : '#B95D29'}
            />
        );
    } else if (name === 'default') {
        iconComponent = (
            <Entypo
                name="heart"
                size={tagSizes[size].iconSize}
                color={deflt === 'solid' ? 'white' : '#744FB5'}
            />
        );
    }

    return (
        <StyledTag
            name={name}
            height={tagSizes[size].height}
            width={tagSizes[size].width}
            paddingLeft={tagSizes[size].paddingLeft}
            disabled={true}
            info={info}
            error={error}
            success={success}
            warning={warning}
            deflt={deflt}>
            {iconComponent}
            <SizableText
                fontFamily={'$PoppinsReg'}
                size={tagSizes[size].txtSize}
                lineHeight={12}
            >
                {txt}
            </SizableText>
        </StyledTag>
    );
};
