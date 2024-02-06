import { themes, tokens } from "@tamagui/themes";
import { createFont, createTamagui } from "tamagui";

const headingSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 30,
  "2xl": 36,
  "3xl": 48,
  "4xl": 60,
  "5xl": 64,
  "6xl": 72,
  "7xl": 76,
  "8xl": 80,
  "9xl": 88,
  true: 24,
};
const paragraphSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 24,
  "4xl": 30,
  "5xl": 36,
  "6xl": 48,
  "7xl": 60,
  "8xl": 72,
  "9xl": 96,
  "10xl": 128,
  true: 18,
};
const PoppinsLineHeights = {
  sm: 12.5,
  md: 15,
  true: 12.5,
};
const PoppinsLetterSpacing = {
  1: 0,
  2: -0.5,
  true: 0,
};

const PoppinsReg = createFont({
  family: "Poppins_400Regular",
  size: headingSizes,
  lineHeight: PoppinsLineHeights,
  weight: {
    4: "400",
    true: "400",
  },
  letterSpacing: PoppinsLetterSpacing,
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    400: { normal: "Poppins_400Regular" },
  },
});
const PoppinsMed = createFont({
  family: "Poppins_500Medium",
  size: headingSizes,
  lineHeight: PoppinsLineHeights,
  weight: {
    5: "500",
    true: "500",
  },
  letterSpacing: {
    1: 0,
    2: -0.5,
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    500: { normal: "Poppins_500Medium" },
  },
});
const PoppinsBold = createFont({
  family: "Poppins_700Bold",
  size: headingSizes,
  lineHeight: {
    1: 15,
    true: 15,
  },
  weight: {
    7: "700",
    true: "700",
  },
  letterSpacing: {
    1: 0,
    2: -0.5,
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: "Poppins_700Bold" },
  },
});
const OpenSansReg = createFont({
  family: "OpenSans_400Regular",
  size: paragraphSizes,
  lineHeight: {
    1: 15,
    true: 15,
  },
  weight: {
    4: "400",
    true: "400",
  },
  letterSpacing: {
    1: 0,
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    400: { normal: "OpenSans_400Regular", italic: "OpenSans_400Regular_Italic" },
  },
});
const OpenSansBold = createFont({
  family: "OpenSans_700Bold",
  size: paragraphSizes,
  lineHeight: {
    1: 15,
    true: 15,
  },
  weight: {
    7: "700",
    true: "700",
  },
  letterSpacing: {
    1: 0,
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: "OpenSans_700Bold", italic: 'OpenSans_700Bold_Italic' },
  },
});
export const config = createTamagui({
  themes,
  tokens,
  fonts: {
    PoppinsReg,
    PoppinsMed,
    heading: PoppinsBold,
    body: OpenSansReg,
    OpenSansBold,
  },
});

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
