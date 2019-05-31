// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuide.js,
// but adds a `<Nautilus />` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Version from 'rsg-components/Version';

import Nautilus from 'components/Nautilus';
import theme from 'styleguide/theme';

export const StyleGuide = ({
  children,
  hasSidebar,
  homepageUrl,
  title,
  toc,
  version,
}) => {
  return (
    <Nautilus>
      <header
        css={css`
          background-color: ${theme.colors.neutral.black};
          border-bottom: 4px solid ${theme.colors.neutral.grey200};
          color: ${theme.colors.neutral.white};
          left: ${theme.spacing.margin.l};
          left: 0;
          padding: ${theme.spacing.padding.xl};
          position: fixed;
          right: ${theme.spacing.margin.l};
          right: 0;
          top: 0;
        `}
      >
        <Logo>{title}</Logo>
        {version && <Version>{version}</Version>}
      </header>

      <main>
        {children}
        <footer>
          <Markdown
            text={`Made with ❤️ by [Octopus Think](https://octopusthink.com/)`}
          />
        </footer>
      </main>

      {hasSidebar && toc}
    </Nautilus>
  );
};

StyleGuide.propTypes = {
  children: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
  homepageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toc: PropTypes.node.isRequired,
  version: PropTypes.string,
};

export default StyleGuide;
