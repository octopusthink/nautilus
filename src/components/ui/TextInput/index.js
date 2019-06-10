import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';

import { interfaceUI } from 'styles';

export const TextInput = ({ children, disabled, label, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <label for="">{label}</label>
      <input type="text" value="{children}" />
    </div>
  );
};

TextInput.defaultProps = {
  children: undefined,
  disabled: false,
  label: '',
};

TextInput.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Disables the button; this applies a disabled style but **does not disable any event handlers for the button**. Your `onClick` handlers should check for `props.disabled` to modify their behaviour accordingly. */
  disabled: PropTypes.bool,

  /** Visible text that serves to introduce the input. */
  label: PropTypes.string,
};

export default styled(TextInput)(({ disabled, theme }) => {
  return css`
      label {
        ${interfaceUI.medium(theme)};
        color: ${theme.colors.text.default};
        display: block;
        margin: 0 0 ${theme.spacing.padding.xxs};
      }

      input {
        ${interfaceUI.medium(theme)};
        background: ${theme.colors.buttons.neutral};
        border: 2px solid ${theme.colors.text.default};
        border-radius: 0;
        color: ${theme.colors.text.default};
        display: block;
        margin: 0 0 ${theme.spacing.margin.s};
        outline: none;
        padding: ${theme.spacing.padding.m} ${theme.spacing.padding.m};
        transition: box-shadow 200ms;
        width: 100%;
        box-sizing: border-box;
      }

      &:focus {
        //box-shadow: 0 0 1px 4px ${currentButtonColorLight};
        outline: none;
      }

  `;
});
