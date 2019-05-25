import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';
import { bodySmall, bodyMedium, bodyLarge } from 'themes/mixins';

export const Paragraph = ({
  children,
  large,
  small,
  inverse,
  dark,
  light,
  ...otherProps
}) => {
  const theme = useTheme();

  return (
    <p
      css={css`
        ${css(bodyMedium(theme))};
        color: ${theme.colors.text.default};
        margin: 0 0 4rem;

        &:last-of-type {
          margin-bottom: 0;
        }

        ${large &&
          css`
            ${css(bodyLarge(theme))};
          `}

        ${small &&
          css`
            ${css(bodySmall(theme))};
          `}

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
      `}
      {...otherProps}
    >
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  children: undefined,
  large: false,
  small: false,
  inverse: false,
  dark: false,
  light: false,
};

Paragraph.propTypes = {
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

export default Paragraph;
