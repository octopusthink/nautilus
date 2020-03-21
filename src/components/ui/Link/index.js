import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { NautilusLinkComponent } from 'components/hoc/Nautilus';
import { Icon } from 'components/ui/Icon';
import { useTheme } from 'themes';

const LinkTag = 'a';

export const Link = (props) => {
  const defaultLinkComponent = useContext(NautilusLinkComponent);
  const theme = useTheme();

  const { children, as, external, href, unstyled, ...otherProps } = props;
  const LinkComponent = as || (external && 'a') || defaultLinkComponent || LinkTag;

  return (
    <LinkComponent
      css={
        unstyled
          ? undefined
          : css`
              border-bottom: 2px solid ${theme.colors.state.interactive};
              color: ${theme.colors.state.interactiveText};
              text-decoration: none;
              transition: all 200ms ease-in-out;

              &:hover {
                border-color: ${theme.colors.state.hover};
                color: ${theme.colors.state.hoverText};
              }

              &:focus {
                border-color: transparent;
                box-shadow: ${theme.colors.state.interactive} 0 0 0 3px;
                outline: none;
              }
            `
      }
      href={href}
      {...otherProps}
    >
      {children}
      {external && (
        <React.Fragment>
          {' '}
          <Icon
            name="external-link"
            title="External link"
            small
            css={css`
              margin: 0;
            `}
          />
        </React.Fragment>
      )}
    </LinkComponent>
  );
};

Link.defaultProps = {
  as: undefined,
  children: undefined,
  external: false,
  href: undefined,
  unstyled: false,
};

Link.propTypes = {
  /** Component/tag to render the underlying link. Defaults to `Nautilus.config.defaultComponents.Link` if set; an `<a>` tag will be used if `Nautilus.config.defaultComponents.Link` is not set. */
  as: PropTypes.elementType,
  /** @ignore */
  children: PropTypes.node,
  /** Use to indicate that a link points to an external resource. */
  external: PropTypes.bool,
  /** The URL to navigate to when this link is activated. */
  href: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Link;

export default Link;
