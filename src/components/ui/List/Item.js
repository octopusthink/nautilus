import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

export const ListItemBase = (props) => {
  const { children, ...otherProps } = props;

  return <li {...otherProps}>{children}</li>;
};

export const styles = (props) => {
  const { theme } = props;

  return css`
    position: relative;
    margin: 0 0 ${theme.spacing.padding.xs};
    &::before {
      position: absolute;
      right: 101%;
    }
  `;
};

ListItemBase.defaultProps = {
  children: undefined,
};

ListItemBase.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

const ListItem = styled(ListItemBase)(styles);
ListItem.displayName = 'List.Item';

export default ListItem;
