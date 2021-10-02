import React from 'react';
import PropTypes from 'prop-types';

const MultiValueLabel = (props) => {
  const { children } = props;

  return <span>{children}</span>;
};

MultiValueLabel.defaultProps = {
  children: undefined,
};

MultiValueLabel.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

MultiValueLabel.displayName = 'MultiValueLabel';

export default MultiValueLabel;
