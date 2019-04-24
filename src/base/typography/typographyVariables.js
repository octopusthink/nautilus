// ----------------------------------------
// Typography Variables
//
// https://ether.thescenery.co/typography/
//
//

import { css } from 'styled-components';

import fonts from './fonts';
import fontSizes from './fontSizes';
import spacerSizes from '../spacing';

export const headingTypography = {
  title: css`
    ${fonts.primaryBold};
    ${fontSizes.size6};
    line-height: 1;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  large: css`
    ${fonts.primaryBold};
    ${fontSizes.size5};
    line-height: 1;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  medium: css`
    ${fonts.primaryBold};
    ${fontSizes.size4};
    line-height: 1;
    margin: 0 0 ${spacerSizes.medium};
  `,
  small: css`
    ${fonts.primaryBold};
    ${fontSizes.size3};
    line-height: 1.2;
    margin: 0 0 ${spacerSizes.medium};
  `,
  subheading: css`
    ${fonts.primaryLight};
    font-style: italic;
    ${fontSizes.size2};
    line-height: 1.4;
    margin: 0 0 ${spacerSizes.small};
  `,
};

export const metadataTypography = {
  large: css`
    ${fonts.primaryLight};
    ${fontSizes.size1};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0 0 ${spacerSizes.small};
  `,
  small: css`
    ${fonts.primaryLight};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0 0 ${spacerSizes.small};
  `,
};

export const bodyTypography = {
  bodyLarge: css`
    ${fonts.bodyRegular};
    ${fontSizes.size2};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  bodyItalic: css`
    ${fonts.bodyItalic};
    ${fontSizes.size2};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  bodyBold: css`
    ${fonts.bodyBold};
    ${fontSizes.size2};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  bodyMedium: css`
    ${fonts.bodyRegular};
    ${fontSizes.size1};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  bodySmall: css`
    ${fonts.bodyRegular};
    ${fontSizes.size0};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
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
