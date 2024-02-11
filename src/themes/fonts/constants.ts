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
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  true: 18,
  "2xl": 20,
  "3xl": 24,
  "4xl": 30,
  "5xl": 36,
  "6xl": 48,
  "7xl": 60,
  "8xl": 72,
  "9xl": 96,
  "10xl": 128,
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
