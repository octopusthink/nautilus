import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { Children, forwardRef, useCallback, useMemo, useState } from 'react';

import { interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import List from '../List';
import TextField from '../TextField';
import Option from './Option';
import Heading from './Heading';

export const ComboBox = forwardRef((props) => {
  const {
    children,
    disabled,
    error,
    hint,
    id,
    label,
    noAutocomplete,
    onBlur,
    onFocus,
    optional,
    placeholder,
    unstyled,
    ...otherProps
  } = props;

  const [focus, setFocus] = useState(otherProps.autofocus);

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

  // Create an array of all our options.
  const options = useMemo(() => {
    return Children.toArray(children).filter((child) => {
      return child;
    });
  }, [children]);

  // If the number of options is less than seven, calculate the height to fit.
  const dropdownNumItems = 7;
  let dropdownHeight = 320;
  if (options.length < dropdownNumItems) {
    dropdownHeight = 48 * options.length;
  }

  return (
    <React.Fragment>
      <TextField
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        label={label}
        hint={hint}
        optional={optional}
        unstyled={unstyled}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        signifierIcon={!noAutocomplete ? 'search' : undefined}
        actionIcon={!focus ? 'chevron-down' : 'chevron-up'}
        actionIconOnClick={!focus ? onFocusHandler : onBlurHandler}
        actionIconTitle={!focus ? 'Show options' : 'Hide options'}
      />
      <div
        css={css`
          position: relative;
          z-index: 5;
        `}
      >
        <List
          unstyled
          css={css`
            height: 0;
            transition: height 200ms;
            list-style-type: none;
            ${interfaceUI.medium(theme)};
            background: ${theme.colors.buttons.neutral};
            color: ${theme.colors.text.default};
            margin: -${toUnits(theme.spacing.margin.medium)} 0 0 0;
            overflow: hidden;
            padding: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;

            ${options.length >= dropdownNumItems &&
              css`
                overflow-y: scroll;
              `}

            ${focus &&
              css`
                border: 2px solid ${theme.colors.text.default};
                border-top: 0;
                height: ${toUnits(dropdownHeight)};
              `}
          `}
        >
          {options}
        </List>
      </div>
    </React.Fragment>
  );
});

ComboBox.defaultProps = {
  children: undefined,
  disabled: false,
  error: undefined,
  hint: undefined,
  id: undefined,
  labelId: undefined,
  noAutocomplete: false,
  onBlur: undefined,
  onFocus: undefined,
  optional: false,
  placeholder: undefined,
  unstyled: false,
};

ComboBox.propTypes = {
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
  /** HTML `id` attribute of the `input` element. Used for both the input's `id` attribute and the `<label>` `for` attribute. */
  id: PropTypes.string,
  /** Additional context to help users understand the purpose of the input. */
  hint: PropTypes.node,
  /** Visible text that serves to introduce the input. */
  label: PropTypes.node.isRequired,
  /** HTML `id` attribute for the `<label>` tag used to label the text input component. */
  labelId: PropTypes.string,
  /** Determines whether the component shows an autocomplete interface or not. When set to true, this component will behave more like a `select` element. */
  noAutocomplete: PropTypes.bool,
  /** Used to mark this input as optional. Will output text in `theme.components.ComboBox.optionalMessage`, if set. */
  optional: PropTypes.bool,
  /** Placeholder text, used only for examples. */
  placeholder: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

// Export child components.
ComboBox.Option = Option;
ComboBox.Heading = Heading;

export const { defaultProps, propTypes } = ComboBox;

export default ComboBox;
