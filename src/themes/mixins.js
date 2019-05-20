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
  let targetLineHeightInPixels = Math.ceil(targetLineHeight * fontSize);

  // Increment the target line height until it's a multiple of 4
  while (targetLineHeightInPixels % 4 !== 0) {
    targetLineHeightInPixels += 1;
  }

  // Generate a unitless line height relative to the font size
  // that corresponds with our target pixel height.
  const lineHeight = targetLineHeightInPixels / fontSize;
  return lineHeight;
};

// Output typographic styling to apply to elements.
const outputTypeDetails = ({ theme, sizeNumber, font }) => {
  const fontSize = calculateFontSize({
    starterSize: theme.typography.starterSizes.desktop,
    scaleModifier: theme.typography.scaleModifiers.desktop,
    sizeNumber,
  });

  // Get the target line height from our theme for the font used.
  let targetLineHeight;
  if (font === 'headings') {
    targetLineHeight = theme.typography.lineHeights.headings;
  } else if (font === 'interface') {
    targetLineHeight = theme.typography.lineHeights.interface;
  } else {
    targetLineHeight = theme.typography.lineHeights.body;
  }

  return {
    fontSize: `${fontSize}rem`,
    lineHeight: calculateLineHeight({
      fontSize: fontSize * 10,
      targetLineHeight,
    }),
  };
};

// Convert regular case to small-caps.
const smallCaps = () => {
  return {
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  };
};

// Interface
export const interfaceSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: -0.5, font: 'interface' }),
    fontWeight: 500,
  };
};

export const interfaceMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: 0, font: 'interface' }),
    fontWeight: 500,
  };
};

export const interfaceLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: 1, font: 'interface' }),
    fontWeight: 500,
  };
};

// Body
export const bodySmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.body,
    ...outputTypeDetails({ theme, sizeNumber: 0.5, font: 'body' }),
    fontWeight: 400,
  };
};

export const bodyMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.body,
    ...outputTypeDetails({ theme, sizeNumber: 0, font: 'body' }),
    fontWeight: 400,
  };
};

export const bodyLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.body,
    ...outputTypeDetails({ theme, sizeNumber: 1, font: 'body' }),
    fontWeight: 400,
  };
};

// Headings
export const headingSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    ...outputTypeDetails({ theme, sizeNumber: 3, font: 'headings' }),
    fontWeight: 600,
  };
};

export const headingMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    ...outputTypeDetails({ theme, sizeNumber: 4, font: 'headings' }),
    fontWeight: 600,
  };
};

export const headingLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    ...outputTypeDetails({ theme, sizeNumber: 5, font: 'headings' }),
    fontWeight: 600,
  };
};

export const pageTitle = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    ...outputTypeDetails({ theme, sizeNumber: 6, font: 'headings' }),
    fontWeight: 600,
  };
};

export const subtitle = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    ...outputTypeDetails({ theme, sizeNumber: 2, font: 'headings' }),
    fontWeight: 400,
    fontStyle: 'italic',
  };
};

// Metadata
export const metadataSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: -0.5, font: 'interface' }),
    fontWeight: 600,
    ...smallCaps(),
  };
};

export const metadataLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    ...outputTypeDetails({ theme, sizeNumber: 1, font: 'interface' }),
    fontWeight: 600,
    ...smallCaps(),
  };
};

// Other font styles we should generate:
// Interface L M S
// Body L M S
// Heading L M S
// Page Title
// Subtitle
// Metadata L S
