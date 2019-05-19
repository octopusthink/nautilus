import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
// We only use react-testing-library in development, so ignore this linting
// error.
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-testing-library';

import { nautilus } from 'themes';

// Wrap `react-testing-library`'s `render` function with our providers.
const NautilusProviders = ({ children }) => {
  return <ThemeProvider theme={nautilus}>{children}</ThemeProvider>;
};

NautilusProviders.defaultProps = {
  children: undefined,
};

NautilusProviders.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: NautilusProviders, ...options });
};

// Re-export everything else as normal.
export * from 'react-testing-library';

// override render method
export { customRender as render };
