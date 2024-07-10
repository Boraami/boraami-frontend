import React, { useEffect } from 'react';
import { Meta } from '@storybook/react-native';
import Toast from 'react-native-toast-message';
import { View, Text } from 'react-native';
import ShortToastConfig from './ShortToastConfig';

const ShortAlertsMeta: Meta = {
  title: 'Short Alerts with Toast',
};

export default ShortAlertsMeta;

export const SuccessAlert = () => {

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'This is a success message',
      props: { shade: 'subtle' },
    });

    const timer = setTimeout(() => {
      Toast.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Success Alert is shown</Text>
      <Toast config={ShortToastConfig} />
    </View>
  );
};


export const WarningAlert = () => {
  useEffect(() => {
    Toast.show({
      type: 'warning',
      text1: 'This is a warning message',
      props: { shade: 'outline' },
    });

    const timer = setTimeout(() => {
      Toast.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Warning Alert is shown</Text>
      <Toast config={ShortToastConfig} />
    </View>
  );
};

export const DefaultAlert = () => {
  useEffect(() => {
    Toast.show({
      type: 'default',
      text1: 'This is a default message',
      props: { shade: 'solid' },
    });

    const timer = setTimeout(() => {
      Toast.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Default Alert is shown</Text>
      <Toast config={ShortToastConfig} />
    </View>
  );
};
