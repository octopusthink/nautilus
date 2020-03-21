import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/ui/Link';
import { VisuallyHiddenStyles, VisuallyHiddenRevealStyles } from 'components/ui/VisuallyHidden';
import { interfaceUI, focusStyle, toUnits } from 'styles';
import { useTheme } from 'themes';

export const SkipLink = (props) => {
  const { children, toId, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <Link
      as="a"
      css={
        unstyled
          ? undefined
          : css`
              /*
                We should hide the SkipLink by default, only showing it when its
                been focused by the user.
              */
              ${VisuallyHiddenStyles}
              transition: none;

              &:focus {
                ${VisuallyHiddenRevealStyles}
                ${interfaceUI.medium(theme)};
                ${focusStyle.outline(theme)};
                ${focusStyle.text(theme)};
                background: ${theme.colors.neutral.white};
                border: 0;
                box-sizing: border-box;
                display: block;
                left: 0;
                padding: ${toUnits(theme.spacing.padding.medium)};
                position: absolute;
                text-decoration: underline;
                text-align: center;
                top: 0;
                width: 100%;
                z-index: 100;
              }
            `
      }
      {...otherProps}
      href={`#${toId}`}
    >
      {children}
    </Link>
  );
};

SkipLink.defaultProps = {
  children: 'Skip to main content',
  toId: 'content',
  unstyled: false,
};

SkipLink.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** The HTML ID of the main "content" element on the page. This is what the skip link will take the user to when used. */
  toId: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = SkipLink;

export default SkipLink;
