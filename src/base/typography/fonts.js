// ----------------------------------------
// Font Styles
//
// https://ether.thescenery.co/typography/
//
//

import { css } from 'styled-components';

export const HarrietDisplay = {
  light: css`
    font-family: "Harriet Display", Georgia, serif;
    font-style: normal;
    font-weight: 300;
  `,
  regular: css`
    font-family: "Harriet Display", Georgia, serif;
    font-style: normal;
    font-weight: 400;
  `,
  bold: css`
    font-family: "Harriet Display", Georgia, serif;
    font-style: normal;
    font-weight: 600;
  `,
  italic: css`
    font-family: "Harriet Display", Georgia, serif;
    font-style: italic;
    font-weight: 300;
  `,
};

export const HarrietText = {
  italic: css`
    font-family: "Harriet Text", Georgia, serif;
    font-style: italic;
    font-weight: 400;
  `,
  regular: css`
    font-family: "Harriet Text", Georgia, serif;
    font-style: normal;
    font-weight: 300;
  `,
  bold: css`
    font-family: "Harriet Text", Georgia, serif;
    font-style: normal;
    font-weight: 500;
  `,
};

export const National = {
  light: css`
    font-family: "National 2 Test", sans-serif;
    font-style: normal;
    font-weight: 300;
  `,
  regular: css`
    font-family: "National 2 Test", sans-serif;
    font-style: normal;
    font-weight: 400;
  `,
  bold: css`
    font-family: "National 2 Test", sans-serif;
    font-style: normal;
    font-weight: 700;
  `,
};

export const systemFonts = {
  regular: css`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-style: normal;
    font-weight: 400;
  `,
  bold: css`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-style: normal;
    font-weight: 600;
  `,
};

const fontFamilies = {
  systemFonts: {
    ...systemFonts,
  },

  HarrietText: {
    ...HarrietText,
  },

  HarrietDisplay: {
    ...HarrietDisplay,
  },

  National: {
    ...National,
  },
};

export default fontFamilies;
