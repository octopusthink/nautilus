import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

export const Emphasis = (props) => {
  const { children, ...otherProps } = props;

  return <em {...otherProps}>{children}</em>;
};

export const styles = () => {
  return css``;
};

Emphasis.defaultProps = {
  children: undefined,
};

Emphasis.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Emphasis;

export default styled(Emphasis)(styles);
