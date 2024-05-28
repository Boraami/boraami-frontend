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
    status: 'info' | 'success' | 'error' | 'warning' | 'social';
    state: 'solid' | 'outline';
};

const Button: React.FC<CustomTagProps> = (props) => <StyledTag {...props} />

type TagSizeProps = {
    [key: string]: {
        height: number;
        txtSize: FontSizeTokens;
        iconSize: number;
    };
};

const tagSizes: TagSizeProps = {
    sm: {
        height: 20,
        txtSize: '$xs',
        iconSize: 12,
    },
    md: {
        height: 24,
        txtSize: '$sm',
        iconSize: 12,
    }
};

const StyledTag = styled(Btn, {
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6,
    variants: {
        status: {
            info: {
                solid: {
                    backgroundColor: '$info-solid-fill',
                    color: '$info-solid-text',
                    alignItems: 'center',
                },
                outline: {
                    borderColor: '$info-outline-border',
                    color: '$info-outline-text',
                    alignItems: 'center',
                },
            },
            success: {
                solid: {
                    backgroundColor: '$success-solid-fill',
                    color: '$success-solid-text',
                },
                outline: {
                    borderColor: '$success-outline-border',
                    color: '$success-outline-text',
                },
            },
            error: {
                solid: {
                    backgroundColor: '$error-solid-fill',
                    color: '$error-solid-text',
                    alignItems: 'center',
                },
                outline: {
                    borderColor: '$error-outline-border',
                    color: '$error-outline-text',
                    alignItems: 'center',
                },
            },
            warning: {
                solid: {
                    backgroundColor: '$warning-solid-fill',
                    color: '$warning-solid-text',
                    alignItems: 'center',
                },
                outline: {
                    borderColor: '$warning-outline-border',
                    color: '$warning-outline-text',
                    alignItems: 'center',
                },
            },
            social: {
                solid: {
                    backgroundColor: '$default-solid-fill',
                    color: '$default-solid-text',
                    alignContent: 'center',
                },
                outline: {
                    borderColor: '$default-outline-border',
                    color: '$default-outline-text',
                    alignItems: 'center',
                },
            },
        },
    },
});

interface ButtonProps {
    txt: string;
    status: 'info' | 'success' | 'error' | 'warning' | 'social';
    state: 'solid' | 'outline';
    size: 'sm' | 'md';
    icoN: boolean;
}

export const TagField: React.FC<ButtonProps> = (props) => {
    const {
        txt,
        size,
        status,
        state,
        icoN
    } = props;

    const iconColor = state === 'solid' ? 'white' :
        (status === 'info' ? '#0284C7' :
            status === 'success' ? '#27846E' :
                status === 'error' ? '#DB2777' :
                    status === 'warning' ? '#B95D29' : '#744FB5');

    const borColor = state === 'outline' ? 'white' :
        (status === 'info' ? '#0284C7' :
            status === 'success' ? '#27846E' :
                status === 'error' ? '#DB2777' :
                    status === 'warning' ? '#B95D29' : '#744FB5');

    const iconMap: { [key: string]: string } = {
        info: "lightbulb",
        success: "check",
        error: "triangle-exclamation",
        warning: "triangle-exclamation",
        social: "heart",
    };

    const iconComponent = <FontAwesome6
        name={iconMap[status]}
        size={tagSizes[size].iconSize}
        color={iconColor}
        style={{ marginRight: 4 }}
    />

    return (
        <Button
            status={status}
            height={tagSizes[size].height}
            disabled={true}
            state={state}
            borderRadius={4}
            borderColor={state === 'outline' ? iconColor : 'transparent'}
            backgroundColor={state === 'solid' ? borColor : 'transparent'}
            icon={icoN ? iconComponent : null}
            scaleSpace={0.4}
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
