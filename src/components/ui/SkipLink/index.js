import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'components';
import { interfaceUI, focusStyle, toUnits } from 'styles';
import { useTheme } from 'themes';

export const SkipLink = (props) => {
  const { children, toId, ...otherProps } = props;

  const theme = useTheme();

  return (
    <Link
      css={css`
        // We should hide the SkipLink by default, only showing it when its been
        // focused by the user.
        border: 0;
        clip: rect(0 0 0 0);
        height: 0;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 0;
        transition: none;

        &:focus {
          ${interfaceUI.medium(theme)};
          ${focusStyle.outline(theme)};
          ${focusStyle.text(theme)};
          background: ${theme.colors.neutral.white};
          box-sizing: border-box;
          display: block;
          clip: auto;
          height: auto;
          left: 0;
          margin: 0;
          padding: ${toUnits(theme.spacing.padding.medium)};
          overflow: auto;
          text-decoration: underline;
          top: 0;
          width: 100%;
          text-align: center;
          z-index: 100;
        }
      `}
      {...otherProps}
      as="a"
      href={`#${toId}`}
    >
      {children}
    </Link>
  );
};

SkipLink.defaultProps = {
  children: 'Skip to main content',
  toId: 'content',
};

SkipLink.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** The HTML ID of the main "content" element on the page. This is what the skip link will take the user to when used. */
  toId: PropTypes.string,
};

export const { defaultProps, propTypes } = SkipLink;

export default SkipLink;
