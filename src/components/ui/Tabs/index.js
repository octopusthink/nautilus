import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import shortid from 'shortid';
import { useUpdateEffect } from 'react-use';
import { focusStyle, bodyStyles, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import Tab from './Tab';

const isTab = (child) => child.type === Tab;

const setFocus = (focusedElement, ref, setStateFunc) => {
  if (focusedElement !== null && ref && ref.current) {
    ref.current.focus();
    setStateFunc(null);
  }
};

const Tabs = (props) => {
  const {
    activeTab: activeTabProp,
    children,
    dark,
    inverse,
    light,
    noMargin,
    id,
    onTabChange,
    unstyled,
    ...otherProps
  } = props;
  const sectionToFocusRef = useRef();
  const tabToFocusRef = useRef();
  const [generatedId] = useState(shortid.generate());
  const [activeTabState, setActiveTab] = useState(0);
  const [focusedSection, setFocusedSection] = useState(null);
  const [focusedTab, setFocusedTab] = useState(null);
  const theme = useTheme();

  // Allow the active tab to be managed by a prop.
  const activeTab = activeTabProp ?? activeTabState;

  const numberOfTabs = useMemo(() => Children.toArray(children).filter(isTab).length, [children]);

  // Assigns focus to a tab's content when the down arrow key is pressed.
  useEffect(() => {
    setFocus(focusedSection, sectionToFocusRef, setFocusedSection);
  }, [focusedSection, sectionToFocusRef]);

  // Assign focus to a tab's label when the tab changes via the left/right keys.
  useEffect(() => {
    setFocus(focusedTab, tabToFocusRef, setFocusedTab);
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
      if (newTabIndex !== undefined && newTabIndex >= 0 && newTabIndex < numberOfTabs) {
        event.preventDefault();
        setActiveTab(newTabIndex);
        setFocusedTab(newTabIndex);
        return;
      }

      // If these key presses weren't able to move the focused tab because
      // we're at the end of the row, at least ensure the correct tab is
      // still focused.
      if (newTabIndex !== undefined) {
        event.preventDefault();
        setFocusedTab(activeTab);
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

  const onClickFactory = (index) => (event) => {
    event.preventDefault();
    setActiveTab(index);
  };

  useUpdateEffect(() => {
    if (onTabChange) {
      onTabChange(activeTabState);
    }
  }, [activeTabState]);

  const tabsId = id || generatedId;

  const labels = useMemo(
    () =>
      Children.toArray(children)
        .filter(isTab)
        .map((child, index) => {
          const { label, labelTestId, ...labelProps } = child.props;
          const {
            onClick: onClickTab,
            onKeyDown: onKeyDownTab,
            ref: refTab,
            ...otherTabProps
          } = labelProps;

          return (
            <li key={`${tabsId}-tab-${label}`} role="presentation">
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

                  ${index === activeTab &&
                  css`
                    color: ${theme.colors.text.dark};

                    &::after {
                      border-bottom: 3px solid;
                    }
                  `}

                  &:hover {
                    /* color: ${theme.colors.accent.primaryDark}; */

                    &::after {
                      border-color: ${theme.colors.neutral.grey400};
                    }
                  }

                  &:focus {
                    ${focusStyle.outline(theme)};
                  }
                `}
                href={`#${tabsId}-section-${index}`}
                id={`${tabsId}-tab-${index}`}
                onClick={(event) => {
                  onClickFactory(index)(event);
                  if (onClickTab) {
                    onClickTab(event, index);
                  }
                }}
                onKeyDown={(event) => {
                  onKeyDown(event);
                  if (onKeyDownTab) {
                    onKeyDownTab(event, index);
                  }
                }}
                ref={focusedTab === index ? tabToFocusRef : refTab}
                role="tab"
                tabIndex={index !== activeTab ? '-1' : undefined}
                {...otherTabProps}
                data-testid={labelTestId}
              >
                {label}
              </a>
            </li>
          );
        }),
    [children, activeTab, focusedTab, tabsId, onKeyDown, tabToFocusRef, theme],
  );

  const tabPanels = useMemo(
    () =>
      Children.toArray(children)
        .filter(isTab)
        .map((child, index) => {
          const { label } = child.props;

          return cloneElement(child, {
            'aria-labelledby': `${tabsId}-tab-${index}`,
            isActive: activeTab === index,
            id: `${tabsId}-section-${index}`,
            key: `${tabsId}-section-${label}`,
            ref: focusedSection === index ? sectionToFocusRef : undefined,
          });
        }),
    [children, activeTab, focusedSection, tabsId, sectionToFocusRef],
  );

  return (
    <React.Fragment>
      {labels && !!labels.length && (
        <ul
          css={css`
            ${bodyStyles({ dark, inverse, light, noMargin, theme })};
            border-bottom: 1px solid ${theme.colors.neutral.grey600};
            display: flex;
            list-style-type: none;
            padding: 0;
          `}
          role="tablist"
          {...otherProps}
        >
          {labels}
        </ul>
      )}
      {tabPanels}
    </React.Fragment>
  );
};

Tabs.defaultProps = {
  children: undefined,
  dark: false,
  id: undefined,
  inverse: false,
  light: false,
  noMargin: false,
  unstyled: false,
};

Tabs.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Inverse text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Darken text colour. */
  dark: PropTypes.bool,
  /** @ignore HTML ID prop */
  id: PropTypes.string,
  /** Lighten text colour. */
  light: PropTypes.bool,
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Tabs;

// Export Tab as `Tabs.Tab`.
Tabs.Tab = Tab;

export default Tabs;
