// Let's start by generating a type scale, along with line-heights and small-caps modifiers.
// These functions will be used by our type styles below.

// In order to get a whole-integer pixel number, we multiply by ten and round,
// then divide by ten again to get a rem value that works with our base size setting.
const calculateFontSize = (starterSize, scaleModifier, sizeNumber) => {
  const newSize =
    Math.round(starterSize * 10 * scaleModifier ** sizeNumber) / 10;
  return newSize;
};

// font size 0-6 xxs, xs, s, m, l, xl, xxl

const outputFontSize = (theme, sizeNumber) => {
  return {
    fontSize: `${calculateFontSize(
      theme.typography.starterSizes.desktop,
      theme.typography.scaleModifiers.desktop,
      sizeNumber,
    )}rem`,
  };
};

// Define our font styles here, then pull them into the theme.
export const interfaceSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputFontSize(theme, 0),
    fontWeight: 500,
    fontStyle: 'normal',
  };
};

export const interfaceLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputFontSize(theme, 1),
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.59,
  };
};
