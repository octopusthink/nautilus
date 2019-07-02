// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuide.js,
// but adds a `<Nautilus>` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Markdown from 'rsg-components/Markdown';
import Header from 'styleguide/components/Header';
import Footer from 'styleguide/components/Footer';

import { Nautilus } from 'components';
import { toUnits } from 'styles';
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
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            font-size: 62.5%;
          }

          body {
            font-size: 1.6rem;
          }

          img {
            max-width: 100%;
          }

          h1 {
            margin: 0 0 ${toUnits(theme.spacing.margin.extraLarge)};
          }

          h2 {
            margin-top: ${toUnits(theme.spacing.margin.xxl)} !important;
            border-top: 3px solid;
            padding-top: ${toUnits(theme.spacing.padding.extraLarge)};
          }

          h3 {
            margin-top: ${toUnits(theme.spacing.margin.large)} !important;
          }
        `}
      />
      <div
        css={css`
          display: grid;
          grid-gap: ${toUnits(theme.spacing.margin.extraLarge)};
          margin: 0 auto;

          @media screen and (min-width: 960px) {
            grid-template-columns: 320px auto;
            grid-gap: ${toUnits(theme.spacing.margin.xxl)};
          }
        `}
      >
        <Header title={title} version={version} />

        {hasSidebar && toc}

        <main css={css`
          max-width: 800px;
          margin: 0 auto;
          padding: 0 ${toUnits(theme.spacing.padding.large)};

          @media screen and (min-width: 960px) {
            padding: 0 ${toUnits(theme.spacing.margin.extraLarge)} 0 0;
          }

          img {
            max-width: 100%;
          }

        `}>{children}</main>

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
