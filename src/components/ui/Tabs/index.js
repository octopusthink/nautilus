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
import { bodyStyles, toUnits } from 'styles';
import { useTheme } from 'themes';
import { CustomPropTypes } from 'utils';

import Tab from './Tab';

export const Tabs = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  const labels = useMemo(() => {
    return Children.toArray(children)
      .filter((child) => {
        return child.type === Tab;
      })
      .map((child, index) => {
        return (
          <li role="presentation">
            <a
              css={css`
                display: inline-block;
                padding: 0 ${toUnits(theme.spacing.padding.large)}
                  ${toUnits(theme.spacing.padding.small)} 0;
                text-decoration: none;
                color: ${theme.colors.neutral.grey800};
              `}
              role="tab"
              href={`#UNIQUEIDHERESOON-section-${index}`}
              id={`UNIQUEIDHERESOON-tab-${index}`}
              // aria-selected={TODO}
            >
              {child.props.label}
            </a>
          </li>
        );
      });
  }, [children]);

  const tabPanels = useMemo(() => {
    return Children.toArray(children)
      .filter((child) => {
        return child.type === Tab;
      })
      .map((child, index) => {
        return (
          <section
            role="tabpanel"
            id={`UNIQUEIDHERESOON-section-${index}`}
            aria-labelledby={`UNIQUEIDHERESOON-tab-${index}`}
          >
            {child}
          </section>
        );
      });
  }, [children]);

  return (
    <React.Fragment>
      <ul role="tablist" {...otherProps}>
        {labels}
      </ul>
      {tabPanels}
    </React.Fragment>
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
    border-bottom: 1px solid ${theme.colors.neutral.grey600};
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
