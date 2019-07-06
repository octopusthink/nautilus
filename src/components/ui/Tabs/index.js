import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, {
  Children,
  Fragment,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import shortid from 'shortid';

import { focusStyle, bodyStyles, toUnits } from 'styles';
import { useTheme } from 'themes';
import { CustomPropTypes } from 'utils';

import Tab from './Tab';

export const Tabs = (props) => {
  const { children, dark, inverse, light, ...otherProps } = props;
  const sectionToFocusRef = useRef();
  const tabToFocusRef = useRef();
  const [generatedId] = useState(shortid.generate());
  const [activeTab, setActiveTab] = useState(0);
  const [focusedSection, setFocusedSection] = useState(null);
  const [focusedTab, setFocusedTab] = useState(null);
  const theme = useTheme();

  const isTab = (child) => {
    return child.type === Tab;
  };

  const numberOfTabs = useMemo(() => {
    return Children.toArray(children).filter(isTab).length;
  }, [children]);

  // This assigns focus to a tab's content when the down arrow key is pressed.
  useEffect(() => {
    if (
      focusedSection !== null &&
      sectionToFocusRef &&
      sectionToFocusRef.current
    ) {
      sectionToFocusRef.current.focus();
      setFocusedSection(null);
    }
  }, [focusedSection, sectionToFocusRef]);

  // This assigns focus to a tab's label when the tab changes via the left/right
  // keys.
  useEffect(() => {
    if (focusedTab !== null && tabToFocusRef && tabToFocusRef.current) {
      tabToFocusRef.current.focus();
      setFocusedTab(null);
    }
  }, [focusedTab, tabToFocusRef]);

  const onKeyDown = useCallback(
    (event) => {
      let newTabIndex;

      // 37 is the keycode for left arrow, which will activate the previous tab.
      if (event.which === 37) {
        newTabIndex = activeTab - 1;
      }
      // 39 is the keycode for right arrow, which will activate the next tab.
      if (event.which === 39) {
        newTabIndex = activeTab + 1;
      }

      // If a new tab index was set, prevent the default action, advance to
      // that tab, and then return;
      if (
        newTabIndex !== undefined &&
        newTabIndex >= 0 &&
        newTabIndex < numberOfTabs
      ) {
        event.preventDefault();
        setActiveTab(newTabIndex);
        setFocusedTab(newTabIndex);
        return;
      }

      // 40 is the keycode for down arrow, which will move the focus into the
      // active tab's content.
      if (event.which === 40) {
        event.preventDefault();
        setFocusedSection(activeTab);
      }
    },
    [activeTab, numberOfTabs],
  );

  const onClickFactory = (index) => {
    return (event) => {
      event.preventDefault();
      setActiveTab(index);
    };
  };

  const labels = useMemo(() => {
    return Children.toArray(children)
      .filter(isTab)
      .map((child, index) => {
        const { label, labelProps } = child.props;
        const {
          onClick: onClickTab,
          onKeyDown: onKeyDownTab,
          ...otherTabProps
        } = labelProps;

        return (
          <li key={`${generatedId}-tab-${label}`} role="presentation">
            <a
              aria-selected={index === activeTab}
              css={css`
                color: ${theme.colors.text.default};
                display: inline-block;
                padding: ${toUnits(theme.spacing.padding.small)}
                  ${toUnits(theme.spacing.padding.large)};
                position: relative;
                text-decoration: none;

                &::after {
                  display: block;
                  border-bottom: 3px solid transparent;
                  content: '';
                  position: absolute;
                  bottom: -2px;
                  left: 0;
                  right: 0;
                }

                &:hover {
                  // color: ${theme.colors.accent.primaryDark};

                  &::after {
                    border-color: ${theme.colors.neutral.grey400};
                  }
                }

                &:focus {
                  ${focusStyle.outline(theme)};
                }

                ${index === activeTab &&
                  css`
                    color: ${theme.colors.text.dark};

                    &::after {
                      border-bottom: 3px solid;
                    }
                  `}
              `}
              href={`#${generatedId}-section-${index}`}
              id={`${generatedId}-tab-${index}`}
              onClick={(event) => {
                onClickFactory(index)(event);
                if (onClickTab) {
                  onClickTab(event);
                }
              }}
              onKeyDown={(event) => {
                onKeyDown(event);
                if (onKeyDownTab) {
                  onKeyDownTab(event);
                }
              }}
              ref={focusedTab === index ? tabToFocusRef : undefined}
              role="tab"
              tabIndex={index !== activeTab ? '-1' : undefined}
              {...otherTabProps}
            >
              {label}
            </a>
          </li>
        );
      });
  }, [
    children,
    activeTab,
    focusedTab,
    generatedId,
    onKeyDown,
    tabToFocusRef,
    theme,
  ]);

  const tabPanels = useMemo(() => {
    return Children.toArray(children)
      .filter(isTab)
      .map((child, index) => {
        const { label } = child.props;

        return cloneElement(child, {
          'aria-labelledby': `${generatedId}-tab-${index}`,
          isActive: activeTab === index,
          id: `${generatedId}-section-${index}`,
          key: `${generatedId}-section-${label}`,
          ref: focusedSection === index ? sectionToFocusRef : undefined,
        });
      });
  }, [children, activeTab, focusedSection, generatedId, sectionToFocusRef]);

  return (
    <Fragment>
      {labels && !!labels.length && (
        <ul role="tablist" {...otherProps}>
          {labels}
        </ul>
      )}
      {tabPanels}
    </Fragment>
  );
};

export const styles = (props) => {
  const { dark, inverse, large, light, small, theme } = props;

  return css`
    ${bodyStyles({ dark, inverse, large, light, small, theme })};
    border-bottom: 1px solid ${theme.colors.neutral.grey600};
    display: flex;
    list-style-type: none;
    padding: 0;
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
