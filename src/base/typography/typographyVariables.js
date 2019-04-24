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

const smallCapsModifier = css`
  letter-spacing: 0.06rem;
  text-transform: uppercase;
`;

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
    ${fonts.interface.semibold};
    ${fontSizes.size1SC};
    line-height: 1.2;
    ${smallCapsModifier};
  `,
  small: css`
    ${fonts.interface.semibold};
    ${fontSizes.size0SC};
    line-height: 1.2;
    ${smallCapsModifier};
  `,
};

export const bodyTypography = {
  large: css`
    ${fonts.body.regular};
    ${fontSizes.size2};
    line-height: 1.6;
  `,
  medium: css`
    ${fonts.body.regular};
    ${fontSizes.size1};
    line-height: 1.6;
  `,
  small: css`
    ${fonts.body.regular};
    ${fontSizes.size0};
    line-height: 1.6;
  `,
  italic: css`
    ${fonts.body.italic};
  `,
  bold: css`
    ${fonts.body.bold};
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
