// ----------------------------------------
// Typography Variables
//
// These are typographic styles that are overwriteable by individual brands.
//
// https://ether.thescenery.co/typography/
//
//

import { css } from 'styled-components';

import { HarrietText, HarrietDisplay, systemFonts } from './fonts';
import fontSizes from './fontSizes';

const fonts = {
  heading: HarrietDisplay,
  body: HarrietText,
  interface: systemFonts,
};

export const headingTypography = {
  title: css`
    ${fonts.heading.bold};
    ${fontSizes.size6};
    line-height: 1;
  `,
  large: css`
    ${fonts.heading.bold};
    ${fontSizes.size5};
    line-height: 1;
  `,
  medium: css`
    ${fonts.heading.bold};
    ${fontSizes.size4};
    line-height: 1;
  `,
  small: css`
    ${fonts.heading.bold};
    ${fontSizes.size3};
    line-height: 1.2;
  `,
  subheading: css`
    ${fonts.heading.italic};
    ${fontSizes.size2};
    line-height: 1.4;
  `,
};

export const metadataTypography = {
  large: css`
    ${fonts.interface.bold};
    ${fontSizes.size1};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
  `,
  small: css`
    ${fonts.interface.regular};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
  `,
};

export const bodyTypography = {
  bodyLarge: css`
    ${fonts.bodyRegular};
    ${fontSizes.size2};
    line-height: 1.6;
  `,
  bodyItalic: css`
    ${fonts.bodyItalic};
    ${fontSizes.size2};
    line-height: 1.6;
  `,
  bodyBold: css`
    ${fonts.bodyBold};
    ${fontSizes.size2};
    line-height: 1.6;
  `,
  bodyMedium: css`
    ${fonts.bodyRegular};
    ${fontSizes.size1};
    line-height: 1.6;
  `,
  bodySmall: css`
    ${fonts.bodyRegular};
    ${fontSizes.size0};
    line-height: 1.6;
  `,
};

const typographyVariables = {
  headings: {
    ...headingTypography,
  },

  metadata: {
    ...metadataTypography,
  },

  body: {
    ...bodyTypography,
  },
};

export default typographyVariables;
