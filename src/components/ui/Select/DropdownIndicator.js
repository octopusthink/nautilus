import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const DropdownIndicator = (props) => {
  const { isFocused, selectProps } = props;

  if (selectProps.isMulti) {
    return isFocused ? null : <Icon name="plus" />;
  }

  return <Icon name={selectProps.menuIsOpen ? 'chevron-up' : 'chevron-down'} />;
};

DropdownIndicator.defaultProps = {
  selectProps: undefined,
};

DropdownIndicator.propTypes = {
  /** @ignore */
  isFocused: PropTypes.bool.isRequired,
  /** @ignore Don't output any CSS styles. */
  // eslint-disable-next-line react/forbid-prop-types
  selectProps: PropTypes.object,
};

export default DropdownIndicator;
