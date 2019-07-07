import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import theme from 'styleguide/theme';
import { metadata, toUnits } from 'styles';
import { Icon } from 'components/ui/Icon';

export function TableOfContents({ children, onSearchTermChange, searchTerm }) {
  const [showSidebar, setSidebarState] = useState(true);

  const toggleSidebar = (showSidebar) => {
    return (event) => {
      event.preventDefault();
      if (showSidebar) {
        setSidebarState(false);
      } else {
        setSidebarState(true);
      }
    };
  }

  return (
    <nav
      css={css`
        padding: 0 ${toUnits(theme.spacing.padding.large)};
        ${metadata.small(theme)};
        background: ${theme.colors.neutral.grey200};
        width: 240px;
        height: 100%;
        top: 0;
        left: -240px;
        z-index: 1000;
        position: relative;

        ${showSidebar && css`
          left: 0;
        `}

        @media screen and (min-width: 960px) {
          padding: 0 0 0 ${toUnits(theme.spacing.padding.extraLarge)};
        }

      `}
    >
      <a href="#" css={css`
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        text-decoration: none;
        color: ${theme.colors.neutral.grey800};
        align-items: center;
        position: absolute;
        justify-content: center;
        top: 16px;
        right: -60px;
        height: 60px;
        width: 60px;
        background: ${theme.colors.neutral.grey200};
      `}
      onClick = {toggleSidebar}
      >
        <Icon name="menu" />
        Menu
      </a>

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
