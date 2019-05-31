import PropTypes from 'prop-types';
import React from 'react';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';

import { getHash } from './getHash';

export function ComponentsList({ classes, items }) {
  items = items.filter((item) => item.visibleName);

  if (!items.length) {
    return null;
  }

  const windowHash = window.location.pathname + getHash(window.location.hash);
  return (
    <ul>
      {items.map(
        ({ heading, visibleName, href, content, shouldOpenInNewTab }) => {
          const isItemSelected = windowHash === href;
          return (
            <li key={href}>
              <Link
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
