import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import spacerSizes from '../../../base/spacing';
import mediaQueries from '../../../base/breakpoints';

export const Spacer = ({ debug, horizontal, responsiveSizes, size, ...others }) => {
  const spacerBackground = debug ? 'pink' : 'transparent';
  const spacerPadding = horizontal ? 'padding-right' : 'padding-bottom';
  const spacerDisplay = horizontal ? 'inline-block' : 'block';
  const spacerHeight = (horizontal && debug) ? '5px' : '0';

  // mutate the padding based on mediaQuery settings
  const paddingSize = spacerSizes[size] || '0px';
  let responsivePaddingSizes = css``;

  if (responsiveSizes) {
    responsivePaddingSizes = Object.entries(responsiveSizes).map((respSize) => {
      const [bp, sp] = respSize;
      return css`
        ${mediaQueries[bp]} {
          ${spacerPadding}: ${spacerSizes[sp]};
        }
      `;
    });
  }

  const StyledSpacer = styled.div`
    background-color: ${spacerBackground};
    display: ${spacerDisplay};
    height: ${spacerHeight};
    ${spacerPadding}: ${paddingSize};
    ${responsivePaddingSizes};
    vertical-align: middle;
  `;

  return (
    <StyledSpacer {...others} />
  );
};

export const SpacerSizes = Object.keys(spacerSizes);

Spacer.propTypes = {
  /** If set, adds a light background color to the spacer for debugging purposes */
  debug: PropTypes.bool,
  /** Sets to horizontal spacing mode */
  horizontal: PropTypes.bool,
  /** Object containing breakpoint-spacer size key-value pairs. See below for example. */
  responsiveSizes: PropTypes.shape({
    xs: PropTypes.oneOf(SpacerSizes),
    sm: PropTypes.oneOf(SpacerSizes),
    md: PropTypes.oneOf(SpacerSizes),
    lg: PropTypes.oneOf(SpacerSizes),
    xl: PropTypes.oneOf(SpacerSizes),
    xxl: PropTypes.oneOf(SpacerSizes),
  }),
  /** Size of the spacer. Options are 'none', '2xsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', and '2xlarge' */
  size: PropTypes.oneOf(SpacerSizes),
};

Spacer.defaultProps = {
  size: 'medium',
};
