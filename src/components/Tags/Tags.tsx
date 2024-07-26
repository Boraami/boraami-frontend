import React, { useState } from "react";
import {
  Button as Btn,
  ButtonProps as BtnProps,
  SizableText,
  FontSizeTokens,
  styled,
} from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";

interface CustomTagProps extends BtnProps {
  status: "info" | "success" | "error" | "warning" | "social";
  state: "solid" | "outline";
}

const Button: React.FC<CustomTagProps> = (props) => <StyledTag {...props} />;

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
    txtSize: "$xs",
    iconSize: 12,
  },
  md: {
    height: 24,
    txtSize: "$sm",
    iconSize: 12,
  },
};

const StyledTag = styled(Btn, {
  borderRadius: 4,
  paddingLeft: 6,
  paddingRight: 6,
  alignItems: "center",
  variants: {
    status: {
      info: {
        solid: {
          backgroundColor: "$info-solid-fill",
          color: "$info-solid-text",
        },
        outline: {
          borderColor: "$info-outline-border",
          color: "$info-outline-text",
        },
      },
      success: {
        solid: {
          backgroundColor: "$success-solid-fill",
          color: "$success-solid-text",
        },
        outline: {
          borderColor: "$success-outline-border",
          color: "$success-outline-text",
        },
      },
      error: {
        solid: {
          backgroundColor: "$error-solid-fill",
          color: "$error-solid-text",
        },
        outline: {
          borderColor: "$error-outline-border",
          color: "$error-outline-text",
        },
      },
      warning: {
        solid: {
          backgroundColor: "$warning-solid-fill",
          color: "$warning-solid-text",
        },
        outline: {
          borderColor: "$warning-outline-border",
          color: "$warning-outline-text",
        },
      },
      social: {
        solid: {
          backgroundColor: "$default-solid-fill",
          color: "$default-solid-text",
        },
        outline: {
          borderColor: "$default-outline-border",
          color: "$default-outline-text",
        },
      },
    },
  },
});

interface ButtonProps {
  txt: string;
  status: "info" | "success" | "error" | "warning" | "social";
  state: "solid" | "outline";
  size: "sm" | "md";
  showIcon: boolean;
  handleAction?: (...args: any[]) => void; // since there could be any action attached to btn
}

const TagField = (props: ButtonProps) => {
  const { txt, size, status, state, showIcon, handleAction } = props;
  const [stateVar, setStatusVar] = useState(state);

  const statusColor =
    status === "info"
      ? "#0284C7"
      : status === "success"
      ? "#27846E"
      : status === "error"
      ? "#DB2777"
      : status === "warning"
      ? "#B95D29"
      : "#744FB5";

  const iconColor = stateVar === "solid" ? "white" : statusColor;

  const borColor = stateVar === "outline" ? "white" : statusColor;

  const iconMap: { [key: string]: string } = {
    info: "lightbulb",
    success: "check",
    error: "triangle-exclamation",
    warning: "triangle-exclamation",
    social: "heart",
  };

  const iconComponent = (
    <FontAwesome6 name={iconMap[status]} size={tagSizes[size].iconSize} color={iconColor} />
  );

  const handleActionPress = () => {
    // Do anything else you wish on component level
    setStatusVar((prevState) => (prevState === "solid" ? "outline" : "solid"));
    handleAction && handleAction();
  };

  return (
    <Button
      status={status}
      height={tagSizes[size].height}
      state={stateVar}
      borderRadius={4}
      borderColor={stateVar === "outline" ? iconColor : "transparent"}
      backgroundColor={stateVar === "solid" ? borColor : "transparent"}
      icon={showIcon ? iconComponent : null}
      scaleSpace={0.4}
      onPress={handleActionPress}
    >
      <SizableText
        fontFamily={"$btn"}
        size={tagSizes[size].txtSize}
        fontWeight={"500"}
        color={iconColor}
      >
        {txt}
      </SizableText>
    </Button>
  );
};

export default TagField;
