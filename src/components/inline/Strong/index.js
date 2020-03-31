import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../../themes';

const Strong = (props) => {
  const { children, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <strong
      css={
        unstyled
          ? undefined
          : css`
              background: ${theme.colors.text.strongBackground};
              color: ${theme.colors.text.strong};
              font-weight: ${theme.typography.fontWeights.bodyBold};
            `
      }
      {...otherProps}
    >
      {children}
    </strong>
  );
};

Strong.defaultProps = {
  children: undefined,
  unstyled: false,
};

Strong.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Strong;

export default Strong;
