import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { NautilusLinkComponentContext } from '../../hoc/Nautilus/context';
import Icon from '../Icon';
import { focusStyle, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

const LinkTag = 'a';

const Link = (props) => {
  const defaultLinkComponent = useContext(NautilusLinkComponentContext);
  const theme = useTheme();

  const { children, as, external, href, unstyled, ...otherProps } = props;
  const LinkComponent = as || (href && 'a') || (external && 'a') || defaultLinkComponent || LinkTag;

  return (
    <LinkComponent
      css={
        unstyled
          ? undefined
          : css`
              color: ${theme.colors.state.interactiveText};
              box-shadow: 0 2px ${theme.colors.state.interactive};
              text-decoration: none;
              transition: all 200ms ease-in-out;

              &:hover {
                box-shadow: 0 2px ${theme.colors.state.hover};
                color: ${theme.colors.state.hoverText};
              }

              &:focus {
                ${focusStyle.outlineLight(theme)};
                ${focusStyle.text(theme)};
              }
            `
      }
      href={href}
      {...otherProps}
    >
      {children}
      {external && (
        <React.Fragment>
          <Icon
            name="external-link"
            noMargin
            small
            strokeColor={theme.colors.neutral.grey600}
            title="External link"
            css={css`
              margin-left: ${toUnits(theme.spacing.padding.xSmall)};
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
