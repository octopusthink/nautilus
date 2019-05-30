import { css } from '@emotion/core';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';
import { headingLarge, headingMedium, headingSmall } from 'themes/mixins';

export const Heading = ({
  children,
  level,
  large,
  medium,
  small,
  ...otherProps
}) => {
  invariant(level, 'Heading component requires a level prop');

  const HeadingElement = `h${level}`;
  const theme = useTheme();

  return (
    <HeadingElement
      css={css`
        ${css(headingMedium(theme))};
        margin: 0 0 ${theme.spacing.margin.m};

        ${large &&
          css`
            ${css(headingLarge(theme))}
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

export const HeadingLevels = [1, 2, 3, 4, 5, 6];

Heading.defaultProps = {
  children: undefined,
  level: 2,
  large: true,
  medium: false,
  small: false,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`) */
  level: PropTypes.oneOf(HeadingLevels).isRequired,
  /** Visual prominency of the heading. Small, medium, large. */
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.boolm,
};

export default Heading;
