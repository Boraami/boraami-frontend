import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { ShortAlerts } from './ShortAlerts';

Dimensions.get('window');

interface ShortToastProps {
  shade?: "solid" | "subtle" | "outline";
  variant: "default" | "success" | "warning";
  text1?: string;
  props?: any;
  index?: number;
}

const ShortCustomToast = ({ shade = "solid", variant = "default", text1 = "", index = 0 }: ShortToastProps) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, []);

  return (
    <Animated.View style={[styles.toast, { opacity, top: 50 + (index * 60) }]}>
      <ShortAlerts shade={shade} name={variant} alert={text1} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default ShortCustomToast;
