import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { bodyStyles } from 'styles';

export const qualityControl = (props) => {
  const { dark, large, light, small } = props;

  invariant(
    [dark, light].filter((prop) => prop).length <= 1,
    'Paragraph cannot have both `dark` and `light` props set.',
  );

  invariant(
    [large, small].filter((prop) => prop).length <= 1,
    'Paragraph cannot have both `large` and `small` props set.',
  );
};

export const Paragraph = forwardRef((props, ref) => {
  const { children, large, small, inverse, dark, light, ...otherProps } = props;

  qualityControl(props);

  return (
    <p ref={ref} {...otherProps}>
      {children}
    </p>
  );
});

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

Paragraph.displayName = 'Paragraph';

export const { defaultProps, propTypes } = Paragraph;

export default styled(Paragraph)(styles);
