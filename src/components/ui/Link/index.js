import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Icon } from 'components/ui/Icon';

export const Link = (props) => {
  const { children, external, ...otherProps } = props;
  let icon;

  if (external) {
    icon = <Icon name="external-link" title="External link" small />;
  }

  return (
    <ReactRouterLink {...otherProps}>
      {children} {icon}
    </ReactRouterLink>
  );
};

export const styles = () => {
  return css``;
};

Link.defaultProps = {
  children: undefined,
  external: false,
};

Link.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use to indicate that a link points to an external resource. */
  external: PropTypes.boolean,
};

export const { defaultProps, propTypes } = Link;

export default styled(Link)(styles);
