import PropTypes from 'prop-types';
import React from 'react';

import { StyledParagraph, paragraphSizes, paragraphColors } from './Paragraph.styles';

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
  /** If set, removes margin on Paragraph instance */
  noMargin: PropTypes.bool,
  /** Size of the Paragraph. Options are 'small', 'medium', 'large' */
  size: PropTypes.oneOf(ParagraphSizes),
};

Paragraph.defaultProps = {
  color: 'dark',
  size: 'medium',
};
