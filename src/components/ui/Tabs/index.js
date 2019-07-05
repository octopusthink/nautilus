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
import { focusStyle, bodyStyles, toUnits } from 'styles';
import { useTheme } from 'themes';
import { CustomPropTypes } from 'utils';

import Tab from './Tab';

export const Tabs = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabOnClickFactory = (index) => {
    return (event) => {
      event.preventDefault();
      setActiveTab(index);
    };
  };

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
                padding: ${toUnits(theme.spacing.padding.small)}
                  ${toUnits(theme.spacing.padding.large)};
                text-decoration: none;
                color: ${theme.colors.neutral.grey800};

                ${index === activeTab &&
                  css`
                    color: ${theme.colors.text.dark};
                    position: relative;

                    &::after {
                      display: block;
                      border-bottom: 3px solid;
                      content: '';
                      position: absolute;
                      bottom: -2px;
                      left: 0;
                      right: 0;
                    }
                  `}

                &:focus {
                  ${focusStyle.outline(theme)};
                }
              `}
              role="tab"
              href={`#UNIQUEIDHERESOON-section-${index}`}
              id={`UNIQUEIDHERESOON-tab-${index}`}
              onClick={tabOnClickFactory(index)}
              aria-selected={index === activeTab}
            >
              {child.props.label}
            </a>
          </li>
        );
      });
  }, [children, activeTab]);

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
            css={css`
              ${index !== activeTab &&
                css`
                  display: none;
                `}
            `}
          >
            {child}
          </section>
        );
      });
  }, [children, activeTab]);

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
