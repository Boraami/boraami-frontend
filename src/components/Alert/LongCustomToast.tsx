import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { LongAlert } from './LongAlert';

interface LongCustomToastProps {
  shade?: "solid" | "subtle" | "outline";
  alert: string;
  content: string;
  index: number;
}

const LongCustomToast = ({ shade='solid', alert, content, index }: LongCustomToastProps) => {
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
    <Animated.View style={[styles.toast, { opacity, top: 50 + index * 100 }]}>
      <LongAlert shade={shade} alert={alert} content={content} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default LongCustomToast;
