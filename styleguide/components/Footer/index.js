import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import theme from 'styleguide/theme';
import { heading } from 'styles';

export function Footer({ children, title, version }) {
  return (
    <footer
      css={css`
        padding: ${theme.spacing.padding.l} ${theme.spacing.padding.l};
        background: ${theme.colors.neutral.black};

        @media screen and (min-width: 960px) {
          grid-column: 1 / 3;
          padding: ${theme.spacing.padding.l} ${theme.spacing.padding.xl};
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
