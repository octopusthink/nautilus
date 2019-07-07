import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import theme from 'styleguide/theme';
import { metadata, toUnits } from 'styles';

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
