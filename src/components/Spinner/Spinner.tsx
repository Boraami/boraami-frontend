import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  useColorScheme,
  Animated,
  Easing,
  ImageSourcePropType,
} from "react-native";

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

const SpinnerLoading: React.FC<SpinnerProps> = ({ size }) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";

  const images: Record<string, Record<string, ImageSourcePropType>> = {
    dark: {
      xs: require("../../assets/loader/dark_xs.png"),
      sm: require("../../assets/loader/dark_small.png"),
      md: require("../../assets/loader/dark_medium.png"),
      lg: require("../../assets/loader/dark_large.png"),
    },
    light: {
      xs: require("../../assets/loader/light_xs.png"),
      sm: require("../../assets/loader/light_small.png"),
      md: require("../../assets/loader/light_medium.png"),
      lg: require("../../assets/loader/light_large.png"),
    },
  };

  const iconTheme = isDarkTheme ? images.dark[size] : images.light[size];
  const rotateValueHolder = new Animated.Value(0);

  const StartImageRotation = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => StartImageRotation());
  };
  useEffect(() => {
    StartImageRotation();
  }, []);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Animated.Image
        style={{
          width: spinnerSizes[size].width,
          height: spinnerSizes[size].height,
          transform: [{ rotate: RotateData }],
        }}
        source={iconTheme}
      />
    </View>
  );
};

export const SpinnerComp = (props: SpinnerProps) => {
  const { size } = props;

  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }}>
        <SpinnerLoading size={size} />
      </View>
    </SafeAreaView>
  );
};
