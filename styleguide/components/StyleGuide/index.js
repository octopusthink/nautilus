/* eslint-disable */
// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuide.js,
// but adds a `<Nautilus>` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import { Global, css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Markdown from 'rsg-components/Markdown';
import { useWindowWidth } from '@react-hook/window-size';

import Nautilus from '../../../src/components/hoc/Nautilus';
import Icon from '../../../src/components/ui/Icon';
import { metadata, toUnits } from '../../../src/styles';
import Footer from '../Footer';
import theme from '../../theme';

export const StyleGuide = ({ children, hasSidebar, toc }) => {
  const mobileBreakpoint = 768;
  const mobileMenuPadding = toUnits(theme.spacing.padding.large);
  const tabletMenuPadding = toUnits(theme.spacing.padding.xLarge);
  const sidebarWidth = 300;
  const menuToggleWidth = 60;
  const menuToggleHeight = 76;

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
  };

  useEffect(() => {
    if (!hasToggledSidebar && !isMobile && !showSidebar) {
      setSidebarState(true);
    }
  }, [hasToggledSidebar, isMobile, menuRef, showSidebar, windowWidth]);

  useEffect(() => {
    if (isMobile) {
      setSidebarState(false);
    }
  }, [isMobile, windowWidth]);

  useEffect(() => {
    if (isMobile && menuRef && menuRef.current) {
      // Reset the scroll position of this div. If we're on mobile
      // and we don't do this, the menu will get "stuck" in a weird
      // position.
      menuRef.current.scrollTop = 0;
    }
  }, [isMobile, menuRef]);

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

          .markdown-h2 {
            margin-top: ${toUnits(theme.spacing.margin.xxLarge)} !important;
          }

          .markdown-h3 {
            margin-top: ${toUnits(theme.spacing.margin.large)} !important;
          }

          .rsg--wrapper-11 > h2 {
            margin: 0 !important;
            padding-top: 0;
            border-top: 0;
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
            position: fixed;
            top: 0;
            z-index: 1000;
            transition: 160ms all ease-in-out;

            @media (max-width: 767px) {
              height: ${toUnits(menuToggleHeight)};
              left: 0;
              right: 0;
            }

            @media (min-width: 768px) {
              left: ${toUnits(menuToggleWidth - sidebarWidth)};
              width: ${toUnits(sidebarWidth)};
            }

            ${showSidebar &&
            css`
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

              // Reset the scroll position of this div. If we're on mobile
              // and we don't do this, the menu will get "stuck" in a weird
              // position.
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
              align-items: start;
              justify-content: space-between;
              transition: 160ms all ease-in-out;

              @media (max-width: 767px) {
                padding-left: ${mobileMenuPadding};
              }

              @media (min-width: 768px) {
                padding-left: ${tabletMenuPadding};

                ${!showSidebar &&
                css`
                  background: ${theme.colors.neutral.black};
                  height: 100%;
                `}
              }

              &:focus {
                color: ${theme.colors.state.interactive};
              }
            `}
            onClick={toggleSidebar}
          >
            <span
              css={css`
                color: ${theme.colors.neutral.white} !important;
                display: flex;
                flex-direction: column;
                height: ${toUnits(menuToggleHeight)};
                align-items: center;
                justify-content: center;
              `}
            >
              Nautilus
            </span>
            <div
              css={css`
                color: ${theme.colors.neutral.white} !important;
                display: flex;
                flex-direction: column;
                height: ${toUnits(menuToggleHeight)};
                width: ${toUnits(menuToggleWidth)};
                align-items: center;
                justify-content: center;
              `}
            >
              <Icon name="menu" title="Toggle menu" />
            </div>
          </a>
          <div
            css={css`
              @media (max-width: 767px) {
                padding-left: ${mobileMenuPadding};
                padding-right: ${mobileMenuPadding};
              }

              @media (min-width: 768px) {
                padding-left: ${tabletMenuPadding};
                padding-right: ${tabletMenuPadding};
              }
            `}
          >
            {toc}
          </div>
        </div>
      )}

      <main
        css={css`
          padding: ${toUnits(theme.spacing.padding.large)};
          display: flex;
          justify-content: center;
          transition: 160ms all ease-in-out;

          @media (max-width: 767px) {
            margin-top: ${toUnits(menuToggleHeight)};
          }

          @media (min-width: 768px) {
            margin-left: ${toUnits(menuToggleWidth)};
            padding: ${toUnits(theme.spacing.margin.medium)};
          }

          @media screen and (min-width: 980px) {
            padding-left: ${toUnits(theme.spacing.margin.xxLarge)};
            padding-right: ${toUnits(theme.spacing.margin.xxLarge)};
          }

          ${showSidebar &&
          css`
            @media (min-width: 768px) {
              margin-left: ${toUnits(sidebarWidth)};
            }
          `}
        `}
      >
        <div
          css={css`
            max-width: 800px;
          `}
        >
          {children}

          <Footer>
            <Markdown text="Made with ❤️ by [Octopus Think](https://octopusthink.com/). Say 👋 on [GitHub](https://github.com/octopusthink/nautilus)." />
          </Footer>
        </div>
      </main>

      {USE_ANALYTICS && (
        <script
          type="text/javascript"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            var _paq = window._paq || [];
            _paq.push(["disableCookies"]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://analytics.octopusth.ink/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '2']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();`,
          }}
        />
      )}
    </Nautilus>
  );
};

StyleGuide.propTypes = {
  children: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
  toc: PropTypes.node.isRequired,
};

export default StyleGuide;
