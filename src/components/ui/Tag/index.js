import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Icon } from 'components/ui/Icon';
import { metadata, toUnits } from 'styles';

export const Tag = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <span ref={ref} {...otherProps}>
      {children}
    </span>
  );
});

export const styles = (props) => {
  const { color, theme } = props;

  return css`
    ${metadata.small(theme)};
    margin: 0 ${toUnits(theme.spacing.padding.xSmall)}
      ${toUnits(theme.spacing.padding.xSmall)} 0;

    ${color &&
      css`
        background: ${color};
        color: ${theme.colors.text.inverse};
        padding: ${toUnits(theme.spacing.padding.xSmall)}
          ${toUnits(theme.spacing.padding.small)};
      `}
  `;
};

Tag.defaultProps = {
  children: undefined,
  color: null,
};

Tag.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use colour to differentiate different tags or indicate status. */
  color: PropTypes.string,
};

export const { defaultProps, propTypes } = Tag;

Tag.displayName = 'Tag';

export default styled(Tag)(styles);
