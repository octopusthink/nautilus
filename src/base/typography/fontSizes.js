// ----------------------------------------
// Font Sizes
//
// https://ether.thescenery.co/typography/
//
// The font-size value is in rem units.
// For more information on this unit, see https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem
//

import { css } from 'styled-components';

import mediaQueries from '../breakpoints';

// Edit these scale values to generate all system sizes. Add or remove as many as your system needs.
const desktopScale = 1.25; // Desktop scale modifier
const mobileScale = 1.15; // Mobile scale modifier

const desktopSize0 = 1.7; // Fine Print + XS Heading
// In order to get a whole-integer pixel number, we multiply by ten and round,
// then divide by ten again to get a rem value that works with our base size setting.
const desktopSize1 = (Math.round(desktopSize0 * 10 * desktopScale)) / 10; // Body + Small Heading
const desktopSize2 = (Math.round(desktopSize1 * 10 * desktopScale)) / 10; // Large Body + Heading
const desktopSize3 = (Math.round(desktopSize2 * 10 * desktopScale)) / 10; // Large Heading
const desktopSize4 = (Math.round(desktopSize3 * 10 * desktopScale)) / 10; // XL Heading
const desktopSize5 = (Math.round(desktopSize4 * 10 * desktopScale)) / 10; // XXL Heading
const desktopSize6 = (Math.round(desktopSize5 * 10 * desktopScale)) / 10; // XXXL Heading

const smallCapsModifier = 0.7; // Small-caps modifier.
const desktopSize0SC = (Math.round(desktopSize0 * 10 * desktopScale * smallCapsModifier)) / 10; // Body + Small Heading
const desktopSize1SC = (Math.round(desktopSize1 * 10 * desktopScale * smallCapsModifier)) / 10; // Body + Small Heading


const mobileSize0 = 1.6; // Fine Print + XS Heading
const mobileSize1 = mobileSize0 * mobileScale; // Body + Small Heading
const mobileSize2 = mobileSize1 * mobileScale; // Large Body + Heading
const mobileSize3 = mobileSize2 * mobileScale; // Large Heading
const mobileSize4 = mobileSize3 * mobileScale; // XL Heading
const mobileSize5 = mobileSize4 * mobileScale; // XXL Heading
const mobileSize6 = mobileSize5 * mobileScale; // XXXL Heading

// Create font-size values from calculated scale/base values above
// Media queries are optional, but we recommend them for better font control at smaller resolutions
const fontSizes = {
  size0: css`
    font-size: ${mobileSize0}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize0}rem;
    }
  `,
  size1: css`
    font-size: ${mobileSize1}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize1}rem;
    }
  `,
  size0SC: css`
    font-size: ${mobileSize0}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize0SC}rem;
    }
  `,
  size1SC: css`
    font-size: ${mobileSize1}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize1SC}rem;
    }
  `,
  size2: css`
    font-size: ${mobileSize2}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize2}rem;
    }
  `,
  size3: css`
    font-size: ${mobileSize3}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize3}rem;
    }
  `,
  size4: css`
    font-size: ${mobileSize4}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize4}rem;
    }
  `,
  size5: css`
    font-size: ${mobileSize5}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize5}rem;
    }
  `,
  size6: css`
    font-size: ${mobileSize6}rem;
    ${mediaQueries.sm} {
      font-size: ${desktopSize6}rem;
    }
  `,
};

export default fontSizes;
