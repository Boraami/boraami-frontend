import React from "react";
import {
    Button as Btn,
    ButtonProps as BtnProps,
    SizableText,
    FontSizeTokens,
    styled
} from "tamagui";
import {
    FontAwesome6,
} from '@expo/vector-icons';

interface CustomTagProps extends BtnProps {
    name: string;
    info: string;
    error: string;
    success: string;
    warning: string;
    deflt: string;
};

const Button: React.FC<CustomTagProps> = (props) => <StyledTag {...props}/>

type TagSizeProps = {
    [key: string]: {
        width: number;
        height: number;
        border: number;
        txtSize: FontSizeTokens;
        iconSize: number;
    };
};

const tagSizes: TagSizeProps = {
    sm: {
        width: 76,
        height: 20,
        border: 1,
        txtSize: '$xs',
        iconSize: 12,
    },
    md: {
        width: 82,
        height: 24,
        border: 1,
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
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$info-outline-border',
                color: '$info-outline-text',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        success: {
            solid: {
                backgroundColor: '$success-solid-fill',
                color: '$success-solid-text',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$success-outline-border',
                color: '$success-outline-text',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        error: {
            solid: {
                backgroundColor: '$error-solid-fill',
                color: '$error-solid-text',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$error-outline-border',
                color: '$error-outline-text',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        warning: {
            solid: {
                backgroundColor: '$warning-solid-fill',
                color: '$warning-solid-text',
                alignItems: 'center',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$warning-outline-border',
                color: '$warning-outline-text',
                alignItems: 'center',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
        },
        social: {
            solid: {
                backgroundColor: '$default-solid-fill',
                color: '$default-solid-text',
                alignContent: 'center',
                fontFamily: '$btn',
                fontWeight: '500',
                borderRadius: 4,
            },
            outline: {
                borderColor: '$default-outline-border',
                color: '$default-outline-text',
                alignItems: 'center',
                fontFamily: '$btn',
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
    size: 'xs' | 'sm';
}

export const TagField = (props: ButtonProps) => {
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
            <FontAwesome6
                name="lightbulb"
                size={tagSizes[size].iconSize}
                color={info === 'solid' ? 'white' : '#0284C7'}
            />
        );
    } else if (name === 'success') {
        iconComponent = (
            <FontAwesome6
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
    } else if (name === 'social') {
        iconComponent = (
            <FontAwesome6
                name="heart"
                size={tagSizes[size].iconSize}
                color={deflt === 'solid' ? 'white' : '#744FB5'}
            />
        );
    }
    return (
        <Button
            name={name}
            height={tagSizes[size].height}
            width={tagSizes[size].width}
            disabled={true}
            info={info}
            error={error}
            success={success}
            warning={warning}
            deflt={deflt}>
            {iconComponent}
            <SizableText
                fontFamily={'$btn'}
                size={tagSizes[size].txtSize}
                lineHeight={12}>{txt}</SizableText>
        </Button>
    );
};
