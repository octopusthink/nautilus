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
        padding: ${theme.spacing.padding.l} ${theme.spacing.padding.xl};
        background: ${theme.colors.neutral.black};
        @media screen and (min-width: 960px) {
          grid-column: 1 / 3;
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
