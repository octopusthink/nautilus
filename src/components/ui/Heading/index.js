import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { List, Paragraph } from 'components';
import { heading, toUnits } from 'styles';

const LARGE = 2;
const MEDIUM = 3;
const SMALL = 4;

const HeadingLevels = [LARGE, MEDIUM, SMALL];

export const Heading = forwardRef((props, ref) => {
  const { children, level, ...otherProps } = props;
  const HeadingElement = `h${level}`;

  return (
    <HeadingElement {...otherProps} ref={ref}>
      {children}
    </HeadingElement>
  );
});

export const styles = ({ level, theme }) => {
  return css`
    margin: 0 0 ${toUnits(theme.spacing.margin.medium)};
    ${`${List} + &`},
    ${`${Paragraph} + &`},
    /* TODO: Replace these with actual Nautilus components */
    dl + & {
      margin-top: ${toUnits(theme.spacing.margin.medium)};
    }

    ${level === SMALL && heading.small(theme)};
    ${level === MEDIUM && heading.medium(theme)};
    ${level === LARGE && heading.large(theme)};
  `;
};

Heading.defaultProps = {
  children: undefined,
  level: 2,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`). The more semantically important the level, the larger the heading will appear visually; an `<h2>` will be visually styled as "large" while an `<h4>` will be visually small. */
  level: PropTypes.oneOf(HeadingLevels),
};

Heading.displayName = 'Heading';

export default styled(Heading)(styles);
