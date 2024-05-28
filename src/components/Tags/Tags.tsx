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
    type: string;
    variant: 'solid' | 'outline';
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
        type: {
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
    },
});

interface ButtonProps {
    txt: string;
    type: 'info' | 'success' | 'error' | 'warning' | 'social';
    variant: 'solid' | 'outline';
    size: 'sm' | 'md';
}

export const TagField = (props: ButtonProps) => {
    const {
        txt,
        size,
        type,
        variant
    } = props;

    const iconColor = variant === 'solid' ? 'white' :
    (type === 'info' ? '#0284C7' :
    type === 'success' ? '#27846E' :
    type === 'error' ? '#DB2777' :
    type === 'warning' ? '#B95D29' : '#744FB5');

    const borColor = variant === 'outline' ? 'white' :
    (type === 'info' ? '#0284C7' :
    type === 'success' ? '#27846E' :
    type === 'error' ? '#DB2777' :
    type === 'warning' ? '#B95D29' : '#744FB5');

    const iconMap: { [key: string]: string } = {
        info: "lightbulb",
        success: "check",
        error: "triangle-exclamation",
        warning: "triangle-exclamation",
        social: "heart",
    };

    return (
        <Button
            type={type}
            height={tagSizes[size].height}
            width={tagSizes[size].width}
            disabled={true}
            variant={variant}
            borderRadius={4}
            borderColor={variant === 'outline' ? iconColor : 'transparent'}
            backgroundColor={variant === 'solid' ? borColor : 'transparent'}
            icon={<FontAwesome6
                name={iconMap[type]}
                size={tagSizes[size].iconSize}
                color={iconColor}
            />}
            >
            <SizableText
                fontFamily={"$btn"}
                size={tagSizes[size].txtSize}
                fontWeight={'500'}
                color={iconColor}>{txt}
                </SizableText>
        </Button>
    );
};
