import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

export const ListItem = ({ children, ...otherProps }) => {
  return <li {...otherProps}>{children}</li>;
};

ListItem.defaultProps = {
  children: undefined,
};

ListItem.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

const StyledListItem = styled(ListItem)(({ theme }) => {
  return css`
    position: relative;
    margin: 0 0 ${theme.spacing.padding.xs};
    &::before {
      position: absolute;
      right: 101%;
    }
  `;
});

export default StyledListItem;
