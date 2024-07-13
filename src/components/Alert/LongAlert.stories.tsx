import React, { useEffect } from "react";
import { Meta } from "@storybook/react-native";
import { LongAlert } from "./LongAlert";
import { Text, View } from 'tamagui';
import { ToastProvider, useToast } from "./LongToastContext";

const LongAlertMeta: Meta<typeof LongAlert> = {
  title: "Long Alert",
};

export default LongAlertMeta;

const Toasts: React.FC = () => {
  const { showToast } = useToast();

  useEffect(() => {
    const intervals = [
      setTimeout(() => showToast('We are going live in July!', 'We are happy to announce that we are going live on July 28th. Get ready!', 'outline'), 1000),
      setTimeout(() => showToast('We are going live in July!', 'We are happy to announce that we are going live on July 28th. Get ready!', 'solid'), 3000),
      setTimeout(() => showToast('We are going live in July!', 'We are happy to announce that we are going live on July 28th. Get ready!', 'subtle'), 5000),
    ];

    return () => {
      intervals.forEach(clearTimeout);
    };
  }, [showToast]);

  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
};

export const MultipleToasts: React.FC = () => (
  <ToastProvider>
    <Toasts />
  </ToastProvider>
)