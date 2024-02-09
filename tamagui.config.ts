import { themes, tokens } from "@tamagui/themes";
import { createTamagui } from "tamagui";
import { OpenSansReg, OpenSansBold } from "./src/themes/fonts/fontOpenSans";
import { PoppinsBold, PoppinsMed, PoppinsReg } from "./src/themes/fonts/fontPoppins";

export const config = createTamagui({
  themes,
  tokens,
  fonts: {
    heading: PoppinsBold,
    body: OpenSansReg,
    btn: PoppinsMed,
    PoppinsReg,
    OpenSansBold,
  },
});

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
