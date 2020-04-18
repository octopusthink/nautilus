type CSSBackground = any;
type CSSColor = string;
type CSSMargin = string;
type CSSNumber = any;

declare module '@emotion/react' {
  export interface Theme {
    // All themeable colour variables go here.
    colors: {
      accent: {
        primary: CSSColor;
        primaryDark: CSSColor;
        primaryLight: CSSColor;
        secondary: CSSColor;
        secondaryDark: CSSColor;
        secondaryLight: CSSColor;
      };

      neutral: {
        white: CSSColor;
        grey0: CSSColor;
        grey200: CSSColor;
        grey400: CSSColor;
        grey600: CSSColor;
        grey800: CSSColor;
        black: CSSColor;
      };

      intent: {
        success: CSSColor;
        successDark: CSSColor;
        successLight: CSSColor;
        warning: CSSColor;
        warningDark: CSSColor;
        warningLight: CSSColor;
        danger: CSSColor;
        dangerDark: CSSColor;
        dangerLight: CSSColor;
        neutral: CSSColor;
        neutralDark: CSSColor;
        neutralLight: CSSColor;
        inProgress: CSSColor;
        inProgressDark: CSSColor;
        inProgressLight: CSSColor;
        new: CSSColor;
        newDark: CSSColor;
        newLight: CSSColor;
      };

      state: {
        interactive: CSSColor;
        interactiveText: CSSColor;
        hover: CSSColor;
        hoverText: CSSColor;
        focusOutline: CSSColor;
        focusText: CSSColor;
        disabled: CSSColor;
        disabledDark: CSSColor;
        disabledLight: CSSColor;
        errorOutline: CSSColor;
        errorText: CSSColor;
      };

      text: {
        default: CSSColor;
        dark: CSSColor;
        light: CSSColor;
        inverse: CSSColor;
        inverseLight: CSSColor;
        inverseDark: CSSColor;
        emphasis: CSSColor;
        emphasisBackground: CSSBackground;
        strong: CSSColor;
        strongBackground: CSSColor;
      };

      buttons: {
        neutral: CSSColor;
        default: CSSColor;
        defaultDark: CSSColor;
        defaultLight: CSSColor;
      };
    };

    // Component-specific text and values.
    components: {
      TextField: {
        optionalMessage: String;
      };

      Icon: {
        sizes: {
          xSmall: {
            borderWidth: CSSNumber;
            marginSize: CSSMargin;
            padding: CSSNumber;
            size: CSSNumber;
            strokeWidth: CSSNumber;
          };
          small: {
            borderWidth: CSSNumber;
            marginSize: CSSMargin;
            padding: CSSNumber;
            size: CSSNumber;
            strokeWidth: CSSNumber;
          };
          medium: {
            borderWidth: CSSNumber;
            marginSize: CSSMargin;
            padding: CSSNumber;
            size: CSSNumber;
            strokeWidth: CSSNumber;
          };
          large: {
            borderWidth: CSSNumber;
            marginSize: CSSMargin;
            padding: CSSNumber;
            size: CSSNumber;
            strokeWidth: CSSNumber;
          };
          xLarge: {
            borderWidth: CSSNumber;
            marginSize: CSSMargin;
            padding: CSSNumber;
            size: CSSNumber;
            strokeWidth: CSSNumber;
          };
        };

        // TODO: implement these!
        Tag: {
          capitalization: String; // 'uppercase' | 'lowercase' | 'sentence' | 'title';
          colorPosition: String; // 'background' | 'border';
          borderRadius: CSSNumber;
          padding: String; // 'toUnits(theme.spacing.padding.xSmall) toUnits(theme.spacing.padding.small)';
        };
      };
    };

    // All themeable typography variables go here.
    typography: {
      fonts: {
        body: String;
        heading: String;
        interfaceUI: String;
      };

      fontWeights: {
        body: CSSNumber;
        bodyBold: CSSNumber;
        heading: CSSNumber;
        pageTitle: CSSNumber;
        subtitle: CSSNumber;
        interfaceUI: CSSNumber;
        interfaceUIBold: CSSNumber;
      };

      baseSizes: {
        desktop: CSSNumber;
        mobile: CSSNumber;
      };

      scaleModifiers: {
        desktop: CSSNumber;
        mobile: CSSNumber;
      };

      lineHeights: {
        heading: CSSNumber;
        body: CSSNumber;
        interfaceUI: CSSNumber;
      };
    };

    // All themeable spacing variables go here.
    // 1rem = 10px.
    spacing: {
      margin: {
        none: CSSNumber;
        xxSmall: CSSNumber;
        xSmall: CSSNumber;
        small: CSSNumber;
        medium: CSSNumber;
        large: CSSNumber;
        xLarge: CSSNumber;
        xxLarge: CSSNumber;
      };

      padding: {
        none: CSSNumber;
        xxSmall: CSSNumber;
        xSmall: CSSNumber;
        small: CSSNumber;
        medium: CSSNumber;
        large: CSSNumber;
        xLarge: CSSNumber;
        xxLarge: CSSNumber;
      };
    };
  }
}

// declare global {
//   namespace Emotion {
//     export interface Theme {
//       // All themeable colour variables go here.
//       colors: {
//         accent: {
//           primary: CSSColor;
//           primaryDark: CSSColor;
//           primaryLight: CSSColor;
//           secondary: CSSColor;
//           secondaryDark: CSSColor;
//           secondaryLight: CSSColor;
//         };

//         neutral: {
//           white: CSSColor;
//           grey0: CSSColor;
//           grey200: CSSColor;
//           grey400: CSSColor;
//           grey600: CSSColor;
//           grey800: CSSColor;
//           black: CSSColor;
//         };

//         intent: {
//           success: CSSColor;
//           successDark: CSSColor;
//           successLight: CSSColor;
//           warning: CSSColor;
//           warningDark: CSSColor;
//           warningLight: CSSColor;
//           danger: CSSColor;
//           dangerDark: CSSColor;
//           dangerLight: CSSColor;
//           neutral: CSSColor;
//           neutralDark: CSSColor;
//           neutralLight: CSSColor;
//           inProgress: CSSColor;
//           inProgressDark: CSSColor;
//           inProgressLight: CSSColor;
//           new: CSSColor;
//           newDark: CSSColor;
//           newLight: CSSColor;
//         };

//         state: {
//           interactive: CSSColor;
//           interactiveText: CSSColor;
//           hover: CSSColor;
//           hoverText: CSSColor;
//           focusOutline: CSSColor;
//           focusText: CSSColor;
//           disabled: CSSColor;
//           disabledDark: CSSColor;
//           disabledLight: CSSColor;
//           errorOutline: CSSColor;
//           errorText: CSSColor;
//         };

//         text: {
//           default: CSSColor;
//           dark: CSSColor;
//           light: CSSColor;
//           inverse: CSSColor;
//           inverseLight: CSSColor;
//           inverseDark: CSSColor;
//           emphasis: CSSColor;
//           emphasisBackground: String;
//           strong: CSSColor;
//           strongBackground: CSSColor;
//         };

//         buttons: {
//           neutral: CSSColor;
//           default: CSSColor;
//           defaultDark: CSSColor;
//           defaultLight: CSSColor;
//         };
//       };

//       // Component-specific text and values.
//       components: {
//         TextField: {
//           optionalMessage: String;
//         };

//         Icon: {
//           sizes: {
//             xSmall: {
//               borderWidth: CSSNumber;
//               marginSize: CSSMargin;
//               padding: CSSNumber;
//               size: CSSNumber;
//               strokeWidth: CSSNumber;
//             };
//             small: {
//               borderWidth: CSSNumber;
//               marginSize: CSSMargin;
//               padding: CSSNumber;
//               size: CSSNumber;
//               strokeWidth: CSSNumber;
//             };
//             medium: {
//               borderWidth: CSSNumber;
//               marginSize: CSSMargin;
//               padding: CSSNumber;
//               size: CSSNumber;
//               strokeWidth: CSSNumber;
//             };
//             large: {
//               borderWidth: CSSNumber;
//               marginSize: CSSMargin;
//               padding: CSSNumber;
//               size: CSSNumber;
//               strokeWidth: CSSNumber;
//             };
//             xLarge: {
//               borderWidth: CSSNumber;
//               marginSize: CSSMargin;
//               padding: CSSNumber;
//               size: CSSNumber;
//               strokeWidth: CSSNumber;
//             };
//           };

//           // TODO: implement these!
//           Tag: {
//             capitalization: 'uppercase' | 'lowercase' | 'sentence' | 'title';
//             colorPosition: 'background' | 'border';
//             borderRadius: CSSNumber;
//             padding: String; // 'toUnits(theme.spacing.padding.xSmall) toUnits(theme.spacing.padding.small)';
//           };
//         };
//       };

//       // All themeable typography variables go here.
//       typography: {
//         fonts: {
//           body: String;
//           heading: String;
//           interfaceUI: String;
//         };

//         fontWeights: {
//           body: CSSNumber;
//           bodyBold: CSSNumber;
//           heading: CSSNumber;
//           pageTitle: CSSNumber;
//           subtitle: CSSNumber;
//           interfaceUI: CSSNumber;
//           interfaceUIBold: CSSNumber;
//         };

//         baseSizes: {
//           desktop: CSSNumber;
//           mobile: CSSNumber;
//         };

//         scaleModifiers: {
//           desktop: CSSNumber;
//           mobile: CSSNumber;
//         };

//         lineHeights: {
//           heading: CSSNumber;
//           body: CSSNumber;
//           interfaceUI: CSSNumber;
//         };
//       };

//       // All themeable spacing variables go here.
//       // 1rem = 10px.
//       spacing: {
//         margin: {
//           none: CSSNumber;
//           xxSmall: CSSNumber;
//           xSmall: CSSNumber;
//           small: CSSNumber;
//           medium: CSSNumber;
//           large: CSSNumber;
//           xLarge: CSSNumber;
//           xxLarge: CSSNumber;
//         };

//         padding: {
//           none: CSSNumber;
//           xxSmall: CSSNumber;
//           xSmall: CSSNumber;
//           small: CSSNumber;
//           medium: CSSNumber;
//           large: CSSNumber;
//           xLarge: CSSNumber;
//           xxLarge: CSSNumber;
//         };
//       };
//     }
//   }
// }

export {};
