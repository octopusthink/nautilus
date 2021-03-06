import { css } from '@emotion/react';
import classnames from 'classnames';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import Link from '../Link';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { focusStyle, interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

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
    iconOnly,
    leadingIcon,
    minimal,
    navigation,
    navigationDirection,
    noMargin,
    primary,
    stackedIcon,
    success,
    to,
    trailingIcon,
    unstyled,
    warning,
    ...otherProps
  } = props;

  qualityControl(props);
  const theme = useTheme();

  let Component = 'button';
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

  // If any icon is explicitly set to `null`, don't show an icon at all.
  if (leadingIcon === null) {
    leadingIconName = null;
  }
  if (trailingIcon === null) {
    trailingIconName = null;
  }

  // Set props for buttons that should act like links.
  if (href || to) {
    Component = Link;
    // Set properties that only a Link component should use.
    otherProps.href = href;
    otherProps.to = to;
    // Don't include any link styles.
    otherProps.unstyled = true;
    // Unset certain button-specific props.
    otherProps.type = undefined;
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

  // Set the button text—for iconOnly buttons, we want to visually hide the text.
  let buttonText = children;
  if (iconOnly) {
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
              display: inline-flex;
              margin: 0;
              outline: none;
              padding: ${toUnits(theme.spacing.padding.medium)}
                ${toUnits(theme.spacing.padding.large)};
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
                top: 0.2rem;
              }

              /* @todo: should use interactive tokens and pass the colour! */
              &:focus {
                ${focusStyle.outline(theme)};
                box-shadow: 0 0 0 0.4rem ${currentButtonColorLight};
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

              /* Set padding based on whether we have leading or trailing icons. */
        ${leadingIconName &&
              css`
                padding-left: ${toUnits(theme.spacing.margin.small)};
              `}

        ${trailingIconName &&
              css`
                padding-right: ${toUnits(theme.spacing.margin.small)};
              `}

        /* Minimal styles */
        ${minimal &&
              css`
                background: transparent;
                border-color: transparent;
                border-radius: 0;
                padding-left: 0;
                padding-right: 0;
              `}

        ${stackedIcon &&
              css`
                flex-direction: column;
                padding: ${toUnits(theme.spacing.padding.medium)};
              `}

        /* Buttons without text should get rounded */
        ${iconOnly &&
              css`
                border-radius: 100%;
                padding: ${toUnits(theme.spacing.padding.medium)};
              `}

        /* Set external margins */
        ${!noMargin &&
              css`
                margin: 0 ${toUnits(theme.spacing.margin.xxSmall)}
                  ${toUnits(theme.spacing.margin.xSmall)};
              `}

        .Nautilus-navigationIcon--animated {
                transition: all 200ms ease-in-out;
              }

              /* Hover styling */
              &:hover {
                ${!minimal &&
                css`
                  border-color: ${currentButtonColorDark};
                `}

                ${!primary &&
                css`
                  color: ${currentButtonColorDark};
                `}

          ${navigation &&
                css`
                  .Nautilus-navigationIcon--animated {
                    ${leadingIconName &&
                    css`
                      /*
                      Use a negative transform on a leading icon, to ensure the
                      icon is always moving away from the text on hover.
                    */
                      transform: translateX(-${toUnits(theme.spacing.padding.xSmall)});
                    `}
                    ${trailingIconName &&
                    css`
                      transform: translateX(${toUnits(theme.spacing.padding.xSmall)});
                    `}
                transition: all 200ms linear;
                  }
                `}
              }
            `
      }
      disabled={!(href || to) ? disabled : undefined}
      {...otherProps}
    >
      {leadingIconName && (
        <Icon
          className={classnames({
            'Nautilus-navigationIcon': navigation && navigationDirection === 'backward',
            'Nautilus-navigationIcon--animated':
              navigation && navigationDirection === 'backward' && !leadingIcon,
          })}
          css={css`
            margin-right: ${toUnits(theme.spacing.padding.xSmall)};
          `}
          id={__iconId}
          name={leadingIconName}
          noMargin
        />
      )}

      {stackedIcon && (
        <Icon
          css={css`
            margin-bottom: ${toUnits(theme.spacing.padding.xSmall)};
          `}
          id={__iconId}
          name={stackedIcon}
          noMargin
          medium
        />
      )}

      {iconOnly && <Icon id={__iconId} noMargin name={iconOnly} medium />}

      {buttonText}

      {trailingIconName && (
        <Icon
          className={classnames({
            'Nautilus-navigationIcon': navigation && navigationDirection === 'forward',
            'Nautilus-navigationIcon--animated':
              navigation && navigationDirection === 'forward' && !trailingIcon,
          })}
          css={css`
            margin-left: ${toUnits(theme.spacing.padding.xSmall)};
          `}
          id={__iconId}
          name={trailingIconName}
          noMargin
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
  minimal: false,
  navigation: false,
  noMargin: false,
  iconOnly: undefined,
  primary: false,
  stackedIcon: undefined,
  success: false,
  to: undefined,
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
  /** Used to link to a URL that will be handled by Nautilus' `Link` component. */
  href: PropTypes.string,
  /** Show only an icon—no text. Passes a string to Icon's name prop. */
  iconOnly: PropTypes.string,
  /** Show an icon inside the button, before the text. Passes a string to Icon's name prop. */
  leadingIcon: PropTypes.string,
  /** Style this button with a navigation arrow pointing forward (default) or backward (see `navigationDirection`). */
  navigation: PropTypes.bool,
  /** Set the direction of navigation: forward (default) or backward. */
  navigationDirection: PropTypes.oneOf(['backward', 'forward']),
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /** Show an icon inside the button, on top of text. Passes a string to Icon's name prop. */
  stackedIcon: PropTypes.string,
  /** Used to link to a route that will be handled by Nautilus' `Link` component. */
  to: PropTypes.string,
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
