import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

export const VisuallyHidden = (props) => {
  const { as, children, ...otherProps } = props;

  const Component = as;

  return (
    <Component
      css={css`
        border: 0,
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      `}
      {...otherProps}
    >
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
