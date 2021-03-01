/* eslint-disable no-undef */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'rsg-components/Link';

import { toUnits } from '../../../src/styles';
import theme from '../../theme';
import { getHash } from './getHash';

export function ComponentsList({ items }) {
  const componentItems = items.filter((item) => item.visibleName);

  if (!componentItems.length) {
    return null;
  }

  const windowHash = window.location.hash.length
    ? `${window.location.pathname}#/${getHash(window.location.hash)}`
    : `${window.location.pathname}#/Introduction`;

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
      {componentItems.map(({ visibleName, href, content, shouldOpenInNewTab }) => {
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

                &:focus {
                  color: ${theme.colors.state.interactive} !important;
                }

                &:active {
                  color: ${theme.colors.state.interactiveText} !important;
                  outline: none;
                }

                ${isItemSelected &&
                css`
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
              onClick={(event) => {
                // Mimic changing the page when clicked; this doesn't happen
                // in react-styleguidist because of the hash-based routing.
                event.currentTarget.blur();
              }}
              target={shouldOpenInNewTab ? '_blank' : undefined}
            >
              {visibleName}
            </Link>
            {content}
          </li>
        );
      })}
    </ul>
  );
}

ComponentsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ComponentsList;
