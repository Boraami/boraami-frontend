import React, { useEffect } from 'react';
import { Meta } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { ToastProvider, useToast } from './ShortToastContext';

const ShortAlertsMeta: Meta = {
  title: 'Short Alerts with Toast',
};

export default ShortAlertsMeta;

const Toasts: React.FC = () => {
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
    <Toasts />
  </ToastProvider>
)