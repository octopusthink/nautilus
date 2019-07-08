import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { toUnits } from 'styles';

export const Item = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <li ref={ref} {...otherProps}>
      {children}
    </li>
  );
});

export const styles = (props) => {
  const { theme } = props;

  return css`
    position: relative;
    margin: 0 0 ${toUnits(theme.spacing.padding.extraSmall)};
    &::before {
      position: absolute;
      right: 101%;
    }
  `;
};

Item.defaultProps = {
  children: undefined,
};

Item.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

Item.displayName = 'List.Item';

export const { defaultProps, propTypes } = Item;

export default styled(Item)(styles);
