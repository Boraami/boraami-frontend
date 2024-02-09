import { createTokens } from "tamagui";
import { tokens as tamaguiTokens } from "@tamagui/themes";

const radius = {
  "r-sharp": 0,
  true: 0,
  "r-subtle": 4,
  "r-strong": 12,
  "r-full": 64,
};

const spacing = {
  "s-3xs": 2,
  "s-2xs": 4,
  "s-xs": 8,
  "s-sm": 12,
  "s-md": 16,
  true: 16,
  "s-lg": 20,
  "s-xl": 24,
  "s-2xl": 32,
  "s-3xl": 64,
};

export const tokens = createTokens({
  ...tamaguiTokens,
  radius,
  spacing,
});
