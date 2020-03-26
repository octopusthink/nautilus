import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import { metadata, toUnits } from '../../../src/styles';
import theme from '../../theme';

export function Header({ title, version }) {
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        padding: ${toUnits(theme.spacing.padding.large)};
        background: ${theme.colors.neutral.black};
        ${metadata.large(theme)};
        color: ${theme.colors.neutral.white};
        margin-left: 40px;
      `}
    >
      {title}
      {version && <Version>{version}</Version>}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
};

export default Header;
