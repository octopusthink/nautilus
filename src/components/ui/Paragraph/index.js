import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { bodyStyles } from 'styles';

export const Paragraph = (props) => {
  const { children, large, small, inverse, dark, light, ...otherProps } = props;

  return <p {...otherProps}>{children}</p>;
};

export const styles = ({ theme, ...otherProps }) => {
  return css`
    ${bodyStyles({ ...otherProps, theme })}
  `;
};

Paragraph.defaultProps = {
  children: undefined,
  large: false,
  small: false,
  inverse: false,
  dark: false,
  light: false,
};

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Increase the visual prominence of the paragraph. */
  large: PropTypes.bool,
  /** Decrease the visual prominence of the paragraph. */
  small: PropTypes.bool,
  /** Inverse text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Darken text colour. */
  dark: PropTypes.bool,
  /** Lighten text colour. */
  light: PropTypes.bool,
};

export const { defaultProps, propTypes } = Paragraph;

export default styled(Paragraph)(styles);
