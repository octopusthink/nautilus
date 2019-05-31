import { css } from '@emotion/core';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';
import { headingLarge, headingMedium, headingSmall } from 'themes/mixins';

const LARGE = 2;
const MEDIUM = 3;
const SMALL = 4;

const HeadingLevels = [LARGE, MEDIUM, SMALL];

export const Heading = ({ children, level, ...otherProps }) => {
  const HeadingElement = `h${level}`;
  const theme = useTheme();

  return (
    <HeadingElement
      css={css`
        margin: 0 0 ${theme.spacing.margin.m};

        ${level === LARGE &&
          css`
            ${css(headingLarge(theme))}
          `}

        ${level === MEDIUM &&
          css`
            ${css(headingMedium(theme))};
          `}

        ${level === SMALL &&
          css`
            ${css(headingSmall(theme))}
          `}
      `}
      {...otherProps}
    >
      {children}
    </HeadingElement>
  );
};

Heading.defaultProps = {
  children: undefined,
  level: 2,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`). The more semantically important the level, the larger the heading will appear visually; an `<h2>` will be visually styled as "large" while an `<h4>` will be visually small. */
  level: PropTypes.oneOf(HeadingLevels).isRequired,
};

export default Heading;
