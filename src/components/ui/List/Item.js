import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import { ListItemClassName } from './constants';

export const Item = (props) => {
  const { children, className, noMargin, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <li
      className={classnames(ListItemClassName, className)}
      css={
        unstyled
          ? undefined
          : css`
              position: relative;
              margin: 0;

              ${!noMargin &&
                css`
                  margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)};
                `}

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
  noMargin: false,
  unstyled: false,
};

Item.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

// Item.displayName = 'List.Item';

export const { defaultProps, propTypes } = Item;

export default Item;
