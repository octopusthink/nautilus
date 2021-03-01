import { FONT_TYPES } from './constants';
import { smallCaps, typeAttributes } from './typeUtils';

// Body
const bodySmall = (theme) => ({
  fontFamily: theme.typography.fonts.body,
  fontWeight: theme.typography.fontWeights.body,
  ...typeAttributes({
    theme,
    sizeNumber: -0.5,
    fontType: FONT_TYPES.body,
  }),
});

const bodyMedium = (theme) => ({
  fontFamily: theme.typography.fonts.body,
  fontWeight: theme.typography.fontWeights.body,
  ...typeAttributes({
    theme,
    sizeNumber: 0,
    fontType: FONT_TYPES.body,
  }),
});

const bodyLarge = (theme) => ({
  fontFamily: theme.typography.fonts.body,
  fontWeight: theme.typography.fontWeights.body,
  ...typeAttributes({
    theme,
    sizeNumber: 1,
    fontType: FONT_TYPES.body,
  }),
});

export const body = {
  small: bodySmall,
  medium: bodyMedium,
  large: bodyLarge,
};

// Headings
const headingSmall = (theme) => ({
  fontFamily: theme.typography.fonts.heading,
  fontWeight: theme.typography.fontWeights.heading,
  ...typeAttributes({
    theme,
    sizeNumber: 3,
    fontType: FONT_TYPES.heading,
  }),
});

const headingMedium = (theme) => ({
  fontFamily: theme.typography.fonts.heading,
  fontWeight: theme.typography.fontWeights.heading,
  ...typeAttributes({
    theme,
    sizeNumber: 4,
    fontType: FONT_TYPES.heading,
  }),
});

const headingLarge = (theme) => ({
  fontFamily: theme.typography.fonts.heading,
  fontWeight: theme.typography.fontWeights.heading,
  ...typeAttributes({
    theme,
    sizeNumber: 5,
    fontType: FONT_TYPES.heading,
  }),
});

export const heading = {
  small: headingSmall,
  medium: headingMedium,
  large: headingLarge,
};

// Interface
const interfaceUISmall = (theme) => ({
  fontFamily: theme.typography.fonts.interfaceUI,
  fontWeight: theme.typography.fontWeights.interfaceUI,
  ...typeAttributes({
    theme,
    sizeNumber: -0.5,
    fontType: FONT_TYPES.interfaceUI,
  }),
});

const interfaceUIMedium = (theme) => ({
  fontFamily: theme.typography.fonts.interfaceUI,
  fontWeight: theme.typography.fontWeights.interfaceUI,
  ...typeAttributes({
    theme,
    sizeNumber: 0,
    fontType: FONT_TYPES.interfaceUI,
  }),
});

const interfaceUILarge = (theme) => ({
  fontFamily: theme.typography.fonts.interfaceUI,
  fontWeight: theme.typography.fontWeights.interfaceUI,
  ...typeAttributes({
    theme,
    sizeNumber: 1,
    fontType: FONT_TYPES.interfaceUI,
  }),
});

export const interfaceUI = {
  small: interfaceUISmall,
  medium: interfaceUIMedium,
  large: interfaceUILarge,
};

// Metadata
const metadataSmall = (theme) => ({
  fontFamily: theme.typography.fonts.interfaceUI,
  fontWeight: theme.typography.fontWeights.interfaceUIBold,
  ...typeAttributes({
    theme,
    sizeNumber: -1.5,
    fontType: FONT_TYPES.interfaceUI,
  }),
  ...smallCaps(),
});

const metadataLarge = (theme) => ({
  fontFamily: theme.typography.fonts.interfaceUI,
  fontWeight: theme.typography.fontWeights.interfaceUIBold,
  ...typeAttributes({
    theme,
    sizeNumber: 0,
    fontType: FONT_TYPES.interfaceUI,
  }),
  ...smallCaps(),
});

export const metadata = {
  small: metadataSmall,
  large: metadataLarge,
};

export const pageTitle = (theme) => ({
  fontFamily: theme.typography.fonts.heading,
  fontWeight: theme.typography.fontWeights.pageTitle,
  ...typeAttributes({
    theme,
    sizeNumber: 6,
    fontType: FONT_TYPES.heading,
  }),
});

export const subtitle = (theme) => ({
  fontFamily: theme.typography.fonts.heading,
  fontWeight: theme.typography.fontWeights.subtitle,
  ...typeAttributes({
    theme,
    sizeNumber: 2,
    fontType: FONT_TYPES.heading,
  }),
  fontStyle: 'italic',
});
