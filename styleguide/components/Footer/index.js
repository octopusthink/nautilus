import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../src/styles';
import theme from '../../theme';

export function Footer({ children, title, version }) {
  return (
    <footer
      css={css`
        margin-top: ${toUnits(theme.spacing.margin.xxLarge)};
        padding-top: ${toUnits(theme.spacing.padding.large)};
        text-align: center;

        p {
          color: ${theme.colors.neutral.grey800} !important;
          margin-bottom: 0;
        }

        a {
          color: ${theme.colors.neutral.grey800} !important;
        }
      `}
    >
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
