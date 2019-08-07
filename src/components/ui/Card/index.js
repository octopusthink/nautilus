import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { headingSmall, toUnits } from 'styles';
import { useTheme } from 'themes';

export const Card = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        background: white;
        border: 1px solid ${theme.colors.neutral.grey200};
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
        padding: ${toUnits(theme.spacing.padding.large)};
      `}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Card;

export default Card;
