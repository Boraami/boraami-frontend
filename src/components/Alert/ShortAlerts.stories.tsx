import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react-native';
import { View, Text, StyleSheet } from 'react-native';
import { ToastProvider, useToast } from './ShortToastContext';
import { toast, Toasts, useToasterStore } from '@backpackapp-io/react-native-toast';
import { ShortAlerts } from './ShortAlerts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface ShortToastProps {
  shade?: "solid" | "subtle" | "outline";
  variant?: "default" | "success" | "warning";
  alert?: string;
  index?: number;
}

const ShortAlertsMeta: Meta = {
  title: 'Short Alerts with Toast',
};

export default ShortAlertsMeta;

const ToastsM: React.FC = () => {
  const { showToast } = useToast();

  useEffect(() => {
    const intervals = [
      setTimeout(() => showToast('Success!', 'success'), 2000),
      setTimeout(() => showToast('Warning!', 'warning'), 3000),
      setTimeout(() => showToast('hi', 'warning', 'subtle'), 3000),
      setTimeout(() => showToast('message', 'success', 'outline'), 4000),
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

const showCustomToast = ({ shade = 'solid', variant = 'success', alert = 'Hello', index = 0 }: ShortToastProps) => {
  toast('',
    {
    isSwipeable: true,
    customToast: () => (
      <View style={[styles.toastContainer, { top: 50 + (index * 10) }]}>
        <ShortAlerts shade={shade} name={variant} alert={alert} />
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
    const toasts: ShortToastProps[] = [
      { shade: 'solid', variant: 'default', alert: 'First Toast' },
      { shade: 'outline', variant: 'success', alert: 'Second Toast' },
      { shade: 'subtle', variant: 'warning', alert: 'Third Toast' }
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