import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import theme from 'styleguide/theme';
import { metadata } from 'styles';

export function TableOfContents({ children, onSearchTermChange, searchTerm }) {
  return (
    <nav
      css={css`
        padding: 0 ${theme.spacing.padding.l};
        ${metadata.small(theme)};

        @media screen and (min-width: 960px) {
          padding: 0 0 0 ${theme.spacing.padding.xl};
        }

      `}
    >
      <input
        css={css`
          width: 100%;
          padding: 16px;
          border: 2px solid ${theme.colors.neutral.grey800};
          font-size: 1.8rem;
          box-sizing: border-box;
          display: none;
        `}
        aria-label="Filter by name"
        onChange={(event) => onSearchTermChange(event.target.value)}
        placeholder="Filter by name [Uck. Use custom input!]"
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
