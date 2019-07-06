import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import theme from 'styleguide/theme';
import { metadata, toUnits } from 'styles';
import { Icon } from 'components/ui/Icon';

export function Header({ children, title, version }) {
  return (
    <header
      css={css`
        padding: ${toUnits(theme.spacing.padding.large)};
        background: ${theme.colors.neutral.black};
        ${metadata.large(theme)};
        color: ${theme.colors.neutral.white};

        @media screen and (min-width: 960px) {
          grid-column: 1 / 3;
          padding: ${toUnits(theme.spacing.padding.large)} ${toUnits(theme.spacing.padding.extraLarge)};
        }
      `}
    >
      <a href="#" css={css`
        display: inline-flex;
        flex-direction: column;
        font-size: 1.2rem;
        text-decoration: none;
        color: ${theme.colors.neutral.white};
        align-items: center;
      `}>
        <Icon name="menu" />
        Menu
      </a>
      {title}
      {version && <Version>{version}</Version>}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
};

export default Header;
