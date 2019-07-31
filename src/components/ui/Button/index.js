import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// Import the non-styled Link so we don't have to overwrite Link styles if
// the `navigation` prop is used by a button.
import { Link as UnstyledLink } from 'components/ui/Link';
import Icon from 'components/ui/Icon';
import { interfaceUI, toUnits } from 'styles';
import { useTheme } from 'themes';

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

export const Button = forwardRef((props, ref) => {
  const {
    children,
    danger,
    disabled,
    href,
    linkProps,
    minimal,
    navigation,
    primary,
    success,
    warning,
    ...otherProps
  } = props;

  qualityControl(props);
  const theme = useTheme();

  let Component = 'button';
  let linkPropsToUse;
  if (navigation === true) {
    Component = UnstyledLink;
    // Set properties that only a Link component should use.
    otherProps.href = href;
    // Unset certain button-specific props.
    otherProps.type = undefined;
    linkPropsToUse = { ...linkProps };
  }

  let iconName;
  if (success === true) {
    iconName = 'check-circle';
  }
  if (warning === true) {
    iconName = 'alert-circle';
  }
  if (danger === true) {
    iconName = 'x-circle';
  }

  return (
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <Component
      disabled={!navigation ? disabled : undefined}
      {...linkPropsToUse}
      {...otherProps}
      ref={ref}
    >
      {iconName && (
        <Icon
          name={iconName}
          small
          css={css`
            margin-bottom: ${toUnits(theme.spacing.padding.xxSmall)};
            margin-right: ${toUnits(theme.spacing.padding.xSmall)};
          `}
        />
      )}
      {children}
    </Component>
  );
});

export const styles = (props) => {
  const {
    danger,
    disabled,
    minimal,
    navigation,
    primary,
    success,
    theme,
    warning,
  } = props;

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

  return css`
    ${interfaceUI.medium(theme)}
    background: ${theme.colors.buttons.neutral};
    border: 2px solid ${currentButtonColor};
    border-radius: 8px;
    color: ${currentButtonColor};
    display: inline-block;
    margin: 0 ${toUnits(theme.spacing.margin.xxSmall)} ${toUnits(
    theme.spacing.margin.xSmall,
  )};
    outline: none;
    padding: ${toUnits(theme.spacing.padding.medium)} ${toUnits(
    theme.spacing.padding.large,
  )};
    position: relative;
    text-align: center;
    text-decoration: none;
    top: 0;
    transition: box-shadow 200ms;

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

    &:hover {
      box-shadow: 0 2px 0 0 ${currentButtonColorDark};
    }

    ${primary &&
      css`
        background: ${currentButtonColor};
        color: ${theme.colors.buttons.neutral};

        &:active {
          background: ${currentButtonColorDark};
          color: ${theme.colors.buttons.neutral};
        }
      `}

    ${minimal &&
      css`
        border-left: 0;
        border-radius: 0;
        border-right: 0;
        border-top: 0;
        padding-left: 0;
        padding-right: 0;
      `}

    ${navigation &&
      css`
        &::after {
          content: ' →';
          display: inline;
          padding-right: ${toUnits(theme.spacing.padding.xSmall)};
          transition: all 200ms;
        }

        &:hover::after {
          margin-left: ${toUnits(theme.spacing.padding.xSmall)};
          padding-right: 0;
        }
      `}
  `;
};

Button.defaultProps = {
  children: undefined,
  danger: false,
  disabled: false,
  href: undefined,
  linkProps: undefined,
  minimal: false,
  navigation: false,
  primary: false,
  success: false,
  type: 'button',
  warning: false,
};

Button.propTypes = {
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

  /** Props to pass to the underlying Nautilus `Link` component when `useNavigation` is `true`. */
  // eslint-disable-next-line react/forbid-prop-types
  linkProps: PropTypes.object,

  /** Outputs a Nautilus `<Link>` tag that looks (and largely behaves) like a `<Button>`, but can used as navigation. Setting this to `true` enables `Link` properties. */
  navigation: PropTypes.bool,

  /** HTML `type` attribute for the button. Defaults to `"button"`. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.displayName = 'Button';

export const { defaultProps, propTypes } = Button;

export default styled(Button)(styles);
