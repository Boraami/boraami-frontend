export const colorScheme = {
  boraami: {
    50: "#F7F3FF",
    100: "#F0E8FF",
    200: "#DECCFF",
    300: "#C2A0FF",
    400: "#B48BFF",
    500: "#8F66D6",
    600: "#744FB5",
    700: "#5F3D9C",
    800: "#341866",
    900: "#250E4D",
  },
  bwl: {
    50: "#FDF2F8",
    100: "#FCE7F3",
    200: "#FBCFE8",
    300: "#F9A8D4",
    400: "#F472B6",
    500: "#EC4899",
    600: "#DB2777",
    700: "#BE185D",
    800: "#9D174D",
    900: "#831843",
  },
  serendipity: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
  },
  butter: {
    50: "#FFFEF8",
    100: "#FFFAE4",
    200: "#FEF3B5",
    300: "#FDE668",
    400: "#FDE047",
    500: "#E1BE3E",
    600: "#CBA235",
    700: "#BA8D2F",
    800: "#956022",
    900: "#844B1C",
  },
  singularity: {
    50: "#F7FBFA",
    100: "#E2F1ED",
    200: "#D5EBE6",
    300: "#55AF99",
    400: "#2F9D83",
    500: "#27846E",
    600: "#216F5D",
    700: "#1D6050",
    800: "#133F34",
    900: "#0E2F28",
  },
  ptd: {
    50: "#FFFBF7",
    100: "#FEEFE2",
    200: "#FEDEC4",
    300: "#FCA65F",
    400: "#FB923C",
    500: "#E07D34",
    600: "#C96B2E",
    700: "#B95D29",
    800: "#94401E",
    900: "#843319",
  },
  mono: {
    50: "#F4F3F5",
    100: "#E9E5F0",
    200: "#D7D1E2",
    300: "#C9C3D4",
    400: "#9E96AD",
    500: "#766E85",
    600: "#4D455C",
    700: "#3F374E",
    800: "#322A41",
    900: "#241C33",
  },
};

const light = {
  // Text
  "text-primary": colorScheme.mono[800],
  "text-secondary": colorScheme.boraami[500],
  "text-brand": colorScheme.boraami[700],
  "text-success": colorScheme.singularity[500],
  "text-warning": colorScheme.ptd[600],
  "text-error": colorScheme.bwl[700],
  "text-invert": colorScheme.butter[50],
  "text-inactive": colorScheme.mono[400],

  // Background
  "bg-neutral-subtle": colorScheme.mono[50],
  "bg-neutral-reg": colorScheme.mono[400],
  "bg-neutral-inactive": colorScheme.butter[50],
  "bg-neutral-strong": colorScheme.boraami[900],
  "bg-brand-subtle": colorScheme.boraami[200],
  "bg-brand-subtle-light": colorScheme.boraami[100],
  "bg-brand-neutral": colorScheme.boraami[500],
  "bg-brand-strong": colorScheme.boraami[700],
  "bg-success-subtle": colorScheme.singularity[200],
  "bg-success-strong": colorScheme.singularity[400],
  "bg-warning-subtle": colorScheme.ptd[200],
  "bg-warning-strong": colorScheme.ptd[400],
  "bg-error-subtle": colorScheme.bwl[200],
  "bg-error-strong": colorScheme.bwl[700],

  // Background/Hover
  "bg-warning-subtle-hover": colorScheme.ptd[400],
  "bg-warning-strong-hover": colorScheme.ptd[600],
  "bg-error-subtle-hover": colorScheme.bwl[400],
  "bg-error-strong-hover": colorScheme.bwl[900],
  "bg-subtle-hover": colorScheme.mono[200],
  "bg-brand-subtle-hover": colorScheme.serendipity[200],
  "bg-brand-strong-hover": colorScheme.serendipity[500],
  "bg-success-subtle-hover": colorScheme.singularity[300],
  "bg-success-strong-hover": colorScheme.singularity[600],

  // Border
  "border-neutral": colorScheme.mono[400],
  "border-brand-subtle": colorScheme.boraami[400],
  "border-brand-strong": colorScheme.boraami[600],
  "border-success-subtle": colorScheme.singularity[200],
  "border-success-strong": colorScheme.singularity[600],
  "border-warning-subtle": colorScheme.ptd[400],
  "border-warning-strong": colorScheme.ptd[800],
  "border-error-subtle": colorScheme.bwl[500],
  "border-error-strong": colorScheme.bwl[800],
};
// note: we set up a single consistent base type to validate the rest

type BaseTheme = typeof light;
// the rest of the themes use BaseTheme

const dark: BaseTheme = {
  // Text
  "text-primary": colorScheme.mono[100],
  "text-secondary": colorScheme.boraami[200],
  "text-brand": colorScheme.boraami[300],
  "text-success": colorScheme.singularity[200],
  "text-warning": colorScheme.ptd[200],
  "text-error": colorScheme.bwl[400],
  "text-invert": colorScheme.mono[900],
  "text-inactive": colorScheme.mono[400],

  // Background
  "bg-neutral-subtle": colorScheme.boraami[800],
  "bg-neutral-reg": colorScheme.mono[400],
  "bg-neutral-inactive": colorScheme.mono[700],
  "bg-neutral-strong": colorScheme.boraami[800],
  "bg-brand-subtle": colorScheme.boraami[900],
  "bg-brand-subtle-light": colorScheme.boraami[200],
  "bg-brand-neutral": colorScheme.boraami[300],
  "bg-brand-strong": colorScheme.boraami[600],
  "bg-success-subtle": colorScheme.singularity[400],
  "bg-success-strong": colorScheme.singularity[200],
  "bg-warning-subtle": colorScheme.ptd[400],
  "bg-warning-strong": colorScheme.ptd[200],
  "bg-error-subtle": colorScheme.bwl[400],
  "bg-error-strong": colorScheme.bwl[600],

  // Background/Hover
  "bg-warning-subtle-hover": colorScheme.ptd[600],
  "bg-warning-strong-hover": colorScheme.ptd[400],
  "bg-error-subtle-hover": colorScheme.bwl[900],
  "bg-error-strong-hover": colorScheme.bwl[400],
  "bg-subtle-hover": colorScheme.boraami[300],
  "bg-brand-subtle-hover": colorScheme.serendipity[500],
  "bg-brand-strong-hover": colorScheme.serendipity[200],
  "bg-success-subtle-hover": colorScheme.singularity[600],
  "bg-success-strong-hover": colorScheme.singularity[300],

  // Border
  "border-neutral": colorScheme.mono[400],
  "border-brand-subtle": colorScheme.boraami[800],
  "border-brand-strong": colorScheme.boraami[400],
  "border-success-subtle": colorScheme.singularity[600],
  "border-success-strong": colorScheme.singularity[200],
  "border-warning-subtle": colorScheme.ptd[700],
  "border-warning-strong": colorScheme.ptd[300],
  "border-error-subtle": colorScheme.bwl[400],
  "border-error-strong": colorScheme.bwl[600],
};

const allThemes = {
  dark,
  light,
};
// 2. then get the name type

type ThemeName = keyof typeof allThemes;
// 3. then, create a Themes type that explicitly maps ThemeName => BaseTheme

type Themes = {
  [key in ThemeName]: BaseTheme;
};
// 4. finally, export it with the stricter type

export const themes: Themes = allThemes;
