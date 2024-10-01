import React, { useState } from "react";
import { Dimensions, useColorScheme } from "react-native";
import { XStack, View, SizableText, styled, ViewProps } from "tamagui";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { colorScheme } from "../../themes/theme";

type Props = ViewProps & {
  shade: "solid" | "subtle" | "outline";
  name: "default" | "success" | "warning";
  alert: string;
  alertWidth?: string;
  noCrossIcon?: boolean;
};

const StyledAlert = styled(View, {
  borderRadius: 4,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 16,
  paddingVertical: 8,
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
        backgroundColor: "$app-bg",
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
        backgroundColor: "$app-bg",
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
        backgroundColor: "$app-bg",
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

const ShortAlert = ({ shade, name, alert, alertWidth ,   noCrossIcon}: Props) => {
  const [close, setClose] = useState(false);
  const theme = useColorScheme();

  const handleClose = () => {
    setClose(true);
  };

  if (close) {
    return null;
  }

  return (
    <View width={Dimensions.get("window").width} justifyContent="center" alignItems="center">
      <StyledAlert variant={`${name}.${shade}`} width={alertWidth? alertWidth:'85%'}>
        <XStack flexDirection={"row"} justifyContent={"space-evenly"} alignItems="center">
          {/* Only render this icon for 'success' and 'default' alerts */}
          {name !== "warning" ? (
            <FontAwesome
              name={name === "default" ? "heart" : name === "success" ? "check-circle" : "warning"}
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
            <FontAwesome
              size={16}
              name={"warning"}
              color={shade === "solid" ? colorScheme.mono[800] : colorScheme.ptd[500]}
            />
          )}

          <XStack flexDirection="column" alignItems="flex-start">
            <StyledText
              variant={`${name}.${shade}`}
              fontFamily={"$body"}
              fontSize={14}
              paddingLeft={10}
            >
              {alert}
            </StyledText>
          </XStack>
        </XStack>
        {  noCrossIcon? null:
        <FontAwesome6
        name="xmark"
        size={16}
        color={
          // Default variant:
          theme === "dark" && name === "default"
            ? shade === "subtle"
              ? colorScheme.mono[800]
              : colorScheme.butter[50]
            : theme === "light" && name === "default"
            ? shade === "solid"
              ? colorScheme.butter[50]
              : colorScheme.mono[800]
            : // Success variant:
            theme === "dark" && name === "success"
            ? shade === "solid"
              ? colorScheme.butter[50]
              : shade === "subtle"
              ? colorScheme.mono[800]
              : colorScheme.singularity[200]
            : theme === "light" && name === "success"
            ? shade === "solid"
              ? colorScheme.butter[50]
              : colorScheme.mono[800]
            : // Warning variant:
            theme === "dark" && name === "warning"
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
      }
        
      </StyledAlert>
    </View>
  );
};

export default ShortAlert;
