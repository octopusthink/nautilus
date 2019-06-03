import { css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import theme from 'styleguide/theme';

export function Code({ children }) {
  return <code  css={css`
    background: ${theme.colors.neutral.grey200};
    padding: ${theme.spacing.padding.xs};
    font-size: 0.8em;
    font-weight: 500;
    font-family: Menlo, Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
    `}>{children}</code>;
}
Code.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Code;
