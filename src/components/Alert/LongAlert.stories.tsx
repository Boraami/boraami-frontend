import React, { useEffect } from "react";
import { Meta } from "@storybook/react-native";
import { LongAlert } from "./LongAlert";
import { Text, View } from 'tamagui';
import Toast from "react-native-toast-message";
import LongToastConfig from "./LongToastConfig";

const LongAlertMeta: Meta<typeof LongAlert> = {
  title: "Long Alert",
};

export default LongAlertMeta;

export const SolidLongAlert = () => {
  useEffect(() => {
    Toast.show({
      type: 'custom',
      text1: 'We are going live in July!',
      text2: 'We are happy to announce that we are going live on July 28th. Get ready!',
      props: { shade: 'solid' },
    });

    const timer = setTimeout(() => {
      Toast.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Solid Alert is shown</Text>
      <Toast config={LongToastConfig} />
    </View>
  );
};

export const SubtleLongAlert = () => {
  useEffect(() => {
    Toast.show({
      type: 'custom',
      text1: 'We are going live in July!',
      text2: 'We are happy to announce that we are going live on July 28th. Get ready!',
      props: { shade: 'subtle' },
    });

    const timer = setTimeout(() => {
      Toast.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Subtle Alert is shown</Text>
      <Toast config={LongToastConfig} />
    </View>
  );
};
export const OutlineLongAlert = () => {
  useEffect(() => {
    Toast.show({
      type: 'custom',
      text1: 'We are going live in July!',
      text2: 'We are happy to announce that we are going live on July 28th. Get ready!',
      props: { shade: 'outline' },
    });

    const timer = setTimeout(() => {
      Toast.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Oultine Alert is shown</Text>
      <Toast config={LongToastConfig} />
    </View>
  );
};
