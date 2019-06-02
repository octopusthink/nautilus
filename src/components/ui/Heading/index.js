import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { Paragraph } from 'components';
import { heading } from 'styles';

const LARGE = 2;
const MEDIUM = 3;
const SMALL = 4;

const HeadingLevels = [LARGE, MEDIUM, SMALL];

export const Heading = ({ children, level, ...otherProps }) => {
  const HeadingElement = `h${level}`;

  return <HeadingElement {...otherProps}>{children}</HeadingElement>;
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

export default styled(Heading)(({ level, theme }) => {
  return css`
    margin: 0 0 ${theme.spacing.margin.m};
    ${`${Paragraph} + &`},
    /* TODO: Replace these with actual Nautilus components */
    ul + &,
    ol + &,
    dl + & {
      margin-top: ${theme.spacing.margin.m};
    }

    ${level === SMALL && heading.small(theme)};
    ${level === MEDIUM && heading.medium(theme)};
    ${level === LARGE && heading.large(theme)};
  `;
});
