import { css } from '@emotion/core';
import { ComboboxOption as ReachComboboxOption, ComboboxOptionText } from '@reach/combobox';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ListItem from '../List/Item';

export const ComponentClassName = 'Nautilus-ComboBoxOption';

export const Option = (props) => {
  const { children, className, prefix, suffix, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <ReachComboboxOption
      as="span"
      css={css`
        &[data-highlighted] .Nautilus-ComboBoxOptionListItem {
          background: ${theme.colors.neutral.grey200};
        }
      `}
      value={children}
      {...otherProps}
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
      >
        {prefix}
        <ComboboxOptionText>{children}</ComboboxOptionText>
        {suffix}
      </ListItem>
    </ReachComboboxOption>
  );
};

Option.defaultProps = {
  className: undefined,
  prefix: undefined,
  suffix: undefined,
  unstyled: false,
};

Option.propTypes = {
  /** @ignore */
  children: PropTypes.string.isRequired,
  /** @ignore */
  className: PropTypes.string,
  /** Content to be placed before the text. */
  prefix: PropTypes.node,
  /** Content to be placed after the text. */
  suffix: PropTypes.node,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Option;

export default Option;
