import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { NautilusLinkComponentContext } from '../../hoc/Nautilus/context';
import Icon from '../Icon';
import { useTheme } from '../../../themes';

const LinkTag = 'a';

const Link = (props) => {
  const defaultLinkComponent = useContext(NautilusLinkComponentContext);
  const theme = useTheme();

  const { children, as, external, href, unstyled, ...otherProps } = props;
  const LinkComponent = as || (external && 'a') || defaultLinkComponent || LinkTag;

  return (
    <LinkComponent
      css={
        unstyled
          ? undefined
          : css`
              color: ${theme.colors.state.interactiveText};
              text-decoration-color: ${theme.colors.state.interactive};
              text-decoration-thickness: 2px; 
              text-decoration: underline;
              text-underline-offset: 0.25em; 
              transition: all 200ms ease-in-out;
            }

              &:hover {
                color: ${theme.colors.state.hoverText};
                text-decoration-color: ${theme.colors.state.hover};
              }

              &:focus {
                box-shadow: ${theme.colors.state.interactive} 0 0 0 3px;
                outline: none;
                text-decoration: none;
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
          <Icon name="external-link" title="External link" small noMargin />
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
