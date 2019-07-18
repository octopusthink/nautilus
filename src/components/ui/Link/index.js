import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { Fragment, forwardRef, useContext } from 'react';

import { NautilusLinkComponent } from 'components/hoc/Nautilus';
import { Icon } from 'components/ui/Icon';

const LinkTag = 'a';

export const Link = forwardRef((props, ref) => {
  const defaultLinkComponent = useContext(NautilusLinkComponent);

  const { children, asComponent, external, ...otherProps } = props;
  const LinkComponent = asComponent || defaultLinkComponent || LinkTag;

  return (
    <LinkComponent ref={ref} {...otherProps}>
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
  asComponent: undefined,
  external: false,
};

Link.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Component/tag to render the underlying link. Defaults to `Nautilus.config.defaultComponents.Link` if set; an `<a>` tag will be used if `Nautilus.config.defaultComponents.Link` is not set. */
  asComponent: PropTypes.elementType,
  /** Use to indicate that a link points to an external resource. */
  external: PropTypes.bool,
};

Link.displayName = 'Link';

export const { defaultProps, propTypes } = Link;

export default styled(Link)(styles);
