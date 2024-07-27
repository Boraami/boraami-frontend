import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { Meta } from "@storybook/react-native";
import InfoCard from "./InfoCard";
import { toast } from "@backpackapp-io/react-native-toast";
import { View } from "tamagui";

const InfoCardMeta: Meta<typeof InfoCard> = {
  title: "InfoCard",
  component: InfoCard,
  argTypes: {},
  args: {
    title: "Playlist no. 6",
    subtitle: "btstatsreminder2",
    uri: require("../../assets/Cards/post-image.png"),
    size: "lg",
  },

  decorators: [
    (Story) => {
      const screenWidth = Dimensions.get("window").width;

      useEffect(() => {
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 9000,
          customToast: () => {
            return (
              <InfoCard
                size="sm"
                title="Playlist no. 6"
                subtitle="btstatsreminder2"
                uri={require("../../assets/Cards/post-image.png")}
              />
            );
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 10000,
          customToast: () => {
            return (
              <InfoCard
                size="lg"
                title="Playlist no. 6"
                subtitle="btstatsreminder2"
                uri={require("../../assets/Cards/post-image.png")}
              />
            );
          },
        });
      }, []);
      return (
        <View flex={1} justifyContent="center" alignItems="center" gap={10}>
          <Story />
          <InfoCard
            size="sm"
            title="Playlist no. 6"
            subtitle="btstatsreminder2"
            uri={require("../../assets/Cards/post-image.png")}
          />
        </View>
      );
    },
  ],
};

export default InfoCardMeta;

export const ToastCard = {};
