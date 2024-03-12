import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { Card, styled, View, XStack, SizableText, Image } from "tamagui";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colorScheme } from "../../themes/theme";

const Info = styled(Card, {
  alignItems: "flex-start",
  justifyContent: "space-between",
  borderColor: "$border-error-subtle",
  borderTopWidth: 5,
  borderTopColor: "$info-card-top-border",
  backgroundColor: "$info-card-fill",
  borderRadius: "$r-subtle",
  alignSelf: "center",
  display: "flex",
  flexDirection: "row",
  width: 329,
});

type InfoProps = {
  title: string;
  subtitle: string;
  uri: string;
  size?: "l" | "s";
};

export const InfoCard = ({ title, subtitle, uri, size }: InfoProps) => {
  const theme = useColorScheme();
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  if (close) {
    return null;
  }

  let iconSize;
  let closeSize;
  let cardHeight;

  if (size === "l") {
    iconSize = 20;
    closeSize = 16;
    cardHeight = 110;
  } else {
    iconSize = 14;
    closeSize = 12;
    cardHeight = 76;
  }

  return (
    <Info style={{ height: cardHeight }}>
      <XStack style={{ padding: 4 }}>
        <Image
          borderRadius={4}
          borderWidth={1}
          borderColor="$mono.50"
          source={{
            uri: uri,
            width: size === "l" ? 115 : 64,
            height: size === "l" ? 97 : 64,
          }}
        />
      </XStack>
      <XStack
        style={{ flexGrow: 1, padding: 8, justifyContent: "space-between" }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Entypo
              name="spotify"
              paddingTop={1}
              size={iconSize}
              color={
                theme === "dark"
                  ? colorScheme.butter[50]
                  : colorScheme.boraami[700]
              }
            />
            <SizableText
              paddingLeft={4}
              paddingTop={size === "l" ? 2 : ''}
              size={size === "l" ? "$sm" : "$xs"}
              color="$info-card-text"
              fontFamily="$heading"
            >
              {title}
            </SizableText>
          </View>
          <SizableText
            color="$info-card-text"
            paddingTop={4}
            size={size === "l" ? "$xs" : "$2xs"}
            // values are correct for text size, although the subtitle appears a little smaller on the small card
          >
            {subtitle}
          </SizableText>
        </View>
        <View style={{ paddingTop: 2, paddingRight: 4 }}>
          <AntDesign
            name="close"
            paddingTop={size === "l" ? 1 : ''}
            size={closeSize}
            onPress={handleClose}
            color={
              theme === "dark"
                ? colorScheme.butter[50]
                : colorScheme.boraami[700]
            }
          />
        </View>
      </XStack>
    </Info>
  );
};
