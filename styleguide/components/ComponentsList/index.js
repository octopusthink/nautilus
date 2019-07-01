import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';

import theme from 'styleguide/theme';
import { toUnits } from 'styles';

import { getHash } from './getHash';

export function ComponentsList({ classes, items }) {
  items = items.filter((item) => item.visibleName);

  if (!items.length) {
    return null;
  }

  const windowHash = window.location.pathname + getHash(window.location.hash);
  return (
    <ul
      css={css`
        padding: 0;
        list-style-type: none;
        display: grid;
        grid-gap: ${toUnits(theme.spacing.margin.medium)};

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
                  color: ${theme.colors.neutral.grey800} !important;
                  width: 100% !important;
                  padding: ${toUnits(theme.spacing.padding.medium)} 0 !important;
                  border-top: 2px solid !important;
                  display: block !important;
                  text-transform: uppercase !important;

                  li li & {
                    text-transform: none !important;
                    font-weight: 400 !important;
                    border-top: 1px solid ${theme.colors.neutral.grey200} !important;
                  }

                  li li li & {
                    padding-left: ${toUnits(theme.spacing.padding.medium)} !important;
                  }
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
