import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { forwardRef, Fragment, useMemo, useState } from 'react';
import ReactSelect from 'react-select';
import shortid from 'shortid';
import { smallText } from '../TextField';
import { focusStyle, interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ClearIndicator from './ClearIndicator';
import GroupHeading from './GroupHeading';
import DropdownIndicator from './DropdownIndicator';
import IndicatorSeparator from './IndicatorSeparator';
import Menu from './Menu';
import MultiValueContainer from './MultiValueContainer';
import MultiValueLabel from './MultiValueLabel';
import MultiValueRemove from './MultiValueRemove';
import Option from './Option';
import Placeholder from './Placeholder';
import SelectContainer from './SelectContainer';

const Select = forwardRef((props, ref) => {
  const {
    components,
    disabled,
    hint,
    id,
    label,
    labelId,
    onBlur,
    onFocus,
    optional,
    styles,
    unstyled,
    ...otherProps
  } = props;

  const [focus, setFocus] = useState(otherProps.autofocus);
  const [generatedId] = useState(shortid.generate());
  const inputId = useMemo(() => id || generatedId, [generatedId, id]);
  const theme = useTheme();

  // Memoise our handlers as they don't need to be re-created on every render.
  const onBlurHandler = (...args) => {
    setFocus(false);
    if (onBlur) {
      onBlur(...args);
    }
  };
  const onFocusHandler = (...args) => {
    setFocus(true);
    if (onFocus) {
      onFocus(...args);
    }
  };

  return (
    <Fragment>
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
          {optional && theme.components.Select.optionalMessage && (
            <span
              css={
                unstyled
                  ? undefined
                  : css`
                      ${smallText({ theme })};
                    `
              }
            >
              {theme.components.Select.optionalMessage}
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

      <ReactSelect
        components={{
          ClearIndicator,
          DropdownIndicator,
          GroupHeading,
          IndicatorSeparator,
          Menu,
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
          Option,
          Placeholder,
          SelectContainer,
          ...components,
        }}
        disabled={disabled}
        inputId={inputId}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        openMenuOnFocus
        ref={ref}
        styles={{
          control: () => {
            return {
              display: 'flex',
            };
          },
          indicatorsContainer: () => {
            return {};
          },
          input: () => {
            return {};
          },
          multiValue: () => {
            return {};
          },
          multiValueLabel: () => {
            return {};
          },
          multiValueRemove: () => {
            return {};
          },
          valueContainer: (provided, state) => {
            const { hasValue } = state;

            return {
              ...provided,
              padding: 0,
              marginTop: hasValue ? '-0.2rem' : undefined,
              marginBottom: hasValue ? '-0.6rem' : undefined,
            };
          },
          ...styles,
        }}
        {...otherProps}
      />
    </Fragment>
  );
});

Select.defaultProps = {
  components: {},
  disabled: false,
  hint: undefined,
  id: undefined,
  isClearable: false,
  isMulti: false,
  labelId: undefined,
  onBlur: undefined,
  onFocus: undefined,
  optional: false,
  styles: {},
  unstyled: false,
};

Select.propTypes = {
  /** Components used to override default components. See `react-select` for more info. */
  components: PropTypes.objectOf(PropTypes.elementType),
  /** Disables this select entirely; this applies a disabled style and disables user input/interaction with this element. This is useful if you have elements that are conditionally allowed based on other states in your UI. */
  disabled: PropTypes.bool,
  /** Additional context to help users understand the purpose of the select. */
  hint: PropTypes.node,
  /** HTML `id` attribute of the `select` element. Used for both the select's `id` attribute and the `<label>` `for` attribute. */
  id: PropTypes.string,
  /** Visible text that serves to introduce the select. */
  label: PropTypes.node.isRequired,
  /** HTML `id` attribute for the `<label>` tag used to label the select component. */
  labelId: PropTypes.string,
  /** @ignore */
  onBlur: PropTypes.func,
  /** @ignore */
  onFocus: PropTypes.func,
  /** Allow the selection to be entirely clear. Renders a "clear all" button in the UI. */
  isClearable: PropTypes.bool,
  /** Allow multiple items to be selected. This alters the UI/UX of the Select component, causing it to behave more like a "tag select". */
  isMulti: PropTypes.bool,
  /** Used to mark this select as optional. Will output text in `theme.components.Select.optionalMessage`, if set. */
  optional: PropTypes.bool,
  /** Extra styles to apply to a particular component. See `react-select` for more info. */
  styles: PropTypes.objectOf(PropTypes.object),
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

Select.displayName = 'Select';

export const { defaultProps, propTypes } = Select;

export default Select;
