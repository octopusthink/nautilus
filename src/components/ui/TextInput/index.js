import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';

import { interfaceUI } from 'styles';

export const TextInput = ({ children, disabled, label, ...otherProps }) => {
  const labelId = label || shortid.generate();

  return (
    <div {...otherProps}>
      <label for={labelId}>{label}</label>
      <input id={labelId} type="text" value={children} />
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
      margin: 0 0 ${theme.spacing.padding.xs};

      &:focus {
        color: ${theme.colors.intent.focusText};
      }
    }

    input {
      ${interfaceUI.medium(theme)};
      background: ${theme.colors.buttons.neutral};
      border: 2px solid ${theme.colors.text.default};
      border-radius: 0;
      color: ${theme.colors.text.default};
      display: block;
      margin: 0 0 ${theme.spacing.margin.m};
      outline: none;
      padding: ${theme.spacing.padding.m} ${theme.spacing.padding.m};
      transition: box-shadow 200ms;
      width: 100%;
      box-sizing: border-box;

      &:focus {
        box-shadow: 0 0 1px 4px ${theme.colors.intent.focusOutline};
        outline: none;
        color: ${theme.colors.text.dark};
      }
    }
  `;
});
