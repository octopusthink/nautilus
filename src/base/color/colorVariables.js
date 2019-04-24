// ----------------------------------------
// Color Variables
//
// https://ether.thescenery.co/color/
//
//

import colors from './colors';

export const semanticColors = {
  colorSuccess: colors.greenDark,
  colorDanger: colors.redDark,
};

export const typographicColors = {
  typeLight: colors.gray30,
  typeMedium: colors.gray50,
  typeDark: colors.black,
  typeAccent: colors.blue,
  typeDanger: colors.red,
  typeSuccess: colors.green,
};

export const buttonColors = {
  // Primary
  primaryBackground: colors.blue,
  primaryBorder: colors.blue,
  primaryText: colors.white,

  primaryBackgroundHover: colors.green,
  primaryBorderHover: colors.green,
  primaryTextHover: colors.white,

  // Default
  defaultBackground: colors.white,
  defaultBorder: colors.blue,
  defaultText: colors.blueDark,

  defaultBackgroundHover: colors.white,
  defaultBorderHover: colors.green,
  defaultTextHover: colors.greenDark,

  // Minimal
  minimalBackground: 'transparent',
  minimalBorder: 'pink',
  minimalText: colors.blueDark,

  minimalBackgroundHover: 'transparent',
  minimalBorderHover: 'transparent',
  minimalTextHover: colors.greenDark,

  // Danger
  dangerBackground: semanticColors.colorDanger,
  dangerBackgroundHover: colors.redDark1,
  dangerBorder: semanticColors.colorDanger,
  dangerText: colors.white,

  // Success
  successBackground: semanticColors.colorSuccess,
  successBackgroundHover: colors.greenDark1,
  successBorder: semanticColors.colorSuccess,
  successText: colors.white,
};

const colorVariables = {
  // Semantic Colors
  semantic: {
    ...semanticColors,
  },

  // Typographic Colors
  typographic: {
    ...typographicColors,
  },

  // Button Colors
  buttons: {
    ...buttonColors,
  },
};

export default colorVariables;
