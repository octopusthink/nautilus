// Let's start by generating a type scale, along with line-heights and small-caps modifiers.
// These functions will be used by our type styles below.

// In order to get a whole-integer pixel number, we multiply by ten and round,
// then divide by ten again to get a rem value that works with our base size setting.
export const calculateFontSize = ({ scaleModifier, sizeNumber, baseSize }) => {
  const newSize = Math.round(baseSize * 10 * scaleModifier ** sizeNumber) / 10;

  return newSize;
};

// Calculate line height for either single-line (heading) or multi-line (body) usage.
export const calculateLineHeight = ({ fontSize, targetLineHeight }) => {
  // Check if the `fontSize * lineHeight` is divisible by 4. If not, increment
  // until it is divisible by four. This ensures that line-height respects our
  // vertical rhythm.
  let targetLineHeightInPixels = Math.ceil(targetLineHeight * fontSize);

  // Increment the target line height until it's a multiple of 4.
  while (targetLineHeightInPixels % 4 !== 0) {
    targetLineHeightInPixels += 1;
  }

  // Generate a unitless line height relative to the font size that corresponds
  // with our target pixel height.
  const lineHeight = targetLineHeightInPixels / fontSize;
  return lineHeight;
};

// Convert regular case to small-caps.
export const smallCaps = () => {
  return {
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  };
};

// Output typographic styling to apply to elements.
export const typeAttributes = ({ theme, sizeNumber, fontType }) => {
  const fontSize = calculateFontSize({
    baseSize: theme.typography.baseSizes.desktop,
    scaleModifier: theme.typography.scaleModifiers.desktop,
    sizeNumber,
  });

  // Get the target line height from our theme for the font used.
  const targetLineHeight = theme.typography.lineHeights[fontType];

  return {
    fontSize: `${fontSize}rem`,
    lineHeight: calculateLineHeight({
      fontSize: fontSize * 10,
      targetLineHeight,
    }),
  };
};
