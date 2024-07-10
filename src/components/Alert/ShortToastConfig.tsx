import React from 'react';
import Toast from 'react-native-toast-message';
import { ShortAlerts } from './ShortAlerts';

interface ToastProps {
  text1?: string;
  props?: any;
  shade?: 'solid' | 'subtle' | 'outline';
}

const ShortToastConfig = {
  success: ({ shade = 'solid', text1 = "", props }: ToastProps) => (
    <ShortAlerts shade={shade} name="success" alert={text1} {...props} />
  ),
  warning: ({ shade = 'solid', text1 = "", props }: ToastProps) => (
    <ShortAlerts shade={shade} name="warning" alert={text1} {...props} />
  ),
  default: ({ shade = 'subtle', text1 = "", props }: ToastProps) => (
    <ShortAlerts shade={shade} name="default" alert={text1} {...props} />
  ),
};

export default ShortToastConfig;
