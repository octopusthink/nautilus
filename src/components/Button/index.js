import { css } from '@emotion/core';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

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

  let Component = 'button';
  if (navigation === true) {
    Component = 'a';
  }

  return (
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <Component
      css={css`
        background: purple;
        border: 1px solid purple;
        border-radius: 8px;
        color: #fff;
        font-family: sans-serif;
        font-size: 16px;
        padding: 8px;
        outline: none;
        text-decoration: none;

        &:active {

        }

        &:disabled {

        }

        &:focus, &:hover {
          
        }

        ${primary &&
          css`
            font-size: 24px;
          `}

        ${minimal &&
          css`
            font-size: 8px;
          `}

        ${navigation &&
          css`
            &::after {
              content: '↗️';
              display: inline;
              height: 12px;
              width: 12px;
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
