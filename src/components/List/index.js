import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { bodySmall, bodyMedium, bodyLarge } from 'themes/mixins';

export const List = ({
  children,
  large,
  small,
  inverse,
  dark,
  light,
  ...otherProps
}) => {
  return <ul {...otherProps}>{children}</ul>;
};

List.defaultProps = {
  children: undefined,
  large: false,
  small: false,
  inverse: false,
  dark: false,
  light: false,
};

List.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Increase the visual prominence of the paragraph. */
  large: PropTypes.bool,
  /** Decrease the visual prominence of the paragraph. */
  small: PropTypes.bool,
  /** Inverse text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Darken text colour. */
  dark: PropTypes.bool,
  /** Lighten text colour. */
  light: PropTypes.bool,
};

export default styled(List)(({ dark, inverse, large, light, small, theme }) => {
  return css`
      color: ${theme.colors.text.default};
      margin: 0 0 ${theme.spacing.margin.m};
      ${small && bodySmall(theme)};
      ${!small && !large && bodyMedium(theme)};
      ${large && bodyLarge(theme)};
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
});
