import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';

import theme from 'styleguide/theme';
import { toUnits, focusStyle } from 'styles';

import { getHash } from './getHash';

export function ComponentsList({ classes, items }) {
  items = items.filter((item) => item.visibleName);

  if (!items.length) {
    return null;
  }

  const windowHash = `${window.location.pathname}#/${getHash(window.location.hash)}`;

  return (
    <ul
      css={css`
        padding: 0;
        list-style-type: none;
        display: grid;
        grid-gap: ${toUnits(theme.spacing.margin.small)};
        margin-top: 0;

        ul & {
          display: block;
        }
      `}
    >
      {items.map(
        ({ heading, visibleName, href, content, shouldOpenInNewTab }) => {
          const isItemSelected = windowHash === href;

          return (
            <li
              key={href}
              css={css`
                padding-left: 0px;
              `}
            >
              <Link
                css={css`
                  color: ${theme.colors.neutral.grey600} !important;
                  width: 100% !important;
                  padding: ${toUnits(theme.spacing.padding.small)} 0 !important;
                  display: block !important;
                  text-transform: uppercase !important;

                  li li & {
                    color: ${theme.colors.neutral.white} !important;
                    text-transform: none !important;
                    font-weight: 400 !important;
                  }

                  li li li & {
                    padding-left: ${toUnits(theme.spacing.padding.medium)} !important;

                  }

                  &:hover {
                    color: ${theme.colors.state.interactive} !important;
                  }

                  &:focus  {
                    //outline: none;
                    color: ${theme.colors.state.interactive} !important;
                  }

                  &:active {
                    outline: none;
                    color: hotpink !important;
                  }

                  ${isItemSelected && css`
                    color: ${theme.colors.neutral.white} !important;
                    position: relative !important;
                    z-index: 2;

                    &::before {
                      display: block;
                      position: absolute;
                      top: 0;
                      right: -${toUnits(theme.spacing.padding.medium)};
                      bottom: 0;
                      left: -${toUnits(theme.spacing.padding.medium)};
                      background: ${theme.colors.accent.primaryDark};
                      border-left: 3px solid ${theme.colors.accent.primaryLight};
                      content: '';
                      z-index: -1;
                    }
                  `}
                `}
                href={href}
                target={shouldOpenInNewTab ? '_blank' : undefined}
              >
                {visibleName}
              </Link>
              {content}
            </li>
          );
        },
      )}
    </ul>
  );
}

ComponentsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ComponentsList;
