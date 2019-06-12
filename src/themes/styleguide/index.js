const colors = {
  white: '#ffffff',
  grey0: '#f8f9fa',
  grey100: '#ebedf0',
  grey200: '#dee0e5',
  grey300: '#cfd3da',
  grey400: '#bec4cd',
  grey500: '#acb3bf',
  grey600: '#97a0af',
  grey700: '#818996',
  grey800: '#666c76',
  grey900: '#3b3f45',
  black: '#181b1c',

  red0: '#f6e9e9',
  red100: '#edd2d2',
  red200: '#e2b6b6',
  red300: '#d49595',
  red400: '#c26767',
  red500: '#990000',
  red600: '#8a0000',
  red700: '#780000',
  red800: '#630000',
  red900: '#470000',

  purple0: '#eeeaf1',
  purple100: '#dbd4e3',
  purple200: '#c6bad1',
  purple300: '#ac9bbd',
  purple400: '#8a71a2',
  purple500: '#4c2570',
  purple600: '#432063',
  purple700: '#3a1c55',
  purple800: '#2e1644',
  purple900: '#1e0e2c',

  yellow0: '#fcf5de',
  yellow100: '#faebbb',
  yellow200: '#f7e095',
  yellow300: '#f5d46a',
  yellow400: '#f1c639',
  yellow500: '#eeb600',
  yellow600: '#d7a400',
  yellow700: '#bd90',
  yellow800: '#9d7800',
  yellow900: '#715600',

  cyan0: '#e2f5f6',
  cyan100: '#c3eaed',
  cyan200: '#a0dee3',
  cyan300: '#76d0d6',
  cyan400: '#44bfc8',
  cyan500: '#00a8b4',
  cyan600: '#0097a2',
  cyan700: '#00858e',
  cyan800: '#006e76',
  cyan900: '#004f54',

  blue0: '#e6edf3',
  blue100: '#cbdae7',
  blue200: '#acc5d8',
  blue300: '#87aac7',
  blue400: '#5788b1',
  blue500: '#07508c',
  blue600: '#06477d',
  blue700: '#053e6c',
  blue800: '#043258',
  blue900: '#03223c',

  pink0: '#fcebf4',
  pink100: '#f9d5e8',
  pink200: '#f5bbda',
  pink300: '#f19dca',
  pink400: '#ec75b5',
  pink500: '#e33592',
  pink600: '#cd2f83',
  pink700: '#b32973',
  pink800: '#94225f',
  pink900: '#6a1844',

  green0: '#e5f2e5',
  green100: '#c8e3c8',
  green200: '#a6d3a6',
  green300: '#7fc07f',
  green400: '#4ca74c',
  green500: '#008100',
  green600: '#007400',
  green700: '#006500',
  green800: '#005300',
  green900: '#003b00',
};

const fonts = {
  systemFonts:
    '-apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif',
  HarrietDisplay: 'Harriet Display',
  HarrietText: 'Harriet Text',
  Graphik: 'Graphik',
};

export const theme = {
  // All themeable colour variables go here.
  colors: {
    accent: {
      primary: colors.pink600,
      primaryDark: colors.pink800,
      primaryLight: colors.pink400,
    },
    neutral: {
      white: colors.white,
      grey0: colors.grey0,
      grey200: colors.grey200,
      grey400: colors.grey400,
      grey600: colors.grey600,
      grey800: colors.grey800,
      black: colors.black,
    },
    intent: {
      success: colors.green600,
      successDark: colors.green800,
      successLight: colors.green200,
      warning: colors.yellow600,
      warningDark: colors.yellow800,
      warningLight: colors.yellow200,
      danger: colors.red600,
      dangerDark: colors.red800,
      dangerLight: colors.red200,
    },

    text: {
      default: colors.grey900,
      dark: colors.black,
      light: colors.grey800,
      inverse: colors.grey0,
      inverseLight: colors.white,
      inverseDark: colors.grey100,
    },

    buttons: {
      neutral: colors.white,
      default: colors.pink600,
      defaultDark: colors.pink800,
      defaultLight: colors.pink200,
      disabled: colors.grey700,
      disabledDark: colors.grey800,
      disabledLight: colors.grey200,
    },
  },

  // Component-specific text and values.
  components: {
    TextInput: {
      optionalMessage: '(optional)',
    },
  },

  // All themeable typography variables go here.
  typography: {
    fonts: {
      body: fonts.systemFonts,
      heading: fonts.systemFonts,
      interfaceUI: fonts.systemFonts,
    },

    fontWeights: {
      body: 400,
      bodyBold: 600,
      heading: 700,
      pageTitle: 700,
      subtitle: 300,
      interfaceUI: 500,
      interfaceUIBold: 700,
    },

    baseSizes: {
      desktop: 1.8,
      mobile: 1.6,
    },

    scaleModifiers: {
      desktop: 1.25,
      mobile: 1.15,
    },

    lineHeights: {
      heading: 1,
      body: 1.5,
      interfaceUI: 1.2,
    },
  },

  // All themeable spacing variables go here.
  // 1rem = 10px.
  spacing: {
    margin: {
      none: 0,
      xxs: '0.4rem',
      xs: '0.8rem',
      s: '1.6rem',
      m: '3.2rem',
      l: '4.8rem',
      xl: '6.4rem',
      xxl: '8.0rem',
    },

    padding: {
      none: 0,
      xxs: '0.2rem',
      xs: '0.4rem',
      s: '0.8rem',
      m: '1.2rem',
      l: '2.4rem',
      xl: '3.2rem',
      xxl: '4.8rem',
    },
  },
};

export default theme;
