import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';
import { bodySmall, bodyMedium, bodyLarge } from 'themes/mixins';

export const Paragraph = ({ children, large, small, ...otherProps }) => {
  const theme = useTheme();

  return (
    <p
      css={css`
        ${css(bodyMedium(theme))};

        ${large &&
          css`
            ${css(bodyLarge(theme))};
          `}

        ${small &&
          css`
            ${css(bodySmall(theme))};
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
};

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Increase the visual prominence of the paragraph. */
  large: PropTypes.bool,
  /** Decrease the visual prominence of the paragraph. */
  small: PropTypes.bool,
};

export default Paragraph;
