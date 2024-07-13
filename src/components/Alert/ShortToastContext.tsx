import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import ShortCustomToast from './ShortCustomToast';

interface ToastProviderProps {
  children: ReactNode;
}

interface Toast {
  id: number;
  message: string;
  variant: "default" | "success" | "warning";
  shade: "solid" | "subtle" | "outline";
}

interface ToastContextType {
  showToast: (message: string, variant?: "default" | "success" | "warning", shade?: "solid" | "subtle" | "outline") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, variant: "default" | "success" | "warning" = "default", shade: "solid" | "subtle" | "outline" = "solid") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, variant, shade }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map((toast, index) => (
        <ShortCustomToast
          key={toast.id}
          text1={toast.message}
          variant={toast.variant}
          shade={toast.shade}
          index={index}
        />
      ))}
    </ToastContext.Provider>
  );
};
