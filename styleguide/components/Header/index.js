import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import theme from 'styleguide/theme';
import { metadata } from 'styles';

export function Header({ children, title, version }) {
  return (
    <header
      css={css`
        padding: ${theme.spacing.padding.l} ${theme.spacing.padding.xl};
        background: ${theme.colors.neutral.black};
        @media screen and (min-width: 960px) {
          grid-column: 1 / 3;
        }
        ${metadata.large(theme)};
        color: ${theme.colors.neutral.white};
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
