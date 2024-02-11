import { createFont } from "tamagui";
import {
  headingSizes,
  headingLineHeights,
  headingsLetterSpacing,
  paragraphSizes,
  paraBtnLineHeights,
} from "./constants";

export const PoppinsReg = createFont({
  family: "Poppins_400Regular",
  size: headingSizes,
  lineHeight: headingLineHeights,
  letterSpacing: headingsLetterSpacing,
  weight: {
    true: "400",
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    400: { normal: "Poppins_400Regular", italic: "Poppins_400Regular_Italic" },
  },
});
export const PoppinsMed = createFont({
  family: "Poppins_500Medium",
  size: paragraphSizes,
  lineHeight: paraBtnLineHeights,
  weight: {
    true: "500",
  },
  letterSpacing: {
    true: 0,
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    500: { normal: "Poppins_500Medium", italic: "Poppins_500Medium_Italic" },
  },
});
export const PoppinsBold = createFont({
  family: "Poppins_700Bold",
  size: headingSizes,
  lineHeight: headingLineHeights,
  weight: {
    true: "700",
  },
  letterSpacing: headingsLetterSpacing,
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: "Poppins_700Bold", italic: "Poppins_700Bold_Italic" },
  },
});
