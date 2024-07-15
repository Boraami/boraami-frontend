import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react-native';
import { View, Text, StyleSheet } from 'react-native';
import { toast, Toasts, useToasterStore } from '@backpackapp-io/react-native-toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LongAlert } from "./LongAlert";
import { ToastProvider, useToast } from "./LongToastContext";

interface LongToastProps {
  shade?: "solid" | "subtle" | "outline";
  content?: string;
  alert?: string;
  index?: number;
}

const LongAlertMeta: Meta<typeof LongAlert> = {
  title: "Long Alert",
};

export default LongAlertMeta;

const ToastsM: React.FC = () => {
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
    <ToastsM />
  </ToastProvider>
)

const showCustomToast = ({ shade = 'solid', alert = 'Hello', content = 'success', index = 0 }: LongToastProps) => {
  toast('',
    {
    isSwipeable: true,
    customToast: () => (
      <View style={[styles.toastContainer, { top: 50 + (index * 10) }]}>
        <LongAlert shade={shade} alert={alert} content={content}/>
      </View>
    )
  });

};

export const PackageToasts = () => {
  const [toastIndex, setToastIndex] = useState(0);

  useEffect(() => {
    triggerMultipleToasts();
  }, []);

  const triggerMultipleToasts = () => {
    const toasts: LongToastProps[] = [
      { shade: 'solid', alert: 'We are going live in July!', content: 'We are happy to announce that we are going live on July 28th. Get ready!'},
      { shade: 'outline', alert: 'We are going live in July!', content: 'We are happy to announce that we are going live on July 28th. Get ready!' },
      { shade: 'subtle', alert: 'We are going live in July!', content: 'We are happy to announce that we are going live on July 28th. Get ready!' }
    ];

    toasts.forEach((toastConfig, index) => {
      showCustomToast({ ...toastConfig, index });
    });

    setToastIndex(toasts.length);
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <Text>Hellooooooo</Text>
        <Toasts />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});