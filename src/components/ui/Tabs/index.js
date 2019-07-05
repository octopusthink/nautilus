import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, {
  Children,
  Fragment,
  cloneElement,
  useMemo,
  useState,
} from 'react';
import shortid from 'shortid';

import Paragraph from 'components/ui/Paragraph';
import { bodyStyles } from 'styles';
import { CustomPropTypes } from 'utils';

import Tab from './Tab';

export const Tabs = (props) => {
  const { children, ...otherProps } = props;

  const tabs = useMemo(() => {
    return Children.toArray(children).filter((child) => {
      return child.type === Tab;
    });
  }, [children]);

  return (
    <ul role="tablist" {...otherProps}>
      {tabs}
    </ul>
  );
};

export const styles = ({
  dark,
  inverse,
  large,
  light,
  ordered,
  small,
  theme,
}) => {
  return css`
    ${bodyStyles({ dark, inverse, large, light, small, theme })};
    padding: 0;
    display: flex;
    list-style-type: none;
  `;
};

Tabs.defaultProps = {
  children: undefined,
  inverse: false,
  dark: false,
  light: false,
};

Tabs.propTypes = {
  /** @ignore Individual Tabs (using the `Tab` component). */
  children: CustomPropTypes.allowedChildren(Tab),
  /** Inverse text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Darken text colour. */
  dark: PropTypes.bool,
  /** Lighten text colour. */
  light: PropTypes.bool,
};

const StyledTabs = styled(Tabs)(styles);

// Export Tab as `Tabs.Tab`.
StyledTabs.Tab = Tab;

export default StyledTabs;
