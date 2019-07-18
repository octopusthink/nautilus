import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Link } from 'components';
import { interfaceUI, focusStyle, toUnits } from 'styles';

export const SkipLink = forwardRef((props, ref) => {
  const { children, toId, ...otherProps } = props;

  return (
    <Link {...otherProps} asComponent="a" href={`#${toId}`} ref={ref}>
      {children}
    </Link>
  );
});

export const styles = (props) => {
  const { theme } = props;

  return css`
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
  `;
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

SkipLink.displayName = 'SkipLink';

export const { defaultProps, propTypes } = SkipLink;

export default styled(SkipLink)(styles);
