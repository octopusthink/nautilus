import { css } from '@emotion/core';
import {
  Combobox as ReachCombobox,
  ComboboxInput as ReachComboboxInput,
  ComboboxPopover as ReachComboboxPopover,
  ComboboxList as ReachComboboxList,
} from '@reach/combobox';
import PropTypes from 'prop-types';
import React, {
  Children,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
  forwardRef,
} from 'react';

import { interfaceUI } from '../../../styles';
import { useTheme } from '../../../themes';
import List from '../List';
import TextField from '../TextField';
import Option from './Option';
import Heading from './Heading';

export const ComboBox = forwardRef((ref, props) => {
  const {
    autocomplete,
    children,
    disabled,
    error,
    hint,
    id,
    label,
    labelId,
    noMargin,
    onBlur,
    onFocus,
    openOnFocus,
    optional,
    placeholder,
    unstyled,
    value,
    ...otherProps
  } = props;

  const [focus, setFocus] = useState(otherProps.autofocus);
  const [popoverOpen, setPopoverOpen] = useState(otherProps.autofocus);
  const popoverRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (popoverRef.current) {
      setPopoverOpen(!popoverRef.current.hidden);
    }
  });

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

  return (
    <div
      css={css`
        :root {
          --reach-combobox: 1;
        }

        [data-reach-combobox-list] {
          margin: 0;
          padding: 0;
          user-select: none;
        }

        [data-reach-combobox-option] {
          margin: 0;
          padding: 0;
        }

        [data-suggested-value] {
          font-weight: bold;
        }
      `}
    >
      <ReachCombobox aria-label={label} openOnFocus={openOnFocus} {...otherProps}>
        <ReachComboboxInput
          as={TextField}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          label={label}
          labelId={labelId}
          hint={hint}
          noMargin={noMargin}
          optional={optional}
          unstyled={unstyled}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          ref={ref}
          signifierIcon={autocomplete ? 'search' : undefined}
          actionIcon={focus && popoverOpen ? 'chevron-up' : 'chevron-down'}
          actionIconOnClick={
            focus && popoverOpen
              ? () => {
                  if (popoverRef.current) {
                    popoverRef.current.hidden = true;
                  }
                }
              : undefined
          }
          actionIconTitle={popoverOpen ? 'Hide options' : 'Show options'}
          autocomplete={autocomplete}
          value={value}
        />
        <ReachComboboxPopover ref={popoverRef}>
          <ReachComboboxList
            as={List}
            // persistSelection={autocomplete}
            unstyled
            css={css`
              transition: height 200ms;
              list-style-type: none;
              ${interfaceUI.medium(theme)};
              background: ${theme.colors.buttons.neutral};
              color: ${theme.colors.text.default};
              margin: 0;
              overflow: hidden;
              padding: 0;
              overflow-y: scroll;
              max-height: 60vh;
              z-index: 100;
              border: 2px solid ${theme.colors.text.default};
            `}
          >
            {options}
          </ReachComboboxList>
        </ReachComboboxPopover>
      </ReachCombobox>
    </div>
  );
});

ComboBox.defaultProps = {
  autocomplete: true,
  children: undefined,
  disabled: false,
  error: undefined,
  hint: undefined,
  id: undefined,
  labelId: undefined,
  noMargin: false,
  openOnFocus: true,
  onBlur: undefined,
  onFocus: undefined,
  optional: false,
  placeholder: undefined,
  unstyled: false,
  value: undefined,
};

ComboBox.propTypes = {
  /** A component to place at the bottom of the option list,  */
  /** Determines whether the component shows an autocomplete interface or not. When set to true, this component will behave more like a `select` element. */
  autocomplete: PropTypes.bool,
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
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /** Open this combobox's list of options when it is focused. */
  openOnFocus: PropTypes.bool,
  /** Used to mark this input as optional. Will output text in `theme.components.ComboBox.optionalMessage`, if set. */
  optional: PropTypes.bool,
  /** Placeholder text, used only for examples. */
  placeholder: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
  /* If supplied, this will be the selected value of the ComboBox. */
  value: PropTypes.string,
};

// Export child components.
ComboBox.Option = Option;
ComboBox.Heading = Heading;

export const { defaultProps, propTypes } = ComboBox;

export default ComboBox;
