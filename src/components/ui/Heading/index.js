import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import invariant from 'invariant';

import { ComponentClassName as ListClassName } from 'components/ui/List';
import { ComponentClassName as ParagraphClassName } from 'components/ui/Paragraph';
import { heading, toUnits } from 'styles';
import { useTheme } from 'themes';

const LARGE = 2;
const MEDIUM = 3;
const SMALL = 4;

const HeadingLevels = [LARGE, MEDIUM, SMALL];

export const qualityControl = (props) => {
  const { dark, large, light, small } = props;

  invariant(
    [dark, light].filter((prop) => prop).length <= 1,
    'Heading cannot have both `dark` and `light` props set.',
  );

  invariant(
    [large, small].filter((prop) => prop).length <= 1,
    'Heading cannot have both `large` and `small` props set.',
  );
};

export const Heading = (props) => {
  const theme = useTheme();
  const { children, dark, inverse, level, light, ...otherProps } = props;
  qualityControl(props);
  const HeadingElement = `h${level}`;

  return (
    <HeadingElement
      css={css`
        color: ${theme.colors.text.default};
        ${light &&
          css`
            color: ${theme.colors.text.light};
          `}
        ${dark &&
          css`
            color: ${theme.colors.text.dark};
          `}
        ${inverse &&
          css`
            color: ${theme.colors.text.inverse};
            ${light &&
              css`
                color: ${theme.colors.text.inverseLight};
              `}
            ${dark &&
              css`
                color: ${theme.colors.text.inverseDark};
              `}
          `}
        margin: 0 0 ${toUnits(theme.spacing.margin.medium)};

        .${ListClassName} + &,
        .${ParagraphClassName} + &,
        /* TODO: Replace these with actual Nautilus components */
        dl + & {
          margin-top: ${toUnits(theme.spacing.margin.medium)};
        }

        ${level === SMALL && heading.small(theme)};
        ${level === MEDIUM && heading.medium(theme)};
        ${level === LARGE && heading.large(theme)};
      `}
      {...otherProps}
    >
      {children}
    </HeadingElement>
  );
};

Heading.defaultProps = {
  children: undefined,
  inverse: false,
  level: 2,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Inverse text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Darken text colour. */
  dark: PropTypes.bool,
  /** Lighten text colour. */
  light: PropTypes.bool,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`). The more semantically important the level, the larger the heading will appear visually; an `<h2>` will be visually styled as "large" while an `<h4>` will be visually small. */
  level: PropTypes.oneOf(HeadingLevels),
};

export default Heading;
