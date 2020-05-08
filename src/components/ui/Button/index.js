import { css } from '@emotion/core';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

// Import the non-styled Link so we don't have to overwrite Link styles if
// the `navigation` prop is used by a button.
import Link from '../Link';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

export const ComponentClassName = 'Nautilus-Button';

export const qualityControl = (props) => {
  const { minimal, primary, success, warning, danger } = props;

  invariant(
    [minimal, primary].filter((prop) => prop).length <= 1,
    '<Button> should not be both `minimal` and `primary`, so which is it?',
  );

  invariant(
    [danger, success, warning].filter((prop) => prop).length <= 1,
    '<Button> should only use one of `danger`, `warning`, or `success`. Pick a lane!',
  );
};

const Button = (props) => {
  const {
    __iconId,
    children,
    danger,
    disabled,
    href,
    navigationDirection,
    leadingIcon,
    linkProps,
    minimal,
    navigation,
    noMargin,
    onlyIcon,
    primary,
    stackedIcon,
    success,
    trailingIcon,
    unstyled,
    warning,
    ...otherProps
  } = props;

  qualityControl(props);
  const theme = useTheme();

  let Component = 'button';
  let linkPropsToUse;
  let trailingIconName;
  let leadingIconName;

  // Set directional icons for navigation buttons.
  if (navigation === true) {
    if (navigationDirection === 'backward') {
      leadingIconName = 'arrow-left';
    } else {
      trailingIconName = 'arrow-right';
    }
  }

  // Set default icons for semantic buttons, to underscore meaning.
  if (success === true) {
    leadingIconName = 'check-circle';
  }
  if (warning === true) {
    leadingIconName = 'alert-triangle';
  }
  if (danger === true) {
    leadingIconName = 'x-octagon';
  }

  // If the icon is explicitly set, it should override any defaults.
  if (leadingIcon) {
    leadingIconName = leadingIcon;
  }
  if (trailingIcon) {
    trailingIconName = trailingIcon;
  }

  // Set props for the navigation button.
  if (navigation === true) {
    Component = Link;
    // Set properties that only a Link component should use.
    otherProps.href = href;
    // Don't include any link styles.
    otherProps.unstyled = true;
    // Unset certain button-specific props.
    otherProps.type = undefined;
    linkPropsToUse = { ...linkProps };
  }

  // Set the styles for this button.
  let currentButtonColor = theme.colors.buttons.default;
  let currentButtonColorDark = theme.colors.buttons.defaultDark;
  let currentButtonColorLight = theme.colors.buttons.defaultLight;

  if (disabled === true) {
    currentButtonColor = theme.colors.state.disabled;
    currentButtonColorDark = theme.colors.state.disabledDark;
    currentButtonColorLight = theme.colors.state.disabledLight;
  }

  if (success === true) {
    currentButtonColor = theme.colors.intent.success;
    currentButtonColorDark = theme.colors.intent.successDark;
    currentButtonColorLight = theme.colors.intent.successLight;
  }

  if (warning === true) {
    currentButtonColor = theme.colors.intent.warning;
    currentButtonColorDark = theme.colors.intent.warningDark;
    currentButtonColorLight = theme.colors.intent.warningLight;
  }

  if (danger === true) {
    currentButtonColor = theme.colors.intent.danger;
    currentButtonColorDark = theme.colors.intent.dangerDark;
    currentButtonColorLight = theme.colors.intent.dangerLight;
  }

  // Set the button text—for onlyIcon buttons, we want to visually hide the text.
  let buttonText = children;
  if (onlyIcon) {
    buttonText = <VisuallyHidden>{children}</VisuallyHidden>;
  }

  return (
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <Component
      css={
        unstyled
          ? undefined
          : css`
        ${interfaceUI.medium(theme)}
        align-items: center;
        background: ${theme.colors.buttons.neutral};
        border: 2px solid ${currentButtonColor};
        border-radius: 8px;
        color: ${currentButtonColor};
        cursor: pointer;
        display: flex;
        margin: 0;
        outline: none;
        padding: ${toUnits(theme.spacing.padding.medium)} ${toUnits(theme.spacing.padding.large)};
        position: relative;
        text-align: center;
        text-decoration: none;
        top: 0;
        transition: all 200ms ease-in-out;
        transition: top 0ms ease-out;
        width: max-content;

        &::-moz-focus-inner {
          border: 0;
        }

        &:active {
          border-color: ${currentButtonColorDark};
          color: ${currentButtonColorDark};
          top: 2px;
        }

        &:focus {
          box-shadow: 0 0 1px 4px ${currentButtonColorLight};
          outline: none;
        }

        /* Primary styles */
        ${primary &&
          css`
            background: ${currentButtonColor};
            color: ${theme.colors.buttons.neutral};

            &:hover {
              background-color: ${currentButtonColorDark};
            }

            &:active {
              background: ${currentButtonColorDark};
              color: ${theme.colors.buttons.neutral};
            }
          `}

        /* Minimal styles */
        ${minimal &&
          css`
            background: transparent;
            border-color: transparent;
            border-radius: 0;
            padding-left: 0;
            padding-right: 0;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              bottom: 0;
              width: 0;
              border-bottom: 2px solid ${currentButtonColorDark};
              transition: all 200ms ease-in-out;
            }

            &:hover::before {
              width: 100%;
            }
          `}

        /* Set padding based on whether we have leading or trailing icons. */
        ${leadingIconName &&
          css`
            padding-left: ${toUnits(theme.spacing.padding.medium)};
          `}

        ${trailingIconName &&
          css`
            padding-right: ${toUnits(theme.spacing.padding.medium)};
          `}

        ${stackedIcon &&
          css`
            flex-direction: column;
            padding: ${toUnits(theme.spacing.padding.medium)};
          `}
        
        /* Buttons without text should get rounded */
        ${onlyIcon &&
          css`
            border-radius: 100%;
            padding: ${toUnits(theme.spacing.padding.medium)};
          `}

          ${onlyIcon &&
            minimal &&
            css`
              padding: ${toUnits(theme.spacing.padding.medium)};
            `}

        /* Set external margins */
        ${!noMargin &&
          css`
            margin: 0 ${toUnits(theme.spacing.margin.xxSmall)}
              ${toUnits(theme.spacing.margin.xSmall)};
          `}
        
        /* Hover styling */
        &:hover {
          ${!minimal &&
            css`
              border-color: ${currentButtonColorDark};
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            `}

          ${!primary &&
            css`
              color: ${currentButtonColorDark};
            `}
        }
      `
      }
      disabled={!navigation ? disabled : undefined}
      {...linkPropsToUse}
      {...otherProps}
    >
      {leadingIconName && (
        <Icon
          css={css`
            margin: 0 ${toUnits(theme.spacing.padding.small)} 0 0;
          `}
          id={__iconId}
          name={leadingIconName}
        />
      )}

      {stackedIcon && (
        <Icon
          css={css`
            margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)} 0;
          `}
          id={__iconId}
          name={stackedIcon}
          medium
        />
      )}

      {onlyIcon && <Icon id={__iconId} noMargin name={onlyIcon} medium />}

      {buttonText}

      {trailingIconName && (
        <Icon
          css={css`
            margin: 0 0 0 ${toUnits(theme.spacing.padding.small)};
          `}
          id={__iconId}
          name={trailingIconName}
        />
      )}
    </Component>
  );
};

Button.defaultProps = {
  __iconId: undefined,
  children: undefined,
  danger: false,
  disabled: false,
  navigationDirection: 'forward',
  href: undefined,
  leadingIcon: undefined,
  linkProps: undefined,
  minimal: false,
  navigation: false,
  noMargin: false,
  onlyIcon: undefined,
  primary: false,
  stackedIcon: undefined,
  success: false,
  trailingIcon: undefined,
  type: 'button',
  unstyled: false,
  warning: false,
};

Button.propTypes = {
  /** @ignore ID prop for the Icon component; only used for testing. */
  __iconId: PropTypes.string,
  /** @ignore */
  children: PropTypes.node,
  /** Disables the button; this applies a disabled style but **does not disable any event handlers for the button**. Your `onClick`, `onTap`, etc. handlers should check for the `disabled` prop to modify their behaviour accordingly. */
  disabled: PropTypes.bool,
  /** Increase the visual prominence of this button in the UI. */
  primary: PropTypes.bool,
  /** Decrease the visual prominence of this button in the UI. */
  minimal: PropTypes.bool,
  /** Apply semantic styling to indicate success or positive intent. */
  success: PropTypes.bool,
  /** Apply semantic styling to indicate a warning. */
  warning: PropTypes.bool,
  /** Apply semantic styling to indicate danger or negative intent. */
  danger: PropTypes.bool,
  /** Used to link to a route that will be handled by Nautilus' `Link` component. */
  href: PropTypes.string,
  /** Set the direction of navigation: forward (default) or backward. */
  navigationDirection: PropTypes.string,
  /** Show an icon inside the button, before the text. Passes a string to Icon's name prop. */
  leadingIcon: PropTypes.string,
  /** Props to pass to the underlying Nautilus `Link` component when `useNavigation` is `true`. */
  // eslint-disable-next-line react/forbid-prop-types
  linkProps: PropTypes.object,
  /** Outputs a Nautilus `<Link>` tag that looks (and largely behaves) like a `<Button>`, but can used as navigation. Setting this to `true` enables `Link` properties. */
  navigation: PropTypes.bool,
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /** Show only an icon—no text. Passes a string to Icon's name prop. */
  onlyIcon: PropTypes.string,
  /** Show an icon inside the button, on top of text. Passes a string to Icon's name prop. */
  stackedIcon: PropTypes.string,
  /** Show an icon inside the button, after the text. Passes a string to Icon's name prop. */
  trailingIcon: PropTypes.string,
  /** HTML `type` attribute for the button. Defaults to `"button"`. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

Button.displayName = 'Button';

export const { defaultProps, propTypes } = Button;

export default Button;
