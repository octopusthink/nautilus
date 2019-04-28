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
  // colour corresponds to state or intent
  default: colors.blue,
  hover: colors.darkBlue,
  active: colors.lightBlue,
  disabled: colors.grey,
  danger: colors.red,
  success: colors.green,
  warning: colors.yellow,
  primaryText: colors.white,
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
