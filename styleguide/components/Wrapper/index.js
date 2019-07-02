// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import PropTypes from 'prop-types';
import React from 'react';
import { Router } from 'react-router-dom';

import { Nautilus } from 'components';

// This component wraps example content in code blocks (eg wrapped in ``` in
// Markdown).
export const Wrapper = ({ children }) => {
  return (
    <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
      <Nautilus>
        {children}
      </Nautilus>
    </Router>
  );
};

Wrapper.defaultProps = {
  children: undefined,
};

Wrapper.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default Wrapper;
