import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from 'styles';
import { useTheme } from 'themes';

export const componentClassName = 'Nautilus-ListItem';

export const Item = (props) => {
  const { children, className, ...otherProps } = props;

  const theme = useTheme();

  return (
    <li
      className={classnames(componentClassName, className)}
      css={css`
        position: relative;
        margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)};
        &::before {
          position: absolute;
          right: 101%;
        }
      `}
      {...otherProps}
    >
      {children}
    </li>
  );
};

Item.defaultProps = {
  children: undefined,
  className: undefined,
};

Item.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
};

// Item.displayName = 'List.Item';

export const { defaultProps, propTypes } = Item;

export default Item;
