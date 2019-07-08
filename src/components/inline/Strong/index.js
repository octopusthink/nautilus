import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

export const Strong = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <strong ref={ref} {...otherProps}>
      {children}
    </strong>
  );
});

export const styles = (props) => {
  const { theme } = props;

  return css`
    background: ${theme.colors.text.strongBackground};
    color: ${theme.colors.text.strong};
    font-weight: ${theme.typography.fontWeights.bodyBold};
  `;
};

Strong.defaultProps = {
  children: undefined,
};

Strong.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Strong;

Strong.displayName = 'Strong';

export default styled(Strong)(styles);
