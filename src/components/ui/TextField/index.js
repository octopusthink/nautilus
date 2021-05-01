import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { cloneElement, forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import shortid from 'shortid';

import Icon from '../Icon';
import { focusStyle, interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

export const smallText = (props) => {
  const { theme } = props;

  return css`
    ${interfaceUI.small(theme)};
    color: ${theme.colors.text.light};
    margin: 0 0 ${toUnits(theme.spacing.padding.xSmall)};
  `;
};

export const InputComponentStyles = (props, theme) => {
  const { actionIcon, disabled, error, focus, noMargin, signifierIcon, size } = props;

  // Padding to use for signifier and action icons.
  const iconPadding = toUnits(
    theme.components.Icon.sizes.medium.size + theme.spacing.padding.small * 2,
  );

  return css`
    ${interfaceUI.medium(theme)};
    background: ${theme.colors.buttons.neutral};
    border-radius: 0;
    border: 2px solid ${theme.colors.text.default};
    box-sizing: border-box;
    color: ${theme.colors.text.default};
    display: block;
    margin: 0;
    outline: none;
    padding: ${toUnits(theme.spacing.padding.medium)};
    position: relative;
    transition: box-shadow 200ms;
    width: 100%;

    ${!noMargin &&
    !error &&
    css`
      margin: 0 0 ${toUnits(theme.spacing.margin.medium)};
    `}

    ${signifierIcon &&
    css`
      padding-left: ${iconPadding};
    `}

    ${actionIcon &&
    css`
      padding-right: ${iconPadding};
    `}

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

    ${focus &&
    css`
      color: ${theme.colors.text.dark};
      ${focusStyle.outline(theme)}
    `}

    &::placeholder {
      color: ${theme.colors.text.light};
    }
  `;
};

const TextField = forwardRef((props, ref) => {
  const {
    __actionIconId,
    __signifierIconId,
    actionIcon,
    actionIconOnClick,
    actionIconTitle,
    children,
    disabled,
    error,
    hint,
    id,
    label,
    labelId,
    multiline,
    noMargin,
    onBlur,
    onFocus,
    optional,
    placeholder,
    rows,
    signifierIcon,
    signifierIconTitle,
    size,
    type,
    unstyled,
    ...otherProps
  } = props;

  const [focus, setFocus] = useState(otherProps.autofocus);
  const [generatedId] = useState(shortid.generate());
  const inputRef = useRef();
  const inputId = useMemo(() => id || generatedId, [generatedId, id]);
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
      // TODO: Use error styling here, and move margins to TextField component,
      // maybe in a wrapper? Eventually we probably want some kind of
      // <Message> component with an error style.
      return (
        <div
          id={errorId}
          css={
            unstyled
              ? undefined
              : css`
                  ${interfaceUI.medium(theme)};
                  color: ${theme.colors.state.errorText};
                  margin: 0;

                  ${!noMargin &&
                  css`
                    margin-bottom: ${toUnits(theme.spacing.padding.large)};
                  `}
                `
          }
        >
          {error}
        </div>
      );
    }

    return cloneElement(error, { id: errorId });
  }, [error, errorId, noMargin, theme, unstyled]);

  // Handle focus of the label and text input when a signifier icon is used.
  // This allows clicking on the signifier icon to act exactly like clicking
  // on the label for this TextField, including the "mouseDown" state users
  // encounter when clicking down on the label (which applies focus styles to
  // only the label, and not the TextField).
  //
  // Essentially, this makes the `signifierIcon` prop feel like part of the
  // <label> tag.
  const onIconClickHandler = useCallback(() => {
    const refToUse = ref || inputRef;

    if (refToUse && refToUse.current) {
      refToUse.current.focus();
    }
  }, [inputRef, ref]);

  let InputComponent = 'input';
  if (multiline) {
    InputComponent = 'textarea';
  }

  return (
    <React.Fragment>
      {label && (
        <label
          css={
            unstyled
              ? undefined
              : css`
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
                `
          }
          htmlFor={inputId}
          id={labelId}
        >
          {label}
          {optional && theme.components.TextField.optionalMessage && (
            <span
              css={
                unstyled
                  ? undefined
                  : css`
                      ${smallText({ theme })};
                    `
              }
            >
              {theme.components.TextField.optionalMessage}
            </span>
          )}
          {hint && (
            <span
              css={
                unstyled
                  ? undefined
                  : css`
                      ${smallText({ theme })};

                      clear: both;
                      flex: 1 0 100%;
                      flex-grow: 1;
                    `
              }
            >
              {hint}
            </span>
          )}
        </label>
      )}
      <div
        css={css`
          position: relative;
        `}
      >
        <InputComponent
          aria-errormessage={errorId}
          css={unstyled ? undefined : InputComponentStyles(props, theme)}
          disabled={disabled}
          id={inputId}
          placeholder={placeholder}
          required={!optional && 'required'}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          ref={ref || inputRef}
          rows={multiline ? rows : undefined}
          maxLength={size}
          type={!multiline ? type : undefined}
          {...otherProps}
        />

        {signifierIcon && (
          <Icon
            data-testid={__signifierIconId}
            id={__signifierIconId}
            name={signifierIcon}
            onClick={onIconClickHandler}
            title={signifierIconTitle}
            css={
              unstyled
                ? undefined
                : css`
                    opacity: 0.8;
                    position: absolute;
                    left: ${toUnits(theme.spacing.padding.medium)};
                    top: 50%;
                    transform: translateY(-50%);
                  `
            }
          />
        )}

        {actionIcon && (
          <Icon
            data-testid={__actionIconId}
            id={__actionIconId}
            onClick={actionIconOnClick}
            name={actionIcon}
            title={actionIconTitle}
            css={css`
              ${unstyled
                ? undefined
                : css`
                    cursor: pointer;
                    opacity: 0.8;
                    position: absolute;
                    right: ${toUnits(theme.spacing.padding.small)};
                    top: 50%;
                    transform: translateY(-50%);
                  `}

              ${!actionIconOnClick &&
              css`
                pointer-events: none;
              `}
            `}
          />
        )}

        {errorComponent}
      </div>
      {children}
    </React.Fragment>
  );
});

TextField.defaultProps = {
  __actionIconId: undefined,
  __signifierIconId: undefined,
  actionIcon: undefined,
  actionIconOnClick: undefined,
  actionIconTitle: undefined,
  children: undefined,
  disabled: false,
  error: undefined,
  focus: undefined,
  hint: undefined,
  id: undefined,
  labelId: undefined,
  multiline: false,
  noMargin: false,
  onBlur: undefined,
  onFocus: undefined,
  optional: false,
  placeholder: undefined,
  rows: 4,
  signifierIcon: undefined,
  signifierIconTitle: undefined,
  size: undefined,
  type: 'text',
  unstyled: false,
};

TextField.propTypes = {
  /** @ignore ID prop for the action icon <Icon /> component; only used for testing. */
  __actionIconId: PropTypes.string,
  /** @ignore ID prop for the signifier icon <Icon /> component; only used for testing. */
  __signifierIconId: PropTypes.string,
  /** An action icon appears at the end of the input and indicates provides an additional control, like a drop-down or a geolocation. String refers to Icon `name` prop. */
  actionIcon: PropTypes.string,
  /* Event handler for the action icon */
  actionIconOnClick: PropTypes.func,
  /** Accessible title for the action icon. */
  actionIconTitle: PropTypes.string,
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
  /** Set to `true` to force focus styles. */
  focus: PropTypes.bool,
  /** HTML `id` attribute of the input component (either an `input` if `multiline` is `false` or `textarea` if `multiline` is `true`). Used for both the input component `id` attribute and the `<label>` `for` attribute. */
  id: PropTypes.string,
  /** Additional context to help users understand the purpose of the input. */
  hint: PropTypes.node,
  /** Visible text that serves to introduce the input. */
  label: PropTypes.node.isRequired,
  /** HTML `id` attribute for the `<label>` tag used to label the text input component. */
  labelId: PropTypes.string,
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /** Set to `true` for a multiline input (a `textarea` element). */
  multiline: PropTypes.bool,
  /** Number of rows to provide when using a `multiline` input. Ignored when `multiline` is `false`. */
  rows: PropTypes.number,
  /** A signifier icon appears at the start of the input and indicates what kind of data the field needs. String refers to Icon `name` prop. */
  signifierIcon: PropTypes.string,
  /** Accessible title for the signifier icon. */
  signifierIconTitle: PropTypes.string,
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
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

TextField.displayName = 'TextField';

export const { defaultProps, propTypes } = TextField;

export default TextField;
