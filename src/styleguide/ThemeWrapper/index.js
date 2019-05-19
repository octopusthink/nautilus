import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';

import { nautilus } from 'themes';

export const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={nautilus}>{children}</ThemeProvider>;
};

ThemeWrapper.defaultProps = {
  children: undefined,
};

ThemeWrapper.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default ThemeWrapper;
