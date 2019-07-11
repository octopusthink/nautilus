// We only use react-testing-library in development, so ignore this linting
// error.
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import PropTypes from 'prop-types';
import React from 'react';
import { Router } from 'react-router-dom';

import { Nautilus } from 'components';
import { nautilus as nautilusDefaultTheme, themePropTypes } from 'themes';

// Wrap `react-testing-library`'s `render` function with our providers.
const NautilusProviders = ({ children, theme }) => {
  return <Nautilus theme={theme}>{children}</Nautilus>;
};

NautilusProviders.defaultProps = {
  children: undefined,
  theme: nautilusDefaultTheme,
};

NautilusProviders.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  theme: themePropTypes,
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: NautilusProviders, ...options });
};

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  return {
    ...customRender(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export const muteConsole = ({ times, type } = {}) => {
  Array.from({ length: times }).forEach(() => {
    global.console[type].mockImplementationOnce(() => jest.fn());
  });
};

// Export jest-axe helpers.
export { axe } from 'jest-axe';

// Re-export everything else as normal.
export * from '@testing-library/react';

// override render method
export { customRender as render };
