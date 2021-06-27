import { css } from '@emotion/react';
import { ComboboxOption as ReachComboboxOption, ComboboxOptionText } from '@reach/combobox';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ListItem from '../List/Item';

export const ComponentClassName = 'Nautilus-ComboBoxOption';

export const Option = (props) => {
  const { children, className, unstyled, value, ...otherProps } = props;

  const theme = useTheme();

  return (
    <ReachComboboxOption
      as="span"
      css={css`
        &[data-highlighted] .Nautilus-DropdownListItem {
          background: ${theme.colors.neutral.grey200};
        }
      `}
      value={value || children}
      {...otherProps}
    >
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
                [data-user-value] {
                  background: ${theme.colors.state.focusOutline};
                  font-weight: bold;
                }
              `
        }
        unstyled
      >
        {!value && <ComboboxOptionText>{children}</ComboboxOptionText>}
        {value && children}
      </ListItem>
    </ReachComboboxOption>
  );
};

Option.defaultProps = {
  className: undefined,
  unstyled: false,
  value: undefined,
};

Option.propTypes = {
  /** @ignore */
  children: PropTypes.string.isRequired,
  /** @ignore */
  className: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
  /* @ignore The value used to match text. */
  value: PropTypes.string,
};

export const { defaultProps, propTypes } = Option;

export default Option;
