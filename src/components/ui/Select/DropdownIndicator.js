import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import { useTheme } from '../../../themes';

const DropdownIndicator = (props) => {
  const { selectProps } = props;
  const theme = useTheme();

  if (selectProps.isMulti) {
    return <Icon name="plus" background={theme.colors.neutral.grey0} small noMargin />;
  }

  return <Icon name={selectProps.menuIsOpen ? 'chevron-up' : 'chevron-down'} />;
};

DropdownIndicator.defaultProps = {
  selectProps: undefined,
};

DropdownIndicator.propTypes = {
  /* @ignore Don't output any CSS styles. */
  // eslint-disable-next-line react/forbid-prop-types
  selectProps: PropTypes.object,
};

export default DropdownIndicator;
