import React, { forwardRef, useMemo, useState } from 'react';
import { css } from '@emotion/core';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

export const Checkbox = forwardRef((props, ref) => {
  const { children, id, noMargin, ...otherProps } = props;
  const [generatedId] = useState(shortid.generate());
  const inputId = useMemo(() => {
    return id || generatedId;
  }, [generatedId, id]);
  const theme = useTheme();

  return (
    <div
      css={css`
        position: relative;

        /* Set external margins */
        ${!noMargin &&
          css`
            margin-bottom: ${toUnits(theme.spacing.margin.xxSmall)};
          `}
      `}
    >
      <input
        id={inputId}
        type="checkbox"
        ref={ref}
        css={css`
          position: absolute;
          z-index: 1;
          width: 44px;
          height: 44px;
          margin: 0;
          opacity: 0;

          &:checked + label {
            color: ${theme.colors.text.dark};
          }

          /* Hide the checkmark by default. */
          & + label::after {
            content: none;
          }

          /*Unhide the checkmark on the checked state*/
          &:checked + label::after {
            content: '';
          }

          &:focus + label {
            outline: 0.2rem solid ${theme.colors.accent.primaryLight};
            outline-offset: 0.4rem;
            padding-right: 0.8rem;
          }
        `}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
      <label
        htmlFor={inputId}
        css={css`
          ${interfaceUI.small(theme)};
          color: ${theme.colors.text.default};
          position: relative;
          padding-left: 3.2rem;

          &::before,
          &::after {
            position: absolute;
          }

          /*Outer-box*/
          &::before {
            border: 2px solid ${theme.colors.neutral.black};
            background: ${theme.colors.neutral.white};
            content: '';
            display: inline-block;
            height: 2rem;
            width: 2rem;
            top: -1px;
            left: 0;
          }

          /*Checkmark*/
          &::after {
            left: 4px;
            top: 5px;
            content: '';
            display: inline-block;
            height: 6px;
            width: 14px;
            border-left: 3px solid ${theme.colors.accent.secondary};
            border-bottom: 3px solid ${theme.colors.accent.secondary};
            transform: rotate(-50deg);
          }
        `}
      >
        {children}
      </label>
    </div>
  );
});

Checkbox.defaultProps = {
  children: undefined,
  disabled: false,
  error: undefined,
  hint: undefined,
  id: undefined,
  labelId: undefined,
  noMargin: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  unstyled: false,
};

Checkbox.propTypes = {
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
  /** `onChange` handler for the `TextField` component. */
  onChange: PropTypes.func,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Checkbox;

export default Checkbox;
