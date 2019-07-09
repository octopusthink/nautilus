import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Link } from 'components';

export const SkipLink = forwardRef((props, ref) => {
  const { children, contentId, ...otherProps } = props;

  return (
    <Link {...otherProps} ref={ref} to={contentId} useHref>
      {children}
    </Link>
  );
});

export const styles = (props) => {
  const { theme } = props;

  return css`
    border-bottom: 2px solid ${theme.colors.state.interactive};
  `;
};

SkipLink.defaultProps = {
  children: 'Skip to main content',
  contentId: '#content',
};

SkipLink.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** The HTML ID of the main "content" element on the page; this is what the skip link will take the user to when used.. */
  contentId: PropTypes.string,
};

SkipLink.displayName = 'SkipLink';

export const { defaultProps, propTypes } = SkipLink;

export default styled(SkipLink)(styles);
