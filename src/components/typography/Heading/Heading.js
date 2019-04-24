import PropTypes from 'prop-types';
import React from 'react';

import { headingSizes, headingColors, headingElements } from './Heading.styles';
import spacerSizes from '../../../base/spacing';

export const Heading = ({ children, color, level, size, margin, padding, ...others }) => {
  const HeadingElement = headingElements[`h${level}`];
  return (
    <HeadingElement
      color={color}
      size={size}
      margin={margin}
      padding={padding}
      {...others}
    >
      {children}
    </HeadingElement>
  );
};

export const HeadingColors = Object.keys(headingColors);
export const HeadingLevels = [0, 1, 2, 3, 4, 5, 6];
export const HeadingSizes = Object.keys(headingSizes);

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Heading. Options are 'dark', 'medium', 'light', 'accent', 'danger', and 'success' */
  color: PropTypes.oneOf(HeadingColors),
  /** Semantic hierarchy level of the <h> element in the markup (ex: <h3>) */
  level: PropTypes.oneOf(HeadingLevels),
  /** Visual size of the Heading. Options are 'small', 'medium', 'large'. */
  size: PropTypes.oneOf(HeadingSizes),
  /** Margin is used to set custom margins as needed. Try to only use bottom margins. */
  margin: PropTypes.string,
  /** Padding is used to set padding. Only use padding when a margin won't work, and stick to bottom padding if possible. */
  padding: PropTypes.string,
};

Heading.defaultProps = {
  color: 'dark',
  level: 2,
  size: 'medium',
  margin: `0 0 ${spacerSizes.small}`,
  padding: '0',
};
