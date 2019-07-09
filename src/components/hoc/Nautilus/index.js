import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';

import { nautilus as nautilusDefaultTheme, themePropTypes } from 'themes';

export const Nautilus = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            /* For the love of everything, use better box-sizing by default. */
            box-sizing: border-box;
          }

          html {
            /* Set base font size for rem units to inherit. */
            font-size: 62.5%;

            /* Makes type rendering look crisper. */
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;

            /* Enable kerning and optional ligatures. */
            text-rendering: optimizeLegibility;

            /* Disable auto-enlargement of small text in Safari. */
            text-size-adjust: 100%;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};

Nautilus.defaultProps = {
  children: undefined,
  theme: nautilusDefaultTheme,
};

Nautilus.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Theme object used to style this instance of Nautilus and its components. */
  theme: themePropTypes,
};

export default Nautilus;
