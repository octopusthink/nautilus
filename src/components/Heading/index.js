import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

export const Heading = ({ children, level, ...otherProps }) => {
  invariant(level, 'Heading component requires a level prop');

  const HeadingElement = `h${level}`;

  return <HeadingElement {...otherProps}>{children}</HeadingElement>;
};

export const HeadingLevels = [1, 2, 3, 4, 5, 6];

Heading.defaultProps = {
  children: undefined,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Semantic hierarchy level of the `<h>` element in the markup (ex: `<h3>`) */
  level: PropTypes.oneOf(HeadingLevels).isRequired,
};

export default Heading;
