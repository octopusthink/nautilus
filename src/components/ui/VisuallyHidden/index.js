import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

export const VisuallyHiddenStyles = css`
  border: 0;
  clip-path: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const VisuallyHiddenRevealStyles = css`
  clip-path: none;
  height: auto;
  margin: 0;
  overflow: auto;
  position: static;
  white-space: nowrap;
  width: auto;
`;

export const VisuallyHidden = (props) => {
  const { as, children, ...otherProps } = props;

  const Component = as;

  return (
    <Component css={VisuallyHiddenStyles} {...otherProps}>
      {children}
    </Component>
  );
};

VisuallyHidden.defaultProps = {
  as: 'span',
  children: undefined,
};

VisuallyHidden.propTypes = {
  /** Component/tag used to output the VisuallyHidden component. */
  as: PropTypes.elementType,
  /** @ignore */
  children: PropTypes.node,
};

export default VisuallyHidden;
