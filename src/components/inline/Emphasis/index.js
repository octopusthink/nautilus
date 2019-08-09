import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';

export const Emphasis = (props) => {
  const { children, ...otherProps } = props;

  const theme = useTheme();

  return (
    <em
      css={css`
        background: ${theme.colors.text.emphasisBackground};
        color: ${theme.colors.text.emphasis};
        font-style: italic;
      `}
      {...otherProps}
    >
      {children}
    </em>
  );
};

Emphasis.defaultProps = {
  children: undefined,
};

Emphasis.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Emphasis;

export default Emphasis;
