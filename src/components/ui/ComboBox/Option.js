import { css } from '@emotion/core';
import {
  ComboboxOption as ReachComboboxOption,
  ComboboxOptionText as ReachComboboxOptionText,
} from '@reach/combobox';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ListItem from '../List/Item';

export const ComponentClassName = 'Nautilus-ComboBoxOption';

export const Option = (props) => {
  const { children, className, unstyled, text, ...otherProps } = props;

  const theme = useTheme();

  return (
    <ReachComboboxOption
      as="span"
      css={css`
        &[data-highlighted] .Nautilus-ComboBoxOptionListItem {
          background: ${theme.colors.neutral.grey200};
        }
      `}
      value={text}
    >
      <ListItem
        className={classnames(ComponentClassName, className, 'Nautilus-ComboBoxOptionListItem')}
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
        {...otherProps}
      >
        {children}
        {!children && <ReachComboboxOptionText>{text}</ReachComboboxOptionText>}
      </ListItem>
    </ReachComboboxOption>
  );
};

Option.defaultProps = {
  children: undefined,
  className: undefined,
  unstyled: false,
};

Option.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
  /** Plain-text value of this option, used for autocomplete, highlighting, search, etc. */
  text: PropTypes.string.isRequired,
};

export const { defaultProps, propTypes } = Option;

export default Option;
