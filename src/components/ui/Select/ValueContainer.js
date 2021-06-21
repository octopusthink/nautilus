import React from 'react';
import PropTypes from 'prop-types';

const ValueContainer = (props) => {
  const { children } = props;

  return <span>{children}</span>;
};

ValueContainer.defaultProps = {
  children: undefined,
};

ValueContainer.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default ValueContainer;
