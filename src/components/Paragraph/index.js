import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { textStyles } from 'themes/mixins';

export const Paragraph = ({
  children,
  large,
  small,
  inverse,
  dark,
  light,
  ...otherProps
}) => {
  return <p {...otherProps}>{children}</p>;
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

const StyledParagraph = styled(Paragraph)(textStyles);

export default StyledParagraph;
