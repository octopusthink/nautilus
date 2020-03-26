import PropTypes from 'prop-types';
import React from 'react';

import { VisuallyHiddenStyles } from './styles';

const VisuallyHidden = (props) => {
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
