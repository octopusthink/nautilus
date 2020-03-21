import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from 'styles';
import { useTheme } from 'themes';
//import Item, { ComponentClassName as ItemClassName } from './Item';
import ListItem from 'components/ui/List/Item';

export const ComponentClassName = 'Nautilus-ComboBoxOption';

export const Option = (props) => {
  const { children, className, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <ListItem
      className={classnames(ComponentClassName, className)}
      css={
        unstyled
          ? undefined
          : css`
              width: 100%;
              line-height: 2.4rem;
              border-bottom: 1px solid ${theme.colors.neutral.grey200};
              padding: ${toUnits(theme.spacing.padding.medium)};
            `
      }
      unstyled
      {...otherProps}
    >
      {children}
    </ListItem>
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
};

export const { defaultProps, propTypes } = Option;

export default Option;
