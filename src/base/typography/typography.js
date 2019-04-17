// ----------------------------------------
// Typography Variables
//
// https://ether.thescenery.co/typography/
//
//

import { css } from 'styled-components';

import fonts from './fonts';
import fontSizes from './fontSizes';
import spacerSizes from './../spacing';

const typography = {
  // Headings
  headingXXLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size6};
    line-height: 1;
    margin-bottom: ${spacerSizes.xlarge};
  `,
  headingXLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size5};
    line-height: 1;
    margin-bottom: ${spacerSizes.medium};
  `,
  headingLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size4};
    line-height: 1.2;
    margin-bottom: ${spacerSizes.medium};
  `,
  headingMedium: css`
    ${fonts.primaryRegular};
    ${fontSizes.size3};
    line-height: 1.2;
    margin-bottom: ${spacerSizes.medium};
  `,
  headingSmall: css`
    ${fonts.primaryRegular};
    ${fontSizes.size2};
    line-height: 1.4;
    margin-bottom: ${spacerSizes.small};
  `,
  headingXSmall: css`
    ${fonts.interfaceBold};
    ${fontSizes.size1};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: ${spacerSizes.small};
  `,
  headingXXSmall: css`
    ${fonts.interfaceBold};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: ${spacerSizes.small};
  `,

  // Body
  bodyLarge: css`
    ${fonts.bodyRegular};
    ${fontSizes.size2};
    line-height: 1.6;
    margin-bottom: ${spacerSizes.xlarge};
  `,
  bodyItalic: css`
    ${fonts.bodyItalic};
    ${fontSizes.size2};
    line-height: 1.6;
    margin-bottom: ${spacerSizes.xlarge};
  `,
  bodyBold: css`
    ${fonts.bodyBold};
    ${fontSizes.size2};
    line-height: 1.6;
    margin-bottom: ${spacerSizes.xlarge};
  `,
  body: css`
    ${fonts.bodyRegular};
    ${fontSizes.size1};
    line-height: 1.6;
    margin-bottom: ${spacerSizes.xlarge};
  `,
  finePrint: css`
    ${fonts.bodyRegular};
    ${fontSizes.size0};
    line-height: 1.6;
    margin-bottom: ${spacerSizes.xlarge};
  `,
};

export default typography;
