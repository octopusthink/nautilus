import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import theme from 'styleguide/theme';
import { heading, toUnits } from 'styles';

export function Footer({ children, title, version }) {
  return (
    <footer
      css={css`
        padding: ${toUnits(theme.spacing.padding.large)} ${toUnits(theme.spacing.padding.large)};
        background: ${theme.colors.neutral.black};

        @media screen and (min-width: 960px) {
          grid-column: 1 / 3;
          padding: ${toUnits(theme.spacing.padding.large)} ${toUnits(theme.spacing.padding.extraLarge)};
        }

        p {
          color: ${theme.colors.neutral.grey200} !important;
          margin-bottom: 0;
        }

        a {
          color: ${theme.colors.neutral.white} !important;
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
