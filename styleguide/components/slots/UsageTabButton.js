import React from 'react';
import PropTypes from 'prop-types';
import TabButton from 'rsg-components/TabButton';
import isEmpty from 'lodash/isEmpty';

const UsageTabButton = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { component } = props.props;
  const showButton = !isEmpty(component.props) || !isEmpty(component.methods);
  return showButton ? <TabButton {...props}>Props</TabButton> : null;
};

UsageTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({
    props: PropTypes.array,
    methods: PropTypes.array,
    component: PropTypes.node,
  }).isRequired,
  active: PropTypes.bool,
};

export default UsageTabButton;
