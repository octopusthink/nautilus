import PropTypes from 'prop-types';
import React from 'react';

import { headingSizes, headingColors, headingElements } from './Heading.styles';

export const Heading = ({ children, color, level, size, ...others }) => {
  const HeadingElement = headingElements[`h${level}`];
  return (
    <HeadingElement
      color={color}
      size={size}
      {...others}
    >
      {children}
    </HeadingElement>
  );
};

export const HeadingColors = Object.keys(headingColors);
export const HeadingLevels = [1, 2, 3, 4, 5, 6];
export const HeadingSizes = Object.keys(headingSizes);

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Heading. Options are 'dark', 'medium', 'light', 'accent', 'danger', and 'success' */
  color: PropTypes.oneOf(HeadingColors),
  /** Hierarchy level of the Heading (ex: h3) */
  level: PropTypes.oneOf(HeadingLevels),
  /** Size of the Heading. Options are 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge' */
  size: PropTypes.oneOf(HeadingSizes),
};

Heading.defaultProps = {
  color: 'dark',
  level: 2,
  size: 'medium',
};
