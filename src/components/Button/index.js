import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { interfaceUI } from 'styles';

export const Button = ({
  children,
  minimal,
  navigation,
  primary,
  disabled,
  success,
  warning,
  danger,
  ...otherProps
}) => {
  invariant(
    [minimal, primary].filter((prop) => prop).length <= 1,
    '<Button> should not be both `minimal` and `primary`, so which is it?',
  );

  invariant(
    [danger, success, warning].filter((prop) => prop).length <= 1,
    '<Button> should only use one of `danger`, `warning`, or `success`. Pick a lane!',
  );

  let Component = 'button';
  if (navigation === true) {
    // TODO: Use `react-router-dom` `<Link>` (or better a `nautilus` `<Link>`)
    // component here.
    Component = 'a';
  }

  return (
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <Component {...otherProps}>{children}</Component>
  );
};

Button.defaultProps = {
  children: undefined,
  disabled: false,
  minimal: false,
  navigation: false,
  primary: false,
  type: 'button',
  success: false,
  warning: false,
  danger: false,
};

Button.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Disables the button; this applies a disabled style but **does not disable any event handlers for the button**. Your `onClick` handlers should check for `props.disabled` to modify their behaviour accordingly. */
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

  /** Outputs a `react-router-dom` `<Link>` tag that looks (and largely behaves) like a `<Button>`, but can used as navigation. Setting this to `true` enables `Link` properties; see: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md. */
  navigation: PropTypes.bool,

  /** HTML `type` attribute for the button. Defaults to `"button"`. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default styled(Button)(
  ({
    danger,
    disabled,
    minimal,
    navigation,
    primary,
    success,
    theme,
    warning,
  }) => {
    let currentButtonColor = theme.colors.buttons.default;
    let currentButtonColorDark = theme.colors.buttons.defaultDark;
    let currentButtonColorLight = theme.colors.buttons.defaultLight;

    if (disabled === true) {
      currentButtonColor = theme.colors.buttons.disabled;
      currentButtonColorDark = theme.colors.buttons.disabledDark;
      currentButtonColorLight = theme.colors.buttons.disabledLight;
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
      margin: 0 ${theme.spacing.margin.xxs} ${theme.spacing.margin.xs};
      outline: none;
      padding: ${theme.spacing.padding.m} ${theme.spacing.padding.l};
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
            transition: margin 200ms;
          }

          &:hover::after {
            margin-left: 4px;
            margin-right: -4px;
          }
        `}
    `;
  },
);
