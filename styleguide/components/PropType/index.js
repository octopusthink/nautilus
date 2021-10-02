import React from 'react';
import PropTypes from 'prop-types';

export const PropType = ({ children }) => <span>{children}</span>;

PropType.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PropType;
