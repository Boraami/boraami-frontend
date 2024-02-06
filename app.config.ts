import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "boraami-frontend",
  slug: "boraami-frontend",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  scheme: "boraami-frontend",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK === "1",
  },
  plugins: ["expo-router", "expo-font"],
});
