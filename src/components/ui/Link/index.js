import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Link = (props) => {
  const { children, ...otherProps } = props;

  return <ReactRouterLink {...otherProps}>{children}</ReactRouterLink>;
};

export const styles = () => {
  return css``;
};

Link.defaultProps = {
  children: undefined,
};

Link.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Link;

export default styled(Link)(styles);
