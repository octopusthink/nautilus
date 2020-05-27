import PropTypes from 'prop-types';
import React from 'react';

import Nautilus from '../../../src/components/hoc/Nautilus';

// This component wraps example content in code blocks (eg wrapped in ``` in
// Markdown).
export const Wrapper = ({ children }) => {
  return <Nautilus>{children}</Nautilus>;
};

Wrapper.defaultProps = {
  children: undefined,
};

Wrapper.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default Wrapper;
