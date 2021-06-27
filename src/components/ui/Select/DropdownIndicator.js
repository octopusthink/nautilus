import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import { useTheme } from '../../../themes';
import { toUnits } from '../../../styles';

const DropdownIndicator = (props) => {
  const { isFocused, selectProps } = props;
  const theme = useTheme();

  if (selectProps.isMulti) {
    return isFocused ? (
      <span />
    ) : (
      <Icon
        name="plus"
        background={theme.colors.neutral.grey0}
        css={css`
          margin: -${toUnits(theme.spacing.margin.xxSmall)} 0;

          &:hover {
            cursor: pointer;
          }
        `}
        noMargin
        small
      />
    );
  }

  return (
    <Icon
      name={selectProps.menuIsOpen ? 'chevron-up' : 'chevron-down'}
      css={css`
        margin: 0;
      `}
    />
  );
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
