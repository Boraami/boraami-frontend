import { createFont } from "tamagui";
import { paragraphSizes, paraBtnLineHeights } from "./constants";

export const OpenSansReg = createFont({
  family: "OpenSans_400Regular",
  size: paragraphSizes,
  lineHeight: paraBtnLineHeights,
  weight: {
    true: "400",
  },
  letterSpacing: {
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    400: { normal: "OpenSans_400Regular", italic: "OpenSans_400Regular_Italic" },
  },
});
export const OpenSansBold = createFont({
  family: "OpenSans_700Bold",
  size: paragraphSizes,
  lineHeight: {
    true: 40,
  },
  weight: {
    7: "700",
    true: "700",
  },
  letterSpacing: {
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: "OpenSans_700Bold", italic: "OpenSans_700Bold_Italic" },
  },
});
