import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';

export const Paragraph = ({ children, ...otherProps }) => {
  const theme = useTheme();

  return (
    <p
      css={css`
        font-family: ${theme.typography.bodyFont};
      `}
      {...otherProps}
    >
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  children: undefined,
};

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default Paragraph;
