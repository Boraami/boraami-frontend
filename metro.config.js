// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

if (process.env.STORYBOOK === "1") {
  config.resolver.resolverMainFields.unshift("sbmodern");
}

module.exports = config;
