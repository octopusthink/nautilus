import { css } from '@emotion/core';

import { toUnits } from './toUnits';
import { body } from './typeTokens';

export const bodyStyles = ({ dark, inverse, large, light, noMargin, small, theme }) => {
  return css`
    color: ${theme.colors.text.default};
    margin: 0 0 ${toUnits(theme.spacing.margin.medium)};

    ${noMargin &&
      css`
        margin: 0;
      `}

    ${small && body.small(theme)};
    ${!small && !large && body.medium(theme)};
    ${large && body.large(theme)};
    ${light &&
      css`
        color: ${theme.colors.text.light};
      `}
    ${dark &&
      css`
        color: ${theme.colors.text.dark};
      `}
    ${inverse &&
      css`
        color: ${theme.colors.text.inverse};
        ${light &&
          css`
            color: ${theme.colors.text.inverseLight};
          `}
        ${dark &&
          css`
            color: ${theme.colors.text.inverseDark};
          `}
      `}
  `;
};
