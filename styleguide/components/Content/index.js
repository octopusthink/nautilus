import React from 'react';
import PropTypes from 'prop-types';

export function Content({ children }) {
  return <article>{children}</article>;
}

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
