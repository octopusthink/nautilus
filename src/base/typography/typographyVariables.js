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

//* Change to use groups for each, like colours, so:
// const bodyTypography

// const headingTypography

// const interfaceTypography
//*

const typographyVariables = {
  // PageTitle
  pageTitle: css`
    font-family: HarrietDisplay;
    font-size: 64px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: normal;
  `,

  // Headings
  headingXXLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size6};
    line-height: 1;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  headingXLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size5};
    line-height: 1;
    margin: 0 0 ${spacerSizes.medium};
  `,
  headingLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size4};
    line-height: 1.2;
    margin: 0 0 ${spacerSizes.medium};
  `,

  headingMedium: css`
    ${fonts.primaryLight};
    ${fontSizes.size4};
    line-height: 1.2;
    font-style: italic;
    margin: 0 0 ${spacerSizes.medium};
  `,
  headingSmall: css`
    ${fonts.primaryLight};
    font-style: italic;
    ${fontSizes.size2};
    line-height: 1.4;
    margin: 0 0 ${spacerSizes.small};
  `,

  headingXSmall: css`
    ${fonts.primaryLight};
    ${fontSizes.size1};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0 0 ${spacerSizes.small};
  `,
  headingXXSmall: css`
    ${fonts.primaryLight};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0 0 ${spacerSizes.small};
  `,

  // Body
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
  body: css`
    ${fonts.bodyRegular};
    ${fontSizes.size1};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
  finePrint: css`
    ${fonts.bodyRegular};
    ${fontSizes.size0};
    line-height: 1.6;
    margin: 0 0 ${spacerSizes.xlarge};
  `,
};

export default typographyVariables;
