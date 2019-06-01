import React from 'react';
import PropTypes from 'prop-types';

export function Code({ children }) {
  return <code>{children}</code>;
}
Code.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Code;
