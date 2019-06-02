import { css } from '@emotion/core';

// Let's start by generating a type scale, along with line-heights and small-caps modifiers.
// These functions will be used by our type styles below.

// Allows lookup of font types without magic constants, eg:
// `{ fontType: FONT_TYPES.body }` instead of `{ fontType: 'body' }`.
const FONT_TYPES = ['body', 'headings', 'interface'].reduce(
  (accumulator, type) => {
    return { ...accumulator, [type]: type };
  },
  {},
);

// In order to get a whole-integer pixel number, we multiply by ten and round,
// then divide by ten again to get a rem value that works with our base size setting.
const calculateFontSize = ({ scaleModifier, sizeNumber, baseSize }) => {
  const newSize = Math.round(baseSize * 10 * scaleModifier ** sizeNumber) / 10;

  return newSize;
};

// Calculate line height for either single-line (heading) or multi-line (body) usage.
const calculateLineHeight = ({ fontSize, targetLineHeight }) => {
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
const smallCaps = () => {
  return {
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  };
};

// Output typographic styling to apply to elements.
const typeAttributes = ({ theme, sizeNumber, fontType }) => {
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

// Interface
export const interfaceSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    fontWeight: theme.typography.fontWeights.interface,
    ...typeAttributes({
      theme,
      sizeNumber: -0.5,
      fontType: FONT_TYPES.interface,
    }),
  };
};

export const interfaceMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    fontWeight: theme.typography.fontWeights.interface,
    ...typeAttributes({
      theme,
      sizeNumber: 0,
      fontType: FONT_TYPES.interface,
    }),
  };
};

export const interfaceLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    fontWeight: theme.typography.fontWeights.interface,
    ...typeAttributes({
      theme,
      sizeNumber: 1,
      fontType: FONT_TYPES.interface,
    }),
  };
};

// Body
export const bodySmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.body,
    fontWeight: theme.typography.fontWeights.body,
    ...typeAttributes({
      theme,
      sizeNumber: 0.5,
      fontType: FONT_TYPES.body,
    }),
  };
};

export const bodyMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.body,
    fontWeight: theme.typography.fontWeights.body,
    ...typeAttributes({
      theme,
      sizeNumber: 0,
      fontType: FONT_TYPES.body,
    }),
  };
};

export const bodyLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.body,
    fontWeight: theme.typography.fontWeights.body,
    ...typeAttributes({
      theme,
      sizeNumber: 1,
      fontType: FONT_TYPES.body,
    }),
  };
};

// Headings
export const headingSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    fontWeight: theme.typography.fontWeights.headings,
    ...typeAttributes({
      theme,
      sizeNumber: 3,
      fontType: FONT_TYPES.headings,
    }),
  };
};

export const headingMedium = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    fontWeight: theme.typography.fontWeights.headings,
    ...typeAttributes({
      theme,
      sizeNumber: 4,
      fontType: FONT_TYPES.headings,
    }),
  };
};

export const headingLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    fontWeight: theme.typography.fontWeights.headings,
    ...typeAttributes({
      theme,
      sizeNumber: 5,
      fontType: FONT_TYPES.headings,
    }),
  };
};

export const pageTitle = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    fontWeight: theme.typography.fontWeights.pageTitle,
    ...typeAttributes({
      theme,
      sizeNumber: 6,
      fontType: FONT_TYPES.headings,
    }),
  };
};

export const subtitle = (theme) => {
  return {
    fontFamily: theme.typography.fonts.headings,
    fontWeight: theme.typography.fontWeights.subtitle,
    ...typeAttributes({
      theme,
      sizeNumber: 2,
      fontType: FONT_TYPES.headings,
    }),
    fontStyle: 'italic',
  };
};

// Metadata
export const metadataSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    fontWeight: theme.typography.fontWeights.interfaceBold,
    ...typeAttributes({
      theme,
      sizeNumber: -0.5,
      fontType: FONT_TYPES.interface,
    }),
    ...smallCaps(),
  };
};

export const metadataLarge = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    fontWeight: theme.typography.fontWeights.interfaceBold,
    ...typeAttributes({
      theme,
      sizeNumber: 1,
      fontType: FONT_TYPES.interface,
    }),
    ...smallCaps(),
  };
};

export const textStyles = ({ dark, inverse, large, light, small, theme }) => {
  return css`
    color: ${theme.colors.text.default};
    margin: 0 0 ${theme.spacing.margin.m};
    ${small && bodySmall(theme)};
    ${!small && !large && bodyMedium(theme)};
    ${large && bodyLarge(theme)};
    ${light &&
      css`
        color: ${theme.colors.text.light};
      `}

    ${dark &&
      css`
        color: ${theme.colors.text.dark};
      `}

    ${inverse &&
      css`
        color: ${theme.colors.text.inverse};

        ${light &&
          css`
            color: ${theme.colors.text.inverseLight};
          `}
        ${dark &&
          css`
            color: ${theme.colors.text.inverseDark};
          `}
      `}
  `;
};
