import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import theme from 'styleguide/theme';

export function TableOfContents({ children, onSearchTermChange, searchTerm }) {
  return (
    <nav>
      <input
        aria-label="Filter by name"
        onChange={(event) => onSearchTermChange(event.target.value)}
        placeholder="Filter by name"
        value={searchTerm}
      />
      {children}
    </nav>
  );
}

TableOfContents.propTypes = {
  children: PropTypes.node,
  onSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default TableOfContents;
