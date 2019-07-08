// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuide.js,
// but adds a `<Nautilus>` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import Markdown from 'rsg-components/Markdown';
import Header from 'styleguide/components/Header';
import Footer from 'styleguide/components/Footer';

import { Nautilus } from 'components';
import { metadata, toUnits } from 'styles';
import theme from 'styleguide/theme';
import { Icon } from 'components/ui/Icon';


export const StyleGuide = ({
  children,
  hasSidebar,
  homepageUrl,
  title,
  toc,
  version,
}) => {
  const [showSidebar, setSidebarState] = useState(true);

  const toggleSidebar = (event) => {
      event.preventDefault();
      if (showSidebar) {
        setSidebarState(false);
      } else {
        setSidebarState(true);
    };
  }

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

          .rsg--wrapper-11 > h2 {
            margin: 0 !important;
            padding-top: 0;
            border-top: 0;
          }

          h3 {
            margin-top: ${toUnits(theme.spacing.margin.large)} !important;
          }
        `}
      />

        {hasSidebar && (
          <div css={css`
            background: ${theme.colors.neutral.black};
            width: 300px;
            height: 100%;
            left: -240px;
            z-index: 1000;
            position: fixed;
            overflow: auto;
            top: 0;
            box-sizing: border-box;
            padding: 0 ${toUnits(theme.spacing.padding.large)};

            ${showSidebar && css`
              left: 0px;
            `}
          `} >
          <a href="#" css={css`
            ${metadata.large(theme)};
            display: flex;
            text-decoration: none;
            color: ${theme.colors.neutral.grey200};
            width: 100%;
            align-items: center;
            justify-content: space-between;
          `}
          onClick = {toggleSidebar}
          >
            Nautilus
            <div css={css`
              ${metadata.small(theme)};
              display: flex;
              flex-direction: column;
              font-size: 1.2rem;
              text-decoration: none;
              height: 76px;
              width: 60px;
              align-items: center;
              justify-content: center;
              margin-right: -${toUnits(theme.spacing.padding.large)};
            `} >
            <Icon name="menu" background="white" border="#cd2f83" background="hotpink" />
          </div>
        </a>
            {toc}

          </div>
        )}

        <main css={css`
          margin-left: 300px;
          max-width: 800px;
          padding: ${toUnits(theme.spacing.padding.xxl)};

          img {
            max-width: 100%;
          }

        `}>{children}

        <Footer>
          <Markdown
            text={`Made with ❤️ by [Octopus Think](https://octopusthink.com/). Say 👋 on [Github](https://github.com/octopusthink/nautilus).`}
          />
        </Footer>
      </main>

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
