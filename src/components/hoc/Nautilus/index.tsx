import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React, { ReactNode } from 'react';

import { nautilusDefaultTheme } from '../../../themes';
import { NautilusLinkComponentContext } from './context';

interface Props {
  /** @ignore */
  children?: React.ReactNode;
  /** Config values affect all component rendered underneath this `Nautilus` component. Used to set default `Link` components, etc. */
  config?: {
    LinkComponent?: ReactNode;
  };
  /** Theme object used to style this instance of Nautilus and its components. */
  theme?: Theme;
}

const Nautilus = ({
  children,
  config = { LinkComponent: undefined },
  theme = nautilusDefaultTheme,
}: Props) => {
  const { LinkComponent } = config || {};

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

export default Nautilus;
