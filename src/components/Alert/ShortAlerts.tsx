import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { XStack, YStack, View, SizableText, styled } from "tamagui";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colorScheme } from "../../themes/theme";

type Props = {
  shade: "solid" | "subtle" | "outline";
  name: "default" | "success" | "warning";
  alert: string;
};

const StyledAlert = styled(View, {
  height: 48,
  width: 329,
  borderRadius: 4,
  alignItems: "center",
  flexDirection: "row",

  variants: {
    variant: {
      "default.solid": {
        backgroundColor: "$default-alert-solid-fill",
        color: "$default-alert-solid-text",
      },
      "default.subtle": {
        backgroundColor: "$default-alert-subtle-fill",
        color: "$default-alert-subtle-text",
      },
      "default.outline": {
        borderColor: "$default-alert-outline",
        borderWidth: 1,
        color: "$default-alert-outline-text",
      },
      "success.solid": {
        backgroundColor: "$success-alert-solid-fill",
        color: "$success-alert-solid-text",
      },
      "success.subtle": {
        backgroundColor: "$success-alert-subtle-fill",
        color: "$success-alert-subtle-text",
      },
      "success.outline": {
        borderColor: "$success-alert-outline",
        borderWidth: 1,
        color: "$success-alert-outline-text",
      },
      "warning.solid": {
        backgroundColor: "$warning-alert-solid-fill",
        color: "$error-alert-solid-text",
      },
      "warning.subtle": {
        backgroundColor: "$warning-alert-subtle-fill",
        color: "$warning-alert-subtle-text",
      },
      "warning.outline": {
        backgroundColor: "$warning-alert-outline-fill",
        borderColor: "$warning-alert-outline",
        borderWidth: 1,
        color: "$warning-alert-outline-text",
      },
    },
  },
});

const StyledText = styled(SizableText, {
  variants: {
    variant: {
      "default.solid": {
        color: "$default-alert-solid-text",
      },
      "default.subtle": {
        color: "$default-alert-subtle-text",
      },
      "default.outline": {
        color: "$default-alert-outline-text",
      },
      "success.solid": {
        color: "$success-alert-solid-text",
      },
      "success.subtle": {
        color: "$success-alert-subtle-text",
      },
      "success.outline": {
        color: "$success-alert-outline-text",
      },
      "warning.solid": {
        color: "$error-alert-solid-text",
      },
      "warning.subtle": {
        color: "$warning-alert-subtle-text",
      },
      "warning.outline": {
        color: "$warning-alert-outline-text",
      },
    },
  },
});

export const ShortAlerts = ({ shade, name, alert }: Props) => {
  const [close, setClose] = useState(false);
  const theme = useColorScheme();

  const handleClose = () => {
    setClose(true);
  };

  if (close) {
    return null;
  }

  return (
    <YStack>
      <StyledAlert variant={`${name}.${shade}`}>
        <XStack
          flexDirection={"row"}
          width={300}
          height={21}
          justifyContent={"space-evenly"}
        >
          {/* Only render this icon for 'success' and 'default' alerts */}
          {name !== "warning" ? (
            <AntDesign
              name={
                name === "default"
                  ? "heart"
                  : name === "success"
                  ? "checkcircle"
                  : "warning"
              }
              paddingTop={2}
              paddingLeft={8}
              size={16}
              color={
                theme === "dark" && name === "default"
                  ? shade === "subtle"
                    ? colorScheme.boraami[700]
                    : colorScheme.butter[50]
                  : theme === "light" && name === "default"
                  ? shade === "solid"
                    ? colorScheme.butter[50]
                    : colorScheme.boraami[700]
                  : theme === "dark" && name === "success"
                  ? shade === "solid"
                    ? colorScheme.butter[50]
                    : shade === "subtle"
                    ? colorScheme.singularity[500]
                    : colorScheme.singularity[200]
                  : theme === "light" && name === "success"
                  ? shade === "solid"
                    ? colorScheme.butter[50]
                    : colorScheme.singularity[500]
                  : colorScheme.mono[800] // return a default value
              }
            />
          ) : (
            // Render this icon if for 'warning' alerts"
            <Entypo
              paddingTop={2}
              paddingLeft={8}
              size={16}
              name={"warning"}
              color={
                shade === "solid" ? colorScheme.mono[800] : colorScheme.ptd[500]
              }
            />
          )}

          <XStack width={250} flexDirection="column">
            <StyledText
              variant={`${name}.${shade}`}
              fontFamily={"$body"}
              fontSize={14}
              lineHeight={20}
              paddingLeft={6}
            >
              {alert}
            </StyledText>
          </XStack>
        </XStack>

        <AntDesign
          name="close"
          size={16}
          color={
            // Default variant:
            theme === "dark" && name === "default"
              ? shade === "subtle"
                ? colorScheme.mono[800]
                : colorScheme.butter[50]
              : theme === "light" && name === "default"
              ? shade === "solid" ? colorScheme.butter[50]
                : colorScheme.mono[800]
            // Success variant:
              : theme === "dark" && name === "success"
              ? shade === "solid"
                ? colorScheme.butter[50]
                : shade === "subtle"
                ? colorScheme.mono[800]
                : colorScheme.singularity[200]
              : theme === "light" && name === "success"
              ? shade === "solid" ? colorScheme.butter[50]  
                : colorScheme.mono[800]
            // Warning variant:
              : theme === "dark" && name === "warning"
              ? shade === "outline"
                ? colorScheme.ptd[500]
                : colorScheme.mono[800]
                : theme === "light" && name === "warning"
              ? shade === "solid" || shade === "subtle"
                ? colorScheme.mono[800]
                : colorScheme.mono[800]
              : colorScheme.mono[800]
          }
          onPress={handleClose}
        />
      </StyledAlert>
    </YStack>
  );
};
