import { config as configBase } from "@tamagui/config/v3";
import { OpenSansReg, OpenSansBold } from "./src/themes/fonts/fontOpenSans";
import { PoppinsBold, PoppinsMed, PoppinsReg } from "./src/themes/fonts/fontPoppins";
import { themes } from "./src/themes/theme";
import { tokens } from "./src/themes/tokens";
import { createTamagui } from "tamagui";

// import { tokens } from "@tamagui/themes";

export const config = createTamagui({
  ...configBase,
  tokens,
  themes,
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
