import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';

import { nautilus } from 'themes';

export const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={nautilus}>
      <Global
        styles={css`
          html {
            /* Make type rendering look crisper */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            /* Disable auto-enlargement of small text in Safari */
            text-size-adjust: 100%;

            /* Enable kerning and optional ligatures */
            text-rendering: optimizeLegibility;

            /* Set base font size for rem units to inherit */
            font-size: 62.5%;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};

ThemeWrapper.defaultProps = {
  children: undefined,
};

ThemeWrapper.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default ThemeWrapper;
