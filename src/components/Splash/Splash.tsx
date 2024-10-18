import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LogoSvg from '../../../assets/boraami-primary-logo.svg';
import BackgroundSvg from '../../../assets/bg-dark.svg';
import LoaderSvg from '../../../assets/loader.svg';

interface SplashScreenComponentProps {
  onFinish: () => void; // Function that returns void
}

const SplashScreenComponent: React.FC<SplashScreenComponentProps> = ({ onFinish }) => {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const preventHide = async () => {
      await SplashScreen.preventAutoHideAsync(); // Prevent system auto-hide
    };
    preventHide();

    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000, // Duration for one spin
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    const hideSplashTimeout = setTimeout(async () => {
      await SplashScreen.hideAsync();
      onFinish(); // Callback to navigate to the next screen
    }, 3000);
    return () => clearTimeout(hideSplashTimeout);
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{flex: 1}}>
<BackgroundSvg height={"100%"} width={"100%"} style={styles.background}/>
      <View style={styles.logoContainer}>
        <LogoSvg height={218} width={190} style={styles.logo} />
        <Animated.View style={[styles.loader, { transform: [{ rotate: spin }], top: 48 }]}>
          <LoaderSvg height={30} width={30} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    position: 'absolute'
  },
  logoContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 218,
    resizeMode: 'stretch',
  },
  loader: {
    width: 30,  // Adjust the size of the loader
    height: 30,
  },
});

export default SplashScreenComponent;
