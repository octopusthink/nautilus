import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { cloneElement, forwardRef, useCallback, useMemo, useState } from 'react';
import shortid from 'shortid';

import { focusStyle, interfaceUI, toUnits } from 'styles';
import { useTheme } from 'themes';

const smallText = (props) => {
  const { theme } = props;

  return css`
    ${interfaceUI.small(theme)};
    color: ${theme.colors.text.light};
    margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)};
  `;
};

export const TextField = forwardRef((props, ref) => {
  const {
    children,
    disabled,
    error,
    label,
    labelId,
    id,
    placeholder,
    onBlur,
    onFocus,
    hint,
    multiline,
    rows,
    size,
    optional,
    type,
    ...otherProps
  } = props;

  const [focus, setFocus] = useState(otherProps.autofocus);
  const [generatedId] = useState(shortid.generate());
  const inputId = useMemo(() => {
    return id || generatedId;
  }, [generatedId, id]);
  const theme = useTheme();

  // Memoise our handlers as they don't need to be re-created on every render.
  const onBlurHandler = useCallback(
    (...args) => {
      setFocus(false);
      if (onBlur) {
        onBlur(...args);
      }
    },
    [onBlur],
  );
  const onFocusHandler = useCallback(
    (...args) => {
      setFocus(true);
      if (onFocus) {
        onFocus(...args);
      }
    },
    [onFocus],
  );

  const errorId = useMemo(() => {
    if (!error) {
      return undefined;
    }

    return error.props && error.props.id ? error.props.id : `error-${generatedId}`;
  }, [error, generatedId]);

  const errorComponent = useMemo(() => {
    if (!error) {
      return undefined;
    }

    if (typeof error === 'string') {
      // TODO: Use error styling here, and move margins to TextField component, maybe in a wrapper? Eventually we probably want some kind of
      // <Message> component with an error style.
      return (
        <div
          id={errorId}
          css={css`
            ${interfaceUI.medium(theme)};
            color: ${theme.colors.state.errorText};
            margin-top: -${toUnits(theme.spacing.padding.large)};
            margin-bottom: ${toUnits(theme.spacing.padding.large)};
          `}
        >
          {error}
        </div>
      );
    }

    return cloneElement(error, { id: errorId });
  }, [error, errorId, theme]);

  let InputComponent = 'input';
  if (multiline) {
    InputComponent = 'textarea';
  }

  return (
    <React.Fragment>
      {label && (
        <label
          css={css`
            ${interfaceUI.medium(theme)};
            color: ${theme.colors.text.default};
            display: flex;
            flex: 1 0 50%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)};

            ${!disabled &&
              css`
                &:active {
                  ${focusStyle.text(theme)};
                }
              `}

            ${disabled &&
              css`
                color: ${theme.colors.state.disabled};
              `}

          &:focus {
              ${focusStyle.text(theme)};
            }

            ${focus &&
              css`
                ${focusStyle.text(theme)};
              `}
          `}
          htmlFor={inputId}
          id={labelId}
        >
          {label}
          {optional && theme.components.TextField.optionalMessage && (
            <span
              css={css`
                ${smallText({ theme })};
              `}
            >
              {theme.components.TextField.optionalMessage}
            </span>
          )}
          {hint && (
            <span
              css={css`
                ${smallText({ theme })};

                clear: both;
                flex: 1 0 100%;
                flex-grow: 1;
              `}
            >
              {hint}
            </span>
          )}
        </label>
      )}
      <InputComponent
        aria-errormessage={errorId}
        css={css`
          ${interfaceUI.medium(theme)};
          background: ${theme.colors.buttons.neutral};
          border-radius: 0;
          border: 2px solid ${theme.colors.text.default};
          box-sizing: border-box;
          color: ${theme.colors.text.default};
          display: block;
          margin: 0 0 ${toUnits(theme.spacing.margin.medium)};
          outline: none;
          padding: ${toUnits(theme.spacing.padding.medium)} ${toUnits(
          theme.spacing.padding.medium,
        )};
          transition: box-shadow 200ms;
          width: 100%;

          ${size &&
            css`
              max-width: ${size - 1}em;
            `}

          ${disabled &&
            css`
              color: ${theme.colors.state.disabled};
              background-color: ${theme.colors.state.disabledLight};
              border-color: ${theme.colors.state.disabledLight};
            `}

          ${error &&
            css`
              border-color: ${theme.colors.state.errorOutline};
            `}

          &:optional {
          }

          &:required {
            /*
              This might be a React Styleguidist style that we're overriding.
              TODO: Remove this from the styleguide styles.
            */
            box-shadow: none;
          }

          &:focus {
            color: ${theme.colors.text.dark};
            ${focusStyle.outline(theme)};
          }

          &::placeholder {
            color: ${theme.colors.text.light};
          }
        `}
        disabled={disabled}
        id={inputId}
        placeholder={placeholder}
        required={!optional && 'required'}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        ref={ref}
        rows={multiline ? rows : undefined}
        maxLength={size}
        type={!multiline ? type : undefined}
        {...otherProps}
      />
      {errorComponent}
      {children}
    </React.Fragment>
  );
});

TextField.defaultProps = {
  children: undefined,
  disabled: false,
  error: undefined,
  hint: undefined,
  labelId: undefined,
  id: undefined,
  placeholder: undefined,
  onBlur: undefined,
  onFocus: undefined,
  multiline: false,
  rows: 4,
  size: undefined,
  optional: false,
  type: 'text',
};

TextField.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  onBlur: PropTypes.func,
  /** @ignore */
  onFocus: PropTypes.func,

  /** Disables this input; this applies a disabled style and disables user input/interaction with this element. This is useful if you have inputs that are conditionally allowed based on other states in your UI. */
  disabled: PropTypes.bool,

  /** An error message (either a simple string or a component) used to output an error message related to this component's value. If provided, an `aria-errormessage` will be set on the input component that will tell users of assistive technology the error message relates to this input. */
  error: PropTypes.node,

  /** HTML `id` attribute of the input component (either an `input` if `multiline` is `false` or `textarea` if `multiline` is `true`). Used for both the input component `id` attribute and the `<label>` `for` attribute. */
  id: PropTypes.string,

  /** Additional context to help users understand the purpose of the input. */
  hint: PropTypes.node,

  /** Visible text that serves to introduce the input. */
  label: PropTypes.node.isRequired,

  /** HTML `id` attribute for the `<label>` tag used to label the text input component. */
  labelId: PropTypes.string,

  /** Set to `true` for a multiline input (a `textarea` element). */
  multiline: PropTypes.bool,

  /** Number of rows to provide when using a `multiline` input. Ignored when `multiline` is `false`. */
  rows: PropTypes.number,

  /** Size defines the number of characters the field is intended to support. */
  size: PropTypes.number,

  /** Placeholder text, used only for examples. */
  placeholder: PropTypes.string,

  /** Used to mark this input as optional. Will output text in `theme.components.TextField.optionalMessage`, if set. */
  optional: PropTypes.bool,

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

TextField.displayName = 'TextField';

export const { defaultProps, propTypes } = TextField;

export default TextField;
