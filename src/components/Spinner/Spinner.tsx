import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  useColorScheme,
  Animated,
  Easing,
} from "react-native";

import Dark from '../../assets/loader/Dark_loader.svg';
import Light from '../../assets/loader/Light_loader.svg';

interface SpinnerProps {
  size: "xs" | "sm" | "md" | "lg";
}

type SpinnerSizesProps = {
  [key: string]: {
    width: number;
    height: number;
  };
};

const spinnerSizes: SpinnerSizesProps = {
  xs: {
    width: 12,
    height: 12,
  },
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 20,
    height: 20,
  },
  lg: {
    width: 28,
    height: 28,
  },
};

type ThemeType = 'dark' | 'light';

const getSizeProps = (size: SpinnerProps["size"]) => ({
  width: spinnerSizes[size].width,
  height: spinnerSizes[size].height,
});

const SpinnerLoading: React.FC<SpinnerProps> = ({ size }) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";

  const images: Record<ThemeType, React.FC<{ width: number, height: number }>> = {
    dark: (props) => <Dark {...props} />,
    light: (props) => <Light {...props} />,
  };

  const IconComponent = isDarkTheme ? images.dark : images.light;
  const rotateValueHolder = new Animated.Value(0);

  const StartImageRotation = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => StartImageRotation());
  };
  useEffect(() => {
    StartImageRotation();
  }, [theme]);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const sizeProps = getSizeProps(size);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Animated.View
        style={{
          width: sizeProps.width,
          height: sizeProps.height,
          transform: [{ rotate: RotateData }],
        }}>
          <IconComponent width={sizeProps.width} height={sizeProps.height} />
        </Animated.View>
    </View>
  );
};

export const SpinnerComp = (props: SpinnerProps) => {
  const { size } = props;

  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 0, justifyContent: "center", alignItems: "center" }}>
        <SpinnerLoading size={size} />
      </View>
    </SafeAreaView>
  );
};
