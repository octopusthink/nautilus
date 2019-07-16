import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { Fragment, forwardRef } from 'react';

import { Icon } from 'components/ui/Icon';

const LinkTag = 'a';

export const Link = forwardRef((props, ref) => {
  const {
    children,
    component,
    componentProps,
    external,
    href,
    ...otherProps
  } = props;
  // TODO: Use Nautilus.config.LinkComponent.
  const LinkComponent = component || LinkTag;
  const hrefOnly = LinkComponent === LinkTag;

  const refProps = {};
  if (hrefOnly) {
    refProps.ref = ref;
  } else {
    refProps.innerRef = ref;
  }

  return (
    <LinkComponent
      href={hrefOnly ? href : undefined}
      to={!hrefOnly ? href : undefined}
      {...componentProps}
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
  component: null,
  componentProps: undefined,
  external: false,
  href: undefined,
};

Link.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Component/tag to render the underlying link. Defaults to `Nautilus.config.LinkComponent` if set; an `<a>` tag will be used if `Nautilus.config.LinkComponent` is not set. */
  component: PropTypes.element,
  /** Props to pass to the underlying component used to render this `Link`. Useful if you want to customise props or aren't using an `<a>` tag, `react-router` `Link`, or `@reach/router` `Link` component. */
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
  /** Use to indicate that a link points to an external resource. */
  external: PropTypes.bool,
  /** If an `<a>` tag, `react-router` `Link`, or `@reach/router` `Link` component are rendered, this will be the intended target (eg the `to` prop in `react-router`, the `href` prop for an `a` tag). */
  href: PropTypes.string,
};

Link.displayName = 'Link';

export const { defaultProps, propTypes } = Link;

export default styled(Link)(styles);
