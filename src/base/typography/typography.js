// ----------------------------------------
// Typography Variables
//
// https://ether.thescenery.co/typography/
//
//

import { css } from 'styled-components';

import fonts from './fonts';
import fontSizes from './fontSizes';

const typography = {
  // Headings
  headingXXLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size6};
    line-height: 1;
  `,
  headingXLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size5};
    line-height: 1;
  `,
  headingLarge: css`
    ${fonts.primaryBold};
    ${fontSizes.size4};
    line-height: 1.2;
  `,
  headingMedium: css`
    ${fonts.primaryRegular};
    ${fontSizes.size3};
    line-height: 1.2;
  `,
  headingSmall: css`
    ${fonts.primaryRegular};
    ${fontSizes.size2};
    line-height: 1.4;
  `,
  headingXSmall: css`
    ${fonts.interfaceBold};
    ${fontSizes.size1};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
  `,
  headingXXSmall: css`
    ${fonts.interfaceBold};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
  `,

  // Body
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
  body: css`
    ${fonts.bodyRegular};
    ${fontSizes.size1};
    line-height: 1.6;
  `,
  finePrint: css`
    ${fonts.bodyRegular};
    ${fontSizes.size0};
    line-height: 1.6;
  `,
};

export default typography;
