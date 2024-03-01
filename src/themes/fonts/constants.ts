export const headingSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  true: 24,
  xl: 30,
  "2xl": 36,
  "3xl": 48,
  "4xl": 60,
  "5xl": 64,
  "6xl": 72,
  "7xl": 76,
  "8xl": 80,
  "9xl": 88,
} as const;

export const paragraphSizes = {
  "2xs": 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  true: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
} as const;

export const headingLineHeights = Object.fromEntries(
  Object.entries(headingSizes).map(([k, v]) => {
    if (v <= 60) {
      return [k, v * 1.25];
    }
    return [k, v * 1.5];
  })
);

export const paraBtnLineHeights = Object.fromEntries(
  Object.entries(paragraphSizes).map(([k, v]) => [k, v * 1.5])
);

export const headingsLetterSpacing = {
  "2xl": 0,
  "3xl": -0.05,
  "5xl": 0,
};
