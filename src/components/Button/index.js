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
  ...otherProps
}) => {
  invariant(
    (minimal === true && primary === true) === false,
    'Cannot use `minimal` and `primary` props together on a <Button> component.',
  );
  const theme = useTheme();

  let Component = 'button';
  if (navigation === true) {
    Component = 'a';
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
        border: 2px solid ${theme.components.Button.defaultColor};
        color: ${theme.components.Button.defaultColor};
        background: ${theme.colors.white};
        border-radius: 8px;
        margin: 0 16px 16px;
        line-height: 1.412;
        transition: box-shadow 200ms;

        &:active {
          border-color: ${theme.components.Button.activeColor};
          color: ${theme.components.Button.activeColor};
        }

        &:focus {
          box-shadow: 0 0 1px 4px #F5A3CE;
          outline: none;
        }

        &::-moz-focus-inner {
          border: 0;
        }

        &:hover {
          box-shadow: 0 2px 0 0 ${theme.components.Button.activeColor};
        }

        ${primary &&
          css`
            background: ${theme.components.Button.defaultColor};
            color: ${theme.colors.white};

            &:active {
              background: ${theme.components.Button.activeColor};
              color: ${theme.colors.white};
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

          &:disabled {
            border-color: ${theme.components.Button.disabledColor};
            color: ${theme.components.Button.disabledColor};

            &:hover {
                box-shadow: 0 2px 0 0 ${theme.components.Button.disabledActive};
            }

            &:active {
              background: ${theme.components.Button.disabledActive};
            }

            &:focus {
              box-shadow: 0 0 1px 4px #D4D4D4;
            }

            &${primary &&
              css`
                background: ${theme.components.Button.disabledColor};
                color: ${theme.colors.white};
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
};

Button.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Disables the button; this applies a disabled style but **does not disable any event handlers for the button**. Your `onClick` handlers should check for `props.disabled` to modify their behaviour accordingly. */
  disabled: PropTypes.bool,
  /** Decrease the visual prominence of this button in the UI. */
  minimal: PropTypes.bool,
  /** Sometimes, you need a button that's actually a link. We got you! This outputs a `react-router-dom` `<Link>` tag that looks (and largely behaves) like a `<Button>`, but can used as navigation. Setting this to `true` enables `Link` properties; see: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md. */
  navigation: PropTypes.bool,
  /** Increase the visual prominence of this button in the UI. */
  primary: PropTypes.bool,
  /** HTML `type` attribute for the button. Defaults to `"button"`. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
