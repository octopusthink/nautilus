import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';

export const Strong = (props) => {
  const { children, ...otherProps } = props;

  const theme = useTheme();

  return (
    <strong
      css={css`
        background: ${theme.colors.text.strongBackground};
        color: ${theme.colors.text.strong};
        font-weight: ${theme.typography.fontWeights.bodyBold};
      `}
      {...otherProps}
    >
      {children}
    </strong>
  );
};

Strong.defaultProps = {
  children: undefined,
};

Strong.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Strong;

export default Strong;
