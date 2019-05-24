import PropTypes from 'prop-types';

export const themePropTypes = PropTypes.shape({
  components: {
    ButtonColors: {
      neutral: PropTypes.string,

      default: PropTypes.string,
      defaultDark: PropTypes.string,
      defaultLight: PropTypes.string,

      disabled: PropTypes.string,
      disabledDark: PropTypes.string,
      disabledLight: PropTypes.string,

      // These should possibly just be defined as semantic colours, outside of the button colours!
      success: PropTypes.string,
      successDark: PropTypes.string,
      successLight: PropTypes.string,

      warning: PropTypes.string,
      warningDark: PropTypes.string,
      warningLight: PropTypes.string,

      danger: PropTypes.string,
      dangerDark: PropTypes.string,
      dangerLight: PropTypes.string,
    },
  },
  typography: {
    fonts: {
      body: PropTypes.string,
      headings: PropTypes.string,
      interface: PropTypes.string,
    },
    fontWeights: {
      body: PropTypes.number,
      bodyBold: PropTypes.number,
      headings: PropTypes.number,
      pageTitle: PropTypes.number,
      subtitle: PropTypes.number,
      interface: PropTypes.number,
      interfaceBold: PropTypes.number,
    },
    starterSizes: {
      desktop: PropTypes.number,
      mobile: PropTypes.number,
    },
    scaleModifiers: {
      desktop: PropTypes.number,
      mobile: PropTypes.number,
    },
    lineHeights: {
      headings: PropTypes.number,
      body: PropTypes.number,
      interface: PropTypes.number,
    },
  },
});
