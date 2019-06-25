import PropTypes from 'prop-types';

export const themePropTypes = PropTypes.shape({
  components: PropTypes.shape({
    TextInput: PropTypes.shape({
      /** Message used for TextInput fields that are marked as `optional`. */
      optionalMessage: PropTypes.string,
    }),
  }),
  colors: PropTypes.shape({
    accent: PropTypes.shape({
      primary: PropTypes.string,
      primaryDark: PropTypes.string,
      primaryLight: PropTypes.string,
    }),
    neutral: PropTypes.shape({
      white: PropTypes.string,
      grey0: PropTypes.string,
      grey200: PropTypes.string,
      grey400: PropTypes.string,
      grey600: PropTypes.string,
      grey800: PropTypes.string,
      black: PropTypes.string,
    }),
    intent: PropTypes.shape({
      success: PropTypes.string,
      successDark: PropTypes.string,
      successLight: PropTypes.string,
      warning: PropTypes.string,
      warningDark: PropTypes.string,
      warningLight: PropTypes.string,
      danger: PropTypes.string,
      dangerDark: PropTypes.string,
      dangerLight: PropTypes.string,
    }),

    text: PropTypes.shape({
      default: PropTypes.string,
      dark: PropTypes.string,
      light: PropTypes.string,
      inverse: PropTypes.string,
      inverseLight: PropTypes.string,
      inverseDark: PropTypes.string,
    }),

    buttons: PropTypes.shape({
      neutral: PropTypes.string,
      default: PropTypes.string,
      defaultDark: PropTypes.string,
      defaultLight: PropTypes.string,
      disabled: PropTypes.string,
      disabledDark: PropTypes.string,
      disabledLight: PropTypes.string,
    }),
  }),

  typography: PropTypes.shape({
    fonts: PropTypes.shape({
      body: PropTypes.string,
      heading: PropTypes.string,
      interfaceUI: PropTypes.string,
    }),

    fontWeights: PropTypes.shape({
      body: PropTypes.number,
      bodyBold: PropTypes.number,
      heading: PropTypes.number,
      pageTitle: PropTypes.number,
      subtitle: PropTypes.number,
      interfaceUI: PropTypes.number,
      interfaceUIBold: PropTypes.number,
    }),

    baseSizes: PropTypes.shape({
      desktop: PropTypes.number,
      mobile: PropTypes.number,
    }),

    scaleModifiers: PropTypes.shape({
      desktop: PropTypes.number,
      mobile: PropTypes.number,
    }),

    lineHeights: PropTypes.shape({
      heading: PropTypes.number,
      body: PropTypes.number,
      interfaceUI: PropTypes.number,
    }),
  }),

  spacing: PropTypes.shape({
    margin: PropTypes.shape({
      none: PropTypes.number,
      xxs: PropTypes.number,
      extraSmall: PropTypes.number,
      s: PropTypes.number,
      m: PropTypes.number,
      l: PropTypes.number,
      extraLarge: PropTypes.number,
      xxl: PropTypes.number,
    }),

    padding: PropTypes.shape({
      none: PropTypes.number,
      xxs: PropTypes.number,
      extraSmall: PropTypes.number,
      s: PropTypes.number,
      m: PropTypes.number,
      l: PropTypes.number,
      extraLarge: PropTypes.number,
      xxl: PropTypes.number,
    }),
  }),
});
