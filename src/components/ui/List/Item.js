import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from 'styles';

export const ListItem = (props) => {
  const { children, ...otherProps } = props;

  return <li {...otherProps}>{children}</li>;
};

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

ListItem.defaultProps = {
  children: undefined,
};

ListItem.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

ListItem.displayName = 'List.Item';

export default styled(ListItem)(styles);
