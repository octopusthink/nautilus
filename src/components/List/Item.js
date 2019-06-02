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

const StyledListItem = styled(ListItem)();

export default StyledListItem;
