import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Version from 'rsg-components/Version';

import theme from 'styleguide/theme';
import { bodySmall, headingLarge } from 'themes/mixins';

export function Footer({ children, title, version }) {
  return (
    <footer
      css={css`
        border-top: 4px solid ${theme.colors.neutral.grey800};
        padding-top: ${theme.spacing.padding.l};
        margin-top: ${theme.spacing.margin.xl};
        grid-column: 1 / 3;
        ${css(headingLarge(theme))};
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
