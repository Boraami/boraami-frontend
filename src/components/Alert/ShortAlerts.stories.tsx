import React, { useEffect } from "react";
import { Meta } from "@storybook/react-native";
import { ShortAlert } from "./ShortAlert";
import { toast } from "@backpackapp-io/react-native-toast";
import { Dimensions, View } from "react-native";

const ShortAlertMeta: Meta = {
  title: "Short Alerts with Toast",
  component: ShortAlert,
  args: {},
  decorators: [
    () => {
      const screenWidth = Dimensions.get("window").width;
      useEffect(() => {
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 7000,
          customToast: () => {
            return <ShortAlert name={"default"} shade={"outline"} alert={"Outline Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 7000,
          customToast: () => {
            return <ShortAlert name={"default"} shade={"subtle"} alert={"Subtle Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 6000,
          customToast: () => {
            return <ShortAlert name={"default"} shade={"solid"} alert={"Solid Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 8000,
          customToast: () => {
            return <ShortAlert name={"success"} shade={"outline"} alert={"Outline Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 9000,
          customToast: () => {
            return <ShortAlert name={"success"} shade={"subtle"} alert={"Subtle Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 7000,
          customToast: () => {
            return <ShortAlert name={"success"} shade={"solid"} alert={"Solid Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 7000,
          customToast: () => {
            return <ShortAlert name={"warning"} shade={"outline"} alert={"Outline Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 9000,
          customToast: () => {
            return <ShortAlert name={"warning"} shade={"subtle"} alert={"Subtle Alert"} />;
          },
        });
        toast("", {
          width: screenWidth,
          disableShadow: true,
          duration: 6000,
          customToast: () => {
            return <ShortAlert name={"warning"} shade={"solid"} alert={"Solid Alert"} />;
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
        ></View>
      );
    },
  ],
};

export default ShortAlertMeta;

export const LongAlerts = {};
