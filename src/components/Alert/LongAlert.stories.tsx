import React, { useEffect } from "react";
import { Meta } from "@storybook/react-native";
import { LongAlert } from "./LongAlert";
import { toast } from "@backpackapp-io/react-native-toast";
import { Dimensions, View } from "react-native";

const LongAlertMeta: Meta<typeof LongAlert> = {
  title: "Long Alert",
  component: LongAlert,
  args: {},
  decorators: [
    (Story) => {
      const screenWidth = Dimensions.get("window").width;
      useEffect(() => {
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 7000,
          customToast: () => {
            return (
              <LongAlert
                shade={"outline"}
                alert={"Outline Alert"}
                content={"This is outline alert bish"}
              />
            );
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 5000,
          position: 2,
          customToast: () => {
            return (
              <LongAlert
                shade={"subtle"}
                alert={"Subtle Alert"}
                content={"Whatever needs to be alerted im sick okie"}
              />
            );
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 6000,
          customToast: () => {
            return (
              <LongAlert
                shade={"solid"}
                alert={"Solid Alert"}
                content={"OH MY GOD IT WORKS FINALLY!!!"}
              />
            );
          },
        });
      }, []);
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Story />
        </View>
      );
    },
  ],
};

export default LongAlertMeta;

export const LongAlerts = {
  args: {
    shade: "solid",
    alert: "Solid Alert",
    content: "OH MY GOD IT WORKS FINALLY!!!",
  },
};
