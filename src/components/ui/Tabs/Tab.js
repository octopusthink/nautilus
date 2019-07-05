import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from 'styles';
import { useTheme } from 'themes';

export const Tab = (props) => {
  const { children, label, ...otherProps } = props;
  const theme = useTheme();

  return (
    <li role="presentation">
      <a
        css={css`
          padding: ${toUnits(theme.spacing.padding.small)};
          text-decoration: none;
          color: ${theme.colors.neutral.grey800};
        `}
        role="tab"
        href="#section1"
        id="tab1"
        aria-selected="true"
      >
        {label}
      </a>
    </li>
  );
};

export const styles = (props) => {
  const { theme } = props;

  return css`
    margin: 0 ${toUnits(theme.spacing.padding.small)} 0 0;
  `;
};

Tab.defaultProps = {
  children: undefined,
};

Tab.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

Tab.displayName = 'Tabs.Tab';

export default styled(Tab)(styles);
