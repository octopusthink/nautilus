import PropTypes from 'prop-types';
import React from 'react';

import { StyledParagraph, paragraphSizes, paragraphColors } from './Paragraph.styles';
import spacerSizes from '../../../base/spacing';

export const Paragraph = ({ children, color, noMargin, size, ...others }) => (
  <StyledParagraph
    color={color}
    noMargin={noMargin}
    size={size}
    {...others}
  >
    {children}
  </StyledParagraph>
);

export const ParagraphSizes = Object.keys(paragraphSizes);
export const ParagraphColors = Object.keys(paragraphColors);

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Paragraph. Options are 'dark', 'medium', 'light', 'accent', 'success', and 'danger' */
  color: PropTypes.oneOf(ParagraphColors),
  /** Size of the Paragraph. Options are 'small', 'medium', 'large' */
  size: PropTypes.oneOf(ParagraphSizes),
  /** Margin is used to set custom margins as needed. Try to only use bottom margins. */
  margin: PropTypes.string,
};

Paragraph.defaultProps = {
  color: 'dark',
  size: 'medium',
  margin: `0 0 ${spacerSizes.xlarge}`,
};
