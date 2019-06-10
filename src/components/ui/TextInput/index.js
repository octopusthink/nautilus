import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';

import { interfaceUI } from 'styles';

export const TextInput = ({
  children,
  disabled,
  label,
  placeholder,
  helpText,
  optional,
  multiline,
  size,
  ...otherProps
}) => {
  const labelId = label || shortid.generate();

  let helpTextOutput;
  if (helpText) {
    helpTextOutput = <div class="helpText">{helpText}</div>;
  }

  let optionalOutput;
  if (optional) {
    optionalOutput = <span class="optional">(Optional)</span>;
  }

  let Component = 'input';
  if (multiline) {
    Component = 'textarea';
  }

  return (
    <div {...otherProps}>
      <label for={labelId}>
        {label} {optionalOutput}
      </label>
      {helpTextOutput}
      <Component
        id={labelId}
        type="text"
        value={children}
        placeholder={placeholder}
        rows="4"
      />
    </div>
  );
};

TextInput.defaultProps = {
  children: undefined,
  disabled: false,
  label: '',
  placeholder: '',
  helpText: '',
  optional: false,
  multiline: false,
  size: undefined,
};

TextInput.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Disables the button; this applies a disabled style but **does not disable any event handlers for the button**. Your `onClick` handlers should check for `props.disabled` to modify their behaviour accordingly. */
  disabled: PropTypes.bool,

  /** Visible text that serves to introduce the input. */
  label: PropTypes.string,

  /** Additional context to help users understand the purpose of the input. */
  helpText: PropTypes.string,

  /** Placeholder text, used only for examples. */
  placeholder: PropTypes.string,

  /** Mark the current input as optional. */
  optional: PropTypes.bool,

  /** Mutliline switches from an input to a textarea */
  multiline: PropTypes.bool,

  /** Size defines the number of characters the field is intended to support. */
  size: PropTypes.number,
};

export default styled(TextInput)(({ disabled, size, theme }) => {
  return css`
    label {
      ${interfaceUI.medium(theme)};
      color: ${theme.colors.text.default};
      display: flex;
      justify-content: space-between;
      margin: 0 0 ${theme.spacing.padding.xs};

      &:focus {
        color: ${theme.colors.intent.focusText};
      }
    }

    .helpText {
      ${interfaceUI.small(theme)};
      color: ${theme.colors.text.light};
      margin: 0 0 ${theme.spacing.padding.xs};
    }

    .optional {
      ${interfaceUI.small(theme)};
      color: ${theme.colors.text.light};
      margin-left: ${theme.spacing.margin.xs};
    }

    input,
    textarea {
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

      &::placeholder {
        color: ${theme.colors.text.light};
      }

      ${size &&
        css`
          max-width: ${size}em;
        `}
  `;
});
