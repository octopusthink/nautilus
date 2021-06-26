import { css } from '@emotion/react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ListItem from '../List/Item';

export const ComponentClassName = 'Nautilus-SelectOption';

export const Option = (props) => {
  const { children, className, innerProps, isFocused, onSelect, unstyled } = props;

  const theme = useTheme();

  return (
    <ListItem
      className={classnames(ComponentClassName, className, 'Nautilus-DropdownListItem')}
      css={
        unstyled
          ? undefined
          : css`
              cursor: pointer;
              padding: ${toUnits(theme.spacing.padding.small)};
              width: 100%;

              &:hover {
                background: ${theme.colors.neutral.grey200};
              }

              /* Matching segments of text; highlighted. */
              ${isFocused &&
              css`
                background: ${theme.colors.state.focusOutline};
                font-weight: bold;
              `}
            `
      }
      onClick={onSelect}
      unstyled
      {...innerProps}
    >
      {children}
    </ListItem>
  );
};

Option.defaultProps = {
  className: undefined,
  isFocused: false,
  onSelect: undefined,
  unstyled: false,
  value: undefined,
};

Option.propTypes = {
  /** @ignore */
  children: PropTypes.string.isRequired,
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  innerProps: PropTypes.object.isRequired,
  /** @ignore */
  isFocused: PropTypes.bool,
  /** Event handler when an item is selected. */
  onSelect: PropTypes.func,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
  /* @ignore The value used for this option. Can be a simple string or an object with a label and values. */
  value: PropTypes.oneOfType([
    PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.shape({ label: PropTypes.string, values: PropTypes.object }),
  ]),
};

export const { defaultProps, propTypes } = Option;

export default Option;
