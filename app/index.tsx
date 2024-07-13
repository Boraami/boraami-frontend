import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ToastProvider, useToast } from '../src/components/Alert/LongToastContext';

const App: React.FC = () => {
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

const MainApp: React.FC = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

export default MainApp;
