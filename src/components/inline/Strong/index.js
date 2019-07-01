import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

export const Strong = (props) => {
  const { children, ...otherProps } = props;

  return <strong {...otherProps}>{children}</strong>;
};

export const styles = () => {
  return css``;
};

Strong.defaultProps = {
  children: undefined,
};

Strong.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Strong;

export default styled(Strong)(styles);
