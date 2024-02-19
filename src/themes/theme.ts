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
  //Notes: default-alert-left-border, error-alert-fill, hover-radio-fill
  // ALert Component
  "default-alert-solid-fill" : colorScheme.boraami[700],
  "default-alert-left-border" : colorScheme.boraami[400],
  "default-alert-subtle-fill" : colorScheme.boraami[100],
  "default-alert-outline" : colorScheme.boraami[700],
  "success-alert-solid-fill" : colorScheme.singularity[500],
  "success-alert-subtle-fill" : colorScheme.singularity[200],
  "success-alert-outline" : colorScheme.singularity[500],
  "warning-alert-solid-fill" : colorScheme.ptd[400],
  "warning-alert-subtle-fill" : colorScheme.ptd[200],
  "warning-alert-outline" : colorScheme.ptd[500],
  "error-alert-outline" : colorScheme.bwl[700],

  // Button Component
  "primary-default-btn" : colorScheme.boraami[700],
  "primary-disabled-btn" : colorScheme.mono[400],
  "primary-hover-btn-fill" : colorScheme.boraami[700],
  "primary-hover-btn-border" : colorScheme.serendipity[500],
  "primary-focus-btn-fill" : colorScheme.boraami[700],
  "primary-focus-btn-border" : colorScheme.boraami[400],
  "secondary-default-btn-border" : colorScheme.boraami[500],
  "secondary-disabled-btn-border" : colorScheme.mono[400],
  "secondary-hover-btn-border" : colorScheme.serendipity[500],
  "secondary-focus-btn-border" : colorScheme.boraami[500],
  "tertiary-default-text" : colorScheme.boraami[500],
  "tertiary-disabled-text" : colorScheme.bwl[700],
  "tertiary-hover-text" : colorScheme.boraami[500],
  "tertiary-hover-border" : colorScheme.serendipity[500],
  "tertiary-focus-text" : colorScheme.boraami[500],
  "tertiary-focus-border" : colorScheme.boraami[500],

  // Checkbox Component
  "default-fill" : colorScheme.boraami[700],
  "default-border" : colorScheme.boraami[700],
  "default-check-icon" : colorScheme.boraami[50],
  "focus-fill" : colorScheme.boraami[700],
  "focus-border" : colorScheme.boraami[400],
  "focus-check-box" : colorScheme.boraami[50],
  "disabled-fill" : colorScheme.boraami[700],
  "disabled-border" : colorScheme.boraami[700],
  "disabled-check-box" : colorScheme.boraami[50],
  "hover-fill" : colorScheme.boraami[700],
  "hover-border" : colorScheme.serendipity[500],
  "hover-check-box" : colorScheme.boraami[50],

  // Card Component
  "info-card-fill" : colorScheme.boraami[100],
  "info-card-top-border" : colorScheme.boraami[700],
  "info-card-music-icon" : colorScheme.boraami[700],
  "info-card-text" : colorScheme.boraami[700],
  "achievement-card-fill" : colorScheme.boraami[100],
  "achievement-card-text" : colorScheme.boraami[700],

  // Tags Component
  "info-solid-fill" : colorScheme.serendipity[600],
  "info-outline-border" : colorScheme.serendipity[200],
  "info-solid-text" : colorScheme.boraami[50],
  "info-outline-text" : colorScheme.serendipity[600],
  "success-solid-fill" : colorScheme.singularity[500],
  "success-outline-border" : colorScheme.singularity[200],
  "success-solid-text" : colorScheme.boraami[50],
  "success-outline-text" : colorScheme.singularity[500],
  "error-solid-fill" : colorScheme.bwl[600],
  "error-outline-border" : colorScheme.bwl[200],
  "error-solid-text" : colorScheme.boraami[50],
  "error-outline-text" : colorScheme.bwl[600],
  "warning-solid-fill" : colorScheme.ptd[400],
  "warning-outline-border" : colorScheme.ptd[200],
  "warning-solid-text" : colorScheme.mono[800],
  "warning-outline-text" : colorScheme.ptd[700],
  "default-solid-fill" : colorScheme.boraami[600],
  "default-outline-border" : colorScheme.boraami[200],
  "default-solid-text" : colorScheme.boraami[50],
  "default-outline-text" : colorScheme.boraami[600],
  "tags-solid-fill" : colorScheme.boraami[600],
  "tags-outline-border" : colorScheme.boraami[200],
  "tags-solid-text" : colorScheme.boraami[50],
  "tags-outline-text" : colorScheme.boraami[600],

  // Input Component 
  
  //RadioButton Component
  "default-radio-fill" : colorScheme.boraami[700],
  "default-radio-border" : colorScheme.boraami[700],
  "default-radio-text" : colorScheme.boraami[900],
  "focus-radio-fill" : colorScheme.boraami[700],
  "focus-radio-border" : colorScheme.boraami[400],
  "focus-radio-text" : colorScheme.boraami[900],
  "disabled-radio-fill" : colorScheme.boraami[400],
  "disabled-radio-border" : colorScheme.boraami[400],
  "disabled-radio-text" : colorScheme.boraami[900],
  "hover-radio-fill" : colorScheme.serendipity[500],
  "hover-radio-border" : colorScheme.serendipity[500],
  "hover-radio-text" : colorScheme.boraami[900],


  //Switch Component
  "default-pill" : colorScheme.boraami[300],
  "default-handle" : colorScheme.boraami[50],
  "default-label-text" : colorScheme.boraami[900],
  "default-helper-text" : colorScheme.boraami[500],
  "disabled-pill" : colorScheme.boraami[300],
  "disabled-handle" : colorScheme.boraami[50],
  "disabled-label-text" : colorScheme.boraami[900],
  "disabled-helper-text" : colorScheme.boraami[500],

  //Tooltip Component
  "tooltip-fill" : colorScheme.boraami[700],
  "tooltip-text" : colorScheme.boraami[50],
};
// note: we set up a single consistent base type to validate the rest

type BaseTheme = typeof light;
// the rest of the themes use BaseTheme

const dark: BaseTheme = {
    // ALert Component
    "default-alert-solid-fill" : colorScheme.boraami[700],
    "default-alert-left-border" : colorScheme.boraami[400],
    "default-alert-subtle-fill" : colorScheme.mono[200],
    "default-alert-outline" : colorScheme.boraami[600],
    "success-alert-solid-fill" : colorScheme.singularity[500],
    "success-alert-subtle-fill" : colorScheme.singularity[200],
    "success-alert-outline" : colorScheme.singularity[200],
    "warning-alert-solid-fill" : colorScheme.ptd[500],
    "warning-alert-subtle-fill" : colorScheme.ptd[200],
    "warning-alert-outline" : colorScheme.ptd[500],
    "error-alert-outline" : colorScheme.bwl[700],

    // Button Component
    "primary-default-btn" : colorScheme.boraami[700],
    "primary-disabled-btn" : colorScheme.mono[400],
    "primary-hover-btn-fill" : colorScheme.boraami[700],
    "primary-hover-btn-border" : colorScheme.serendipity[500],
    "primary-focus-btn-fill" : colorScheme.boraami[700],
    "primary-focus-btn-border" : colorScheme.boraami[400],
    "secondary-default-btn-border" : colorScheme.boraami[500],
    "secondary-disabled-btn-border" : colorScheme.mono[400],
    "secondary-hover-btn-border" : colorScheme.serendipity[500],
    "secondary-focus-btn-border" : colorScheme.boraami[500],
    "tertiary-default-text" : colorScheme.boraami[50],
    "tertiary-disabled-text" : colorScheme.bwl[700],
    "tertiary-hover-text" : colorScheme.bwl[700],
    "tertiary-hover-border" : colorScheme.serendipity[500],
    "tertiary-focus-text" : colorScheme.boraami[500],
    "tertiary-focus-border" : colorScheme.boraami[500],
      
    // Checkbox Component
    "default-fill" : colorScheme.boraami[700],
    "default-border" : colorScheme.boraami[700],
    "default-check-icon" : colorScheme.boraami[50],
    "focus-fill" : colorScheme.boraami[700],
    "focus-border" : colorScheme.boraami[400],
    "focus-check-box" : colorScheme.boraami[50],
    "disabled-fill" : colorScheme.mono[400],
    "disabled-border" : colorScheme.mono[400],
    "disabled-check-box" : colorScheme.boraami[50],
    "hover-fill" : colorScheme.boraami[700],
    "hover-border" : colorScheme.serendipity[500],
    "hover-check-box" : colorScheme.boraami[50],

    // Card Component
    "info-card-fill" : colorScheme.boraami[700],
    "info-card-top-border" : colorScheme.boraami[400],
    "info-card-music-icon" : colorScheme.boraami[50],
    "info-card-text" : colorScheme.boraami[50],
    "achievement-card-fill" : colorScheme.boraami[500],
    "achievement-card-text" : colorScheme.boraami[50],

  // Tags Component
  "info-solid-fill" : colorScheme.serendipity[600],
  "info-outline-border" : colorScheme.serendipity[200],
  "info-solid-text" : colorScheme.boraami[50],
  "info-outline-text" : colorScheme.serendipity[200],
  "success-solid-fill" : colorScheme.singularity[600],
  "success-outline-border" : colorScheme.singularity[200],
  "success-solid-text" : colorScheme.boraami[50],
  "success-outline-text" : colorScheme.singularity[200],
  "error-solid-fill" : colorScheme.bwl[700],
  "error-outline-border" : colorScheme.bwl[200],
  "error-solid-text" : colorScheme.boraami[50],
  "error-outline-text" : colorScheme.bwl[600],
  "warning-solid-fill" : colorScheme.ptd[400],
  "warning-outline-border" : colorScheme.ptd[200],
  "warning-solid-text" : colorScheme.mono[800],
  "warning-outline-text" : colorScheme.ptd[400],
  "default-solid-fill" : colorScheme.boraami[600],
  "default-outline-border" : colorScheme.boraami[200],
  "default-solid-text" : colorScheme.boraami[50],
  "default-outline-text" : colorScheme.boraami[100],
  "tags-solid-fill" : colorScheme.boraami[600],
  "tags-outline-border" : colorScheme.mono[400],
  "tags-solid-text" : colorScheme.boraami[50],
  "tags-outline-text" : colorScheme.mono[50],
    
  //RadioButton Component
  "default-radio-fill" : colorScheme.boraami[700],
  "default-radio-border" : colorScheme.boraami[700],
  "default-radio-text" : colorScheme.boraami[50],
  "focus-radio-fill" : colorScheme.boraami[500],
  "focus-radio-border" : colorScheme.boraami[300],
  "focus-radio-text" : colorScheme.boraami[50],
  "disabled-radio-fill" : colorScheme.boraami[900],
  "disabled-radio-border" : colorScheme.boraami[500],
  "disabled-radio-text" : colorScheme.boraami[50],
  "hover-radio-fill" : colorScheme.serendipity[500],
  "hover-radio-border" : colorScheme.serendipity[500],
  "hover-radio-text" : colorScheme.boraami[50],
 
  //Switch Component
  "default-pill" : colorScheme.boraami[700],
  "default-handle" : colorScheme.boraami[50],
  "default-label-text" : colorScheme.boraami[50],
  "default-helper-text" : colorScheme.boraami[300],
  "disabled-pill" : colorScheme.boraami[700],
  "disabled-handle" : colorScheme.boraami[50],
  "disabled-label-text" : colorScheme.boraami[50],
  "disabled-helper-text" : colorScheme.boraami[300],

   //Tooltip Component
   "tooltip-fill" : colorScheme.boraami[700],
   "tooltip-text" : colorScheme.mono[800],
  
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