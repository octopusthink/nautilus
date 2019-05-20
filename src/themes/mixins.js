// Let's start by generating a type scale, along with line-heights and small-caps modifiers.
// These functions will be used by our type styles below.

// In order to get a whole-integer pixel number, we multiply by ten and round,
// then divide by ten again to get a rem value that works with our base size setting.
const calculateFontSize = ({ starterSize, scaleModifier, sizeNumber }) => {
  const newSize =
    Math.round(starterSize * 10 * scaleModifier ** sizeNumber) / 10;
  return newSize;
};

// Calculate line height for either single-line (heading) or multi-line (body) usage.
const calculateLineHeight = ({ fontSize, targetLineHeight }) => {
  // Now we check to see if the font size * line-height is divisible by 4
  // If not, increment until it is divisible by four.
  // This ensures that line-height respects our vertical rhythm.
  let targetLineHeightInPixels = Math.round(targetLineHeight * fontSize);

  // Increment the target line height until it's a multiple of 4
  while (targetLineHeightInPixels % 4 !== 0) {
    targetLineHeightInPixels += 1;
  }

  // Generate a unitless line height relative to the font size
  // that corresponds with our target pixel height.
  const lineHeight = targetLineHeightInPixels / fontSize;
  return lineHeight;
};

const outputTypeDetails = ({ theme, sizeNumber }) => {
  const fontSize = calculateFontSize({
    starterSize: theme.typography.starterSizes.desktop,
    scaleModifier: theme.typography.scaleModifiers.desktop,
    sizeNumber,
  });

  return {
    fontSize: `${fontSize}rem`,
    lineHeight: calculateLineHeight({
      fontSize: fontSize * 10,
      targetLineHeight: theme.typography.lineHeights.interface,
    }),
  };
};

// Define our font styles here, then pull them into the theme.
export const interfaceSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: -0.5 }),
    fontWeight: 500,
    fontStyle: 'normal',
  };
};

// Define our font styles here, then pull them into the theme.
export const interfaceMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: 0 }),
    fontWeight: 500,
    fontStyle: 'normal',
  };
};

export const interfaceLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: 1 }),
    fontWeight: 500,
    fontStyle: 'normal',
  };
};
