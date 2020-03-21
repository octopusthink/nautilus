import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from 'styles';
import { useTheme } from 'themes';

export const ComponentClassName = 'Nautilus-ListItem';

export const Item = (props) => {
  const { children, className, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <li
      className={classnames(ComponentClassName, className)}
      css={
        unstyled
          ? undefined
          : css`
              position: relative;
              margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)};
              &::before {
                position: absolute;
                right: 101%;
              }
            `
      }
      {...otherProps}
    >
      {children}
    </li>
  );
};

Item.defaultProps = {
  children: undefined,
  className: undefined,
  unstyled: false,
};

Item.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

// Item.displayName = 'List.Item';

export const { defaultProps, propTypes } = Item;

export default Item;
