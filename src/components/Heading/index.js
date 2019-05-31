import { css } from '@emotion/core';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';
import { headingLarge, headingMedium, headingSmall } from 'themes/mixins';

const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';

const HeadingLevels = {
  [LARGE]: 2,
  [MEDIUM]: 3,
  [SMALL]: 4,
};

export const Heading = ({
  children,
  large,
  level,
  medium,
  small,
  ...otherProps
}) => {
  invariant(
    [large, medium, small].filter((prop) => prop).length <= 1,
    '<Heading> can only be one of large/medium/small. Please only set one.',
  );

  // Headings are large by default.
  let size = LARGE;
  if (medium) {
    size = MEDIUM;
  }
  if (small) {
    size = SMALL;
  }

  const HeadingElement = `h${HeadingLevels[size]}`;
  const theme = useTheme();

  return (
    <HeadingElement
      css={css`
        margin: 0 0 ${theme.spacing.margin.m};

        ${large &&
          css`
            ${css(headingLarge(theme))}
          `}

        ${medium &&
          css`
            ${css(headingMedium(theme))};
          `}

        ${small &&
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
  large: false,
  medium: false,
  small: false,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`). If no size is provided, a `level={2}` outputs a `large` heading; `level={3}` a `medium` heading, and `level={4}` a `small` heading. */
  level: PropTypes.oneOf(Object.keys(HeadingLevels)).isRequired,
  /** Make this heading visually large in size. */
  large: PropTypes.bool,
  /** Make this heading visually medium in size. */
  medium: PropTypes.bool,
  /** Make this heading visually small in size. */
  small: PropTypes.bool,
};

export default Heading;
