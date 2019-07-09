// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuide.js,
// but adds a `<Nautilus>` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Markdown from 'rsg-components/Markdown';
import Header from 'styleguide/components/Header';
import Footer from 'styleguide/components/Footer';
import { useWindowWidth } from '@react-hook/window-size'

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
  const mobileBreakpoint = 768;
  const menuRef = useRef();
  const windowWidth = useWindowWidth(mobileBreakpoint, { wait: 100 });
  const isMobile = windowWidth < mobileBreakpoint;
  const [hasToggledSidebar, setHasToggledSidebar] = useState(false);
  const [showSidebar, setSidebarState] = useState(!isMobile);

  const toggleSidebar = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setSidebarState(!showSidebar);

    setHasToggledSidebar(true);
  }

  useEffect(() => {
    if (!hasToggledSidebar && !isMobile && !showSidebar) {
      setSidebarState(true);
    }

    if (isMobile && showSidebar) {
      setSidebarState(false);
    }
  }, [hasToggledSidebar, isMobile, windowWidth])

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
            margin: 0 0 ${toUnits(theme.spacing.margin.large)};
          }

          h2 {
            margin-top: ${toUnits(theme.spacing.margin.xxl)} !important;
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
          <div
            css={css`
              background: ${theme.colors.neutral.black};
              box-sizing: border-box;
              height: 100%;
              overflow: hidden;
              padding: 0 ${toUnits(theme.spacing.padding.large)};
              position: fixed;
              top: 0;
              z-index: 1000;

              @media (max-width: 767px) {
                height: 76px;
                left: 0;
                right: 0;
                padding: 0 ${toUnits(theme.spacing.padding.large)};
              }

              @media (min-width: 768px) {
                left: -240px;
                width: 300px;
                padding: 0 ${toUnits(theme.spacing.padding.extraLarge)};
              }

              ${showSidebar && css`
                overflow: auto;

                @media (max-width: 767px) {
                  height: 100%;
                }

                @media (min-width: 768px) {
                  left: 0;
                }
              `}


            `}
            onClick={() => {
              if (isMobile) {
                setSidebarState(false);

                // Reset the scroll position of this div (if we're on mobile and we don't
                // do this, the menu will get "stuck" in a weird position.
                if (menuRef && menuRef.current) {
                  menuRef.current.scrollTop = 0;
                }
              }
            }}
            ref={menuRef}
          >
            <a
              href="#"
              css={css`
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
              <div
                css={css`
                  ${metadata.small(theme)};
                  display: flex;
                  flex-direction: column;
                  font-size: 1.2rem;
                  text-decoration: none;
                  height: 76px;
                  width: 60px;
                  align-items: center;
                  justify-content: center;
                  margin-right: -${toUnits(theme.spacing.padding.extraLarge)};
                `}
              >
                <Icon name="menu" background="white" border="#cd2f83" background="hotpink" />
              </div>
            </a>
            {toc}
          </div>
        )}

        <main css={css`
          padding: ${toUnits(theme.spacing.padding.large)};

          @media (max-width: 767px) {
            margin-top: 76px;
          }

          @media (min-width: 768px) {
            margin-left: 60px;
            padding: ${toUnits(theme.spacing.margin.medium)};
            max-width: 800px;
          }

          @media screen and (min-width: 980px) {
            padding-left: ${toUnits(theme.spacing.margin.xxl)};
            padding-right: ${toUnits(theme.spacing.margin.xxl)};
          }

          ${showSidebar && css`
            @media (min-width: 768px) {
              margin-left: 300px;
            }
          `}
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
