import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

export const Emphasis = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <em ref={ref} {...otherProps}>
      {children}
    </em>
  );
});

export const styles = (props) => {
  const { theme } = props;

  return css`
    background: ${theme.colors.text.emphasisBackground};
    color: ${theme.colors.text.emphasis};
    font-style: italic;
  `;
};

Emphasis.defaultProps = {
  children: undefined,
};

Emphasis.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Emphasis;

Emphasis.displayName = 'Emphasis';

export default styled(Emphasis)(styles);
