import { css } from '@emotion/core';
import classnames from 'classnames';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { bodyStyles } from 'styles';
import { useTheme } from 'themes';

export const ComponentClassName = 'Nautilus-Paragraph';

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

export const Paragraph = (props) => {
  const {
    children,
    className,
    dark,
    inverse,
    large,
    light,
    small,
    unstyled,
    ...otherProps
  } = props;

  qualityControl(props);

  const theme = useTheme();

  return (
    <p
      className={classnames(ComponentClassName, className)}
      css={
        unstyled
          ? undefined
          : css`
              ${bodyStyles({
                large,
                small,
                inverse,
                dark,
                light,
                theme,
              })}
            `
      }
      {...otherProps}
    >
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  children: undefined,
  className: undefined,
  large: false,
  small: false,
  inverse: false,
  dark: false,
  light: false,
  unstyled: false,
};

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
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
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Paragraph;

export default Paragraph;
