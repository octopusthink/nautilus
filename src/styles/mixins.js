import { css } from '@emotion/core';

import { body } from './typeTokens';

export const bodyStyles = ({ dark, inverse, large, light, small, theme }) => {
  return css`
    color: ${theme.colors.text.default};
    margin: 0 0 ${theme.spacing.margin.m};
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
