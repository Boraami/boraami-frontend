import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import LongCustomToast from './LongCustomToast';

interface ToastProviderProps {
  children: ReactNode;
}

interface Toast {
  id: number;
  alert: string;
  content: string;
  shade: "solid" | "subtle" | "outline";
}

interface ToastContextType {
  showToast: (alert: string, content: string, shade?: "solid" | "subtle" | "outline") => void;
}

const LongToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(LongToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((alert: string, content: string, shade: "solid" | "subtle" | "outline" = "solid") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, alert, content, shade }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <LongToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map((toast, index) => (
        <LongCustomToast
          key={toast.id}
          alert={toast.alert}
          content={toast.content}
          shade={toast.shade}
          index={index}
        />
      ))}
    </LongToastContext.Provider>
  );
};
