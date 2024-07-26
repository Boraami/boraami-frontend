// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// if (process.env.STORYBOOK === "1") {
// } not needed cz we need to do it without condition - https://github.com/storybookjs/react-native/issues/469
config.resolver.resolverMainFields.unshift("sbmodern");

config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts.push('svg');
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
// Enable Tamagui
const { withTamagui } = require("@tamagui/metro-plugin");
module.exports = withTamagui(config, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  outputCSS: "./tamagui.css",
});
