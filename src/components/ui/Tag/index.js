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
  const { theme } = props;

  return css`
    ${metadata.small(theme)};
    background: ${theme.colors.accent.primary};
    color: ${theme.colors.text.inverse};
    margin: 0 ${toUnits(theme.spacing.padding.xSmall)}
      ${toUnits(theme.spacing.padding.xSmall)} 0;
    padding: ${toUnits(theme.spacing.padding.xSmall)}
      ${toUnits(theme.spacing.padding.small)};
  `;
};

Tag.defaultProps = {
  children: undefined,
};

Tag.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Tag;

Tag.displayName = 'Tag';

export default styled(Tag)(styles);
