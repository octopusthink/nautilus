import PropTypes from 'prop-types';
import React from 'react';

export const Paragraph = ({ children, ...otherProps }) => {
  return <p {...otherProps}>{children}</p>;
};

Paragraph.defaultProps = {
  children: undefined,
};

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default Paragraph;
