import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';

import { nautilus as nautilusDefaultTheme, themePropTypes } from '../../../themes';
import { NautilusLinkComponentContext } from './context';

const Nautilus = (props) => {
  const { children, config, theme } = props;

  const { LinkComponent } = config;

  return (
    <NautilusLinkComponentContext.Provider value={LinkComponent}>
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
    </NautilusLinkComponentContext.Provider>
  );
};

Nautilus.defaultProps = {
  children: undefined,
  config: { LinkComponent: undefined },
  theme: nautilusDefaultTheme,
};

Nautilus.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Config values affect all component rendered underneath this `Nautilus` component. Used to set default `Link` components, etc. */
  config: PropTypes.shape({
    LinkComponent: PropTypes.elementType,
  }),
  /** Theme object used to style this instance of Nautilus and its components. */
  theme: themePropTypes,
};

export default Nautilus;
