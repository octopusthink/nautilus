// ----------------------------------------
// Font Sizes
//
// https://ether.thescenery.co/typography/
//
// The font-size value is in ex units.
// For more information on this unit, see https://developer.mozilla.org/en-US/docs/Web/CSS/length#ex
//

import { css } from 'styled-components';

import mediaQueries from '../breakpoints';

// Edit these scale values to generate all system sizes. Add or remove as many as your system needs.
const desktopScale = 1.3; // Desktop scale modifier
const mobileScale = 1.28; // Mobile scale modifier

const dBase0 = 2.8; // Fine Print + XS Heading
const dBase1 = dBase0 * desktopScale; // Body + Small Heading
const dBase2 = dBase1 * desktopScale; // Large Body + Heading
const dBase3 = dBase2 * desktopScale; // Large Heading
const dBase4 = dBase3 * desktopScale; // XL Heading
const dBase5 = dBase4 * desktopScale; // XXL Heading
const dBase6 = dBase5 * desktopScale; // XXXL Heading

const mBase0 = 1.7; // Fine Print + XS Heading
const mBase1 = mBase0 * mobileScale; // Body + Small Heading
const mBase2 = mBase1 * mobileScale; // Large Body + Heading
const mBase3 = mBase2 * mobileScale; // Large Heading
const mBase4 = mBase3 * mobileScale; // XL Heading
const mBase5 = mBase4 * mobileScale; // XXL Heading
const mBase6 = mBase5 * mobileScale; // XXXL Heading

// Create font-size values from calculated scale/base values above
// Media queries are optional, but we recommend them for better font control at smaller resolutions
const fontSizes = {
  size0: css`
    font-size: ${mBase0}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase0}ex;
    }
  `,
  size1: css`
    font-size: ${mBase1}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase1}ex;
    }
  `,
  size2: css`
    font-size: ${mBase2}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase2}ex;
    }
  `,
  size3: css`
    font-size: ${mBase3}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase3}ex;
    }
  `,
  size4: css`
    font-size: ${mBase4}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase4}ex;
    }
  `,
  size5: css`
    font-size: ${mBase5}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase5}ex;
    }
  `,
  size6: css`
    font-size: ${mBase6}ex;
    ${mediaQueries.sm} {
      font-size: ${dBase6}ex;
    }
  `,
};

export default fontSizes;
