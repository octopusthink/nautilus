// We only use react-testing-library in development, so ignore this linting
// error.
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import React from 'react';

import { Nautilus } from '../src/components';
import { nautilus as nautilusDefaultTheme, themePropTypes } from '../src/themes';

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
