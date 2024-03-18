import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { styled, View, XStack, SizableText, Image } from "tamagui";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colorScheme } from "../../themes/theme";

type CardProps = {
  title: string;
  subtitle: string;
  uri: string;
  size?: "lg" | "sm" 
};

// interface SizeProps extends CardProps { 
//   // [key: string]: {
//     iconSize: number;
//     closeSize: number;
//     cardHeight: number;
//   // };
// };

type CardSize = {
  iconSize: number;
  closeSize: number;
  cardHeight: number;
}

interface SizeProps {
  lg: CardSize;
  sm: CardSize;
}


const cardSizes: SizeProps = {
  sm: {
    iconSize: 14,
    closeSize: 12,
    cardHeight: 76,
  },
  lg: {
    iconSize: 20,
    closeSize: 16,
    cardHeight: 110,
  },
};

const StyledCard = styled(View, {
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


export const InfoCard = ({ title, subtitle, uri, size }: CardProps) => {
  const theme = useColorScheme();
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  if (close || ! size) {
    return null;
  }

  return (
    <StyledCard style={{ height: cardSizes[size].cardHeight }}>
      <XStack style={{ padding: 4 }}>
        <Image
          borderRadius={4}
          borderWidth={1}
          borderColor="$mono.50"
          source={{
            uri: uri,
            width: size === "lg" ? 115 : 64,
            height: size === "lg" ? 97 : 64,
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
              size={cardSizes[size].iconSize}
              color={
                theme === "dark"
                  ? colorScheme.butter[50]
                  : colorScheme.boraami[700]
              }
            />
            <SizableText
              paddingLeft={4}
              paddingTop={size === "lg" ? 2 : ''}
              size={size === "lg" ? "$sm" : "$xs"}
              color="$info-card-text"
              fontFamily="$heading"
            >
              {title}
            </SizableText>
          </View>
          <SizableText
            color="$info-card-text"
            paddingTop={4}
            size={size === "lg" ? "$xs" : "$2xs"}
          >
            {subtitle}
          </SizableText>
        </View>
        <View style={{ paddingTop: 2, paddingRight: 4 }}>
          <AntDesign
            name="close"
            paddingTop={size === "lg" ? 1 : ''}
            size={cardSizes[size].closeSize}
            onPress={handleClose}
            color={
              theme === "dark"
                ? colorScheme.butter[50]
                : colorScheme.boraami[700]
            }
          />
        </View>
      </XStack>
    </StyledCard>
  );
};
