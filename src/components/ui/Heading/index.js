import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import invariant from 'invariant';

import { ListClassName } from '../List/constants';
import { ParagraphClassName } from '../Paragraph/constants';
import { heading, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

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
  qualityControl(props);

  const theme = useTheme();
  const { children, dark, inverse, level, light, noMargin, unstyled, ...otherProps } = props;
  const HeadingElement = `h${level}`;

  return (
    <HeadingElement
      css={
        unstyled
          ? undefined
          : css`
        color: ${theme.colors.text.default};
        margin: 0;

        ${!noMargin &&
          css`
            margin: 0 0 ${toUnits(theme.spacing.margin.medium)};
          `}

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

        ${level === SMALL && heading.small(theme)};
        ${level === MEDIUM && heading.medium(theme)};
        ${level === LARGE && heading.large(theme)};

        /* TODO: Replace dl + & with actual Nautilus components */
        dl + &,
        .${ListClassName} + &,
        .${ParagraphClassName} + & {
          margin-top: ${toUnits(theme.spacing.margin.medium)};
        }
      `
      }
      {...otherProps}
    >
      {children}
    </HeadingElement>
  );
};

Heading.defaultProps = {
  children: undefined,
  dark: false,
  inverse: false,
  level: 2,
  light: false,
  noMargin: false,
  unstyled: false,
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
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export default Heading;
