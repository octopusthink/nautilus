import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import shortid from 'shortid';

import { interfaceUI } from 'styles';
import { useTheme } from 'themes';

const smallText = (props) => {
  const { theme } = props;

  return css`
    ${interfaceUI.small(theme)};
    color: ${theme.colors.text.light};
    margin: 0 0 ${theme.spacing.padding.xs};
  `;
};

export const TextInput = (props) => {
  const {
    children,
    disabled,
    label,
    id,
    placeholder,
    instructions,
    multiline,
    rows,
    size,
    subLabel,
    type,
    ...otherProps
  } = props;

  const theme = useTheme();

  const labelId = id || shortid.generate();

  let InputComponent = 'input';
  if (multiline) {
    InputComponent = 'textarea';
  }

  return (
    <Fragment>
      <label
        css={css`
          ${interfaceUI.medium(theme)};
          color: ${theme.colors.text.default};
          display: flex;
          flex: 1 0 50%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 0 ${theme.spacing.padding.xs};

          &:focus {
            color: ${theme.colors.intent.focusText};
          }
        `}
        htmlFor={labelId}
      >
        {label}
        {subLabel && (
          <span
            css={css`
              ${smallText({ theme })};
            `}
          >
            {subLabel}
          </span>
        )}
        {instructions && (
          <span
            css={css`
              ${smallText({ theme })};

              clear: both;
              flex: 1 0 100%;
              flex-grow: 1;
            `}
          >
            {instructions}
          </span>
        )}
      </label>
      <InputComponent
        css={css`
          ${interfaceUI.medium(theme)};
          background: ${theme.colors.buttons.neutral};
          border-radius: 0;
          border: 2px solid ${theme.colors.text.default};
          box-sizing: border-box;
          color: ${theme.colors.text.default};
          display: block;
          margin: 0 0 ${theme.spacing.margin.m};
          outline: none;
          padding: ${theme.spacing.padding.m} ${theme.spacing.padding.m};
          transition: box-shadow 200ms;
          width: 100%;

          &:focus {
            box-shadow: 0 0 1px 4px ${theme.colors.intent.focusOutline};
            color: ${theme.colors.text.dark};
            outline: none;
          }

          &::placeholder {
            color: ${theme.colors.text.light};
          }
        `}
        id={labelId}
        placeholder={placeholder}
        rows={multiline && rows}
        type={type}
        {...otherProps}
      />
      {children}
    </Fragment>
  );
};

// We export all components as styled components to allow component targetting
// in our styles, but because this component renders multiple DOM elements (
// which are each styled with the `css` prop), we don't have any styles relevant
// to the whole component.
export const styles = () => {
  return css``;
};

TextInput.defaultProps = {
  children: undefined,
  disabled: false,
  instructions: undefined,
  label: '',
  id: undefined,
  placeholder: '',
  multiline: false,
  rows: 4,
  size: undefined,
  subLabel: undefined,
  type: 'text',
};

TextInput.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Disables this input; this applies a disabled style and disables user input/interaction with this element. This is useful if you have inputs that are conditionally allowed based on other states in your UI. */
  disabled: PropTypes.bool,

  /** HTML ID attribute, used for both the `<input>` `id` attribute and the `<label>` `for` attribute. */
  id: PropTypes.string,

  /** Additional context to help users understand the purpose of the input. */
  instructions: PropTypes.string,

  /** Visible text that serves to introduce the input. */
  label: PropTypes.string,

  /** Set to `true` for a multiline input (a `textarea` element). */
  multiline: PropTypes.bool,

  /** Number of rows to provide when using a `multiline` input. Ignored when `multiline` is `false`. */
  rows: PropTypes.number,

  /** Size defines the number of characters the field is intended to support. */
  size: PropTypes.number,

  /** Placeholder text, used only for examples. */
  placeholder: PropTypes.string,

  /** Visible text or other content that can be used for information like "required" or "optional". */
  subLabel: PropTypes.node,

  /** HTML `type` attribute for the `<input>` element. */
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

export default styled(TextInput)(styles);
