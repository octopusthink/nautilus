import { css } from '@emotion/core';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from 'themes';

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
    (minimal === true && primary === true) === false,
    'Cannot use `minimal` and `primary` props together on a <Button> component.',
  );

  invariant(
    [danger, success, warning].filter((prop) => prop).length <= 1,
    '<Button> component should only use one of `danger`, `warning`, or `success`. Pick a lane!',
  );

  const theme = useTheme();

  let Component = 'button';
  if (navigation === true) {
    Component = 'a';
  }

  let currentButtonColor = theme.components.ButtonColors.default;
  let currentButtonColorDark = theme.components.ButtonColors.defaultDark;
  let currentButtonColorLight = theme.components.ButtonColors.defaultLight;

  if (disabled === true) {
    currentButtonColor = theme.components.ButtonColors.disabled;
    currentButtonColorDark = theme.components.ButtonColors.disabledDark;
    currentButtonColorLight = theme.components.ButtonColors.disabledLight;
  }

  if (success === true) {
    currentButtonColor = theme.components.ButtonColors.success;
    currentButtonColorDark = theme.components.ButtonColors.successDark;
    currentButtonColorLight = theme.components.ButtonColors.successLight;
  }

  if (warning === true) {
    currentButtonColor = theme.components.ButtonColors.warning;
    currentButtonColorDark = theme.components.ButtonColors.warningDark;
    currentButtonColorLight = theme.components.ButtonColors.warningLight;
  }

  if (danger === true) {
    currentButtonColor = theme.components.ButtonColors.danger;
    currentButtonColorDark = theme.components.ButtonColors.dangerDark;
    currentButtonColorLight = theme.components.ButtonColors.dangerLight;
  }

  return (
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <Component
      css={css`
        font-family: ${theme.typography.bodyFont};
        font-size: 17px;
        padding: 12px 32px;
        outline: none;
        text-decoration: none;
        border: 2px solid ${currentButtonColor};
        color: ${currentButtonColor};
        background: ${theme.components.ButtonColors.neutral};
        border-radius: 8px;
        margin: 0 8px 16px;
        line-height: 1.412;
        transition: box-shadow 200ms;
        position: relative;
        top: 0;

        &:active {
          top: 2px;
          border-color: ${currentButtonColorDark};
          color: ${currentButtonColorDark};
        }

        &:focus {
          box-shadow: 0 0 1px 4px ${currentButtonColorLight};
          outline: none;
        }

        &::-moz-focus-inner {
          border: 0;
        }

        &:hover {
          box-shadow: 0 2px 0 0 ${currentButtonColorDark};
        }

        ${primary &&
          css`
            background: ${currentButtonColor};
            color: ${theme.components.ButtonColors.neutral};

            &:active {
              background: ${currentButtonColorDark};
              color: ${theme.components.ButtonColors.neutral};
            }
          `}

        ${minimal &&
          css`
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-radius: 0;
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
      `}
      {...otherProps}
    >
      {children}
    </Component>
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

export default Button;
