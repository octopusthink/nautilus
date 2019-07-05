import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from 'styles';
import { useTheme } from 'themes';

export const Tab = (props) => {
  const { children, label, ...otherProps } = props;
  const theme = useTheme();

  return children;
};

Tab.defaultProps = {
  children: undefined,
};

Tab.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

Tab.displayName = 'Tabs.Tab';

export default Tab;
