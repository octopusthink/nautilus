import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { ComponentClassName as ListClassName } from 'components/ui/List';
import { ComponentClassName as ParagraphClassName } from 'components/ui/Paragraph';
import { heading, toUnits } from 'styles';
import { useTheme } from 'themes';

const LARGE = 2;
const MEDIUM = 3;
const SMALL = 4;

const HeadingLevels = [LARGE, MEDIUM, SMALL];

export const Heading = (props) => {
  const theme = useTheme();
  const { children, level, unstyled, ...otherProps } = props;
  const HeadingElement = `h${level}`;

  return (
    <HeadingElement
      css={
        unstyled
          ? undefined
          : css`
              margin: 0 0 ${toUnits(theme.spacing.margin.medium)};

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
  level: 2,
  unstyled: false,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`). The more semantically important the level, the larger the heading will appear visually; an `<h2>` will be visually styled as "large" while an `<h4>` will be visually small. */
  level: PropTypes.oneOf(HeadingLevels),
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export default Heading;
