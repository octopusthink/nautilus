import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../../themes';

export const Emphasis = (props) => {
  const { children, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <em
      css={
        unstyled
          ? undefined
          : css`
              background: ${theme.colors.text.emphasisBackground};
              color: ${theme.colors.text.emphasis};
              font-style: italic;
            `
      }
      {...otherProps}
    >
      {children}
    </em>
  );
};

Emphasis.defaultProps = {
  children: undefined,
  unstyled: false,
};

Emphasis.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Emphasis;

export default Emphasis;
