/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-backgrounds/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/Alert/Default.stories.tsx": require("../src/components/Alert/Default.stories.tsx"),
    "./src/components/Alert/Error.stories.tsx": require("../src/components/Alert/Error.stories.tsx"),
    "./src/components/Alert/Long.stories.tsx": require("../src/components/Alert/Long.stories.tsx"),
    "./src/components/Alert/Success.stories.tsx": require("../src/components/Alert/Success.stories.tsx"),
    "./src/components/Alert/WarningDialog.stories.tsx": require("../src/components/Alert/WarningDialog.stories.tsx"),
  };
};

configure(getStories, module, false);
