// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuide.js,
// but adds a `<Nautilus />` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Markdown from 'rsg-components/Markdown';
import Header from 'styleguide/components/Header';
import Footer from 'styleguide/components/Footer';

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
      <div
        css={css`
          display: grid;
          grid-gap: ${theme.spacing.margin.xl};
          padding: ${theme.spacing.padding.xl};

          @media screen and (min-width: 960px) {
            grid-template-columns: 2fr 1fr;
            grid-gap: ${theme.spacing.margin.xxl};
          }
        `}
      >
        <Header title={title} version={version} />

        <main>{children}</main>

        {hasSidebar && toc}

        <Footer>
          <Markdown
            text={`Made with ❤️ by [Octopus Think](https://octopusthink.com/). Say 👋 on [Github](https://github.com/octopusthink/nautilus).`}
          />
        </Footer>
      </div>
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
