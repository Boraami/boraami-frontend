import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { XStack, YStack, SizableText } from "tamagui";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { colorScheme } from "../../themes/theme";

type Props = {
  shade: "solid" | "subtle" | "outline";
  alert: string;
  content: string;
};

export const LongAlert = ({ shade, alert, content }: Props) => {
  const [close, setClose] = useState(false);
  const theme = useColorScheme();
  let solid = shade === "solid";
  let subtle = shade === "subtle";

  const handleClose = () => {
    setClose(true);
  };

  if (close) {
    return null;
  }

  return (
    <YStack>
      <XStack
        style={{ height: 90, width: 330, borderRadius: 4 }}
        backgroundColor={
          shade === "solid"
            ? "$default-alert-solid-fill"
            : shade === "subtle"
            ? "$default-alert-subtle-fill"
            : "$default-alert-outline-fill"
        }
        borderColor={
          shade === "solid"
            ? "$default-alert-solid-fill"
            : shade === "subtle"
            ? "$default-alert-subtle-fill"
            : "$default-alert-solid-fill"
        }
        borderWidth={1}
        borderLeftWidth={shade === "outline" ? 1 : 4}
        borderLeftColor={
          shade !== "outline" ? "$default-alert-left-border" : "$default-alert-solid-fill"
        }
      >
        <XStack
          flexDirection={"row"}
          paddingTop={10}
          width={300}
          height={66}
          justifyContent={"space-evenly"}
        >
          <FontAwesome
            name={"heart"}
            size={14}
            color={
              (theme === "dark" && (subtle ? colorScheme.boraami[700] : colorScheme.butter[50])) ||
              (theme === "light" && solid ? colorScheme.butter[50] : colorScheme.boraami[700])
            }
            paddingTop={4}
          />
          <XStack width={250} flexDirection="column">
            <SizableText
              fontFamily={"$heading"}
              color={
                shade === "solid"
                  ? "$default-alert-solid-text"
                  : shade === "subtle"
                  ? "$default-alert-subtle-text"
                  : "$default-alert-outline-text"
              }
              size={"$sm"}
              paddingVertical={2}
              lineHeight={20}
            >
              {alert}
            </SizableText>
            <SizableText
              fontFamily={"$body"}
              color={
                shade === "solid"
                  ? "$default-alert-solid-text"
                  : shade === "subtle"
                  ? "$default-alert-subtle-text"
                  : "$default-alert-outline-text"
              }
              size={"$sm"}
            >
              {content}
            </SizableText>
          </XStack>
        </XStack>
        <FontAwesome6
          name="xmark"
          size={18}
          paddingTop={10}
          paddingRight={10}
          color={
            (theme === "dark" && (subtle ? colorScheme.mono[800] : colorScheme.butter[50])) ||
            (theme === "light" && solid ? colorScheme.butter[50] : colorScheme.mono[800])
          }
          onPress={handleClose}
        />
      </XStack>
    </YStack>
  );
};
