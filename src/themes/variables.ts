/*export const colorScheme = {
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
    // Alert
    "alert-warning-outline": colorScheme.bwl[500],
    "alert-text": colorScheme.mono[800],
    "alert-close": colorScheme.boraami[900],
    "alert-warn-text": colorScheme.bwl[700],
    "alert-long-short-bg": colorScheme.boraami[700],
    "alert-long-border": colorScheme.boraami[400],
    "alert-long-subtle-bg": colorScheme.boraami[100],
    "alert-long-subtle-heart": colorScheme.boraami[700],
    "alert-long-outline": colorScheme.boraami[600],
    "alert-success-bg": colorScheme.singularity[400],
    "alert-success-outline": colorScheme.singularity[400],
    "alert-error-bg": colorScheme.ptd[200],
    "alert-error-icon": colorScheme.boraami[800],
    "alert-error-text": colorScheme.mono[800],
    "alert-error-subtle-bg": colorScheme.ptd[400],
    "alert-error-subtle-icon": colorScheme.ptd[500],
    "alert-error-subtle-text": colorScheme.ptd[900],
    "alert-error-outline": colorScheme.ptd[500],
    "alert-error-outline-text": colorScheme.ptd[900],

  };
  // note: we set up a single consistent base type to validate the rest
  
  type BaseTheme = typeof light;
  // the rest of the themes use BaseTheme
  
  const dark: BaseTheme = {
    // Alert
    "alert-warning-outline": colorScheme.bwl[500],
    "alert-text": colorScheme.butter[50],
    "alert-close": colorScheme.boraami[900],
    "alert-warn-text": colorScheme.bwl[500],
    "alert-long-short-bg": colorScheme.boraami[700],
    "alert-long-border": colorScheme.boraami[400],
    "alert-long-subtle-bg": colorScheme.mono[200],
    "alert-long-subtle-heart": colorScheme.boraami[700],
    "alert-long-outline": colorScheme.boraami[600],
    "alert-success-bg": colorScheme.singularity[400],
    "alert-success-outline": colorScheme.singularity[600],
    "alert-error-bg": colorScheme.ptd[500],
    "alert-error-icon": colorScheme.ptd[50],
    "alert-error-text": colorScheme.ptd[50],
    "alert-error-subtle-bg": colorScheme.ptd[200],
    "alert-error-subtle-icon": colorScheme.ptd[500],
    "alert-error-subtle-text": colorScheme.ptd[900],
    "alert-error-outline": colorScheme.ptd[500],
    "alert-error-outline-text": colorScheme.ptd[700],

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
  */