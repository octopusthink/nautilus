import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { Fragment, forwardRef } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Icon } from 'components/ui/Icon';

const LinkTag = 'a';

export const Link = forwardRef((props, ref) => {
  const { children, external, to, useHref, ...otherProps } = props;
  const hrefOnly = external || useHref;
  const LinkComponent = hrefOnly ? LinkTag : ReactRouterLink;

  const refProps = {};
  if (hrefOnly) {
    refProps.ref = ref;
  } else {
    refProps.innerRef = ref;
  }

  return (
    <LinkComponent
      href={hrefOnly ? to : undefined}
      to={!hrefOnly ? to : undefined}
      {...otherProps}
      {...refProps}
    >
      {children}
      {external && (
        <Fragment>
          {' '}
          <Icon name="external-link" title="External link" small />
        </Fragment>
      )}
    </LinkComponent>
  );
});

export const styles = (props) => {
  const { theme } = props;

  return css`
    border-bottom: 2px solid ${theme.colors.state.interactive};
    color: ${theme.colors.state.interactiveText};
    text-decoration: none;
    transition: all 200ms ease-in-out;

    &:hover {
      border-color: ${theme.colors.state.hover};
      color: ${theme.colors.state.hoverText};
    }

    &:focus {
      background: ${theme.colors.state.interactive};
      border-color: ${theme.colors.state.interactiveText};
      color: ${theme.colors.text.dark};
      outline: none;
    }
  `;
};

Link.defaultProps = {
  children: undefined,
  external: false,
  useHref: false,
};

Link.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use to indicate that a link points to an external resource. */
  external: PropTypes.bool,
  /** Used to link to a route that will be handled by the app's router. */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
    .isRequired,
  /** Set to true to disable react-router integration. */
  useHref: PropTypes.bool,
};

Link.displayName = 'Link';

export const { defaultProps, propTypes } = Link;

export default styled(Link)(styles);
