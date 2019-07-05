import { css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'rsg-components/Heading';

import theme from 'styleguide/theme';

function SectionHeadingRenderer({
  children,
  toolbar,
  id,
  href,
  depth,
  deprecated,
}) {
  // const headingLevel = Math.min(6, depth);
  // Overwrite RSG's classification of headings, since we're only using top-level headings here!
  const headingLevel = 1;

  return (
    <Heading level={headingLevel} id={id}>
      <a
        href={href}
        css={css`
          text-decoration: none;
          color: ${theme.colors.text.default};
        `}
      >
        {children}
      </a>
    </Heading>
  );
}

SectionHeadingRenderer.propTypes = {
  children: PropTypes.node,
  toolbar: PropTypes.node,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool,
};

export default SectionHeadingRenderer;
