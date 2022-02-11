import React, { forwardRef, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { focusStyle, interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

export const Checkbox = forwardRef((props, ref) => {
  const { children, disabled, labelId, id, noMargin, unstyled, ...otherProps } = props;
  const [generatedId] = useState(shortid.generate());
  const inputId = useMemo(() => {
    return id || generatedId;
  }, [generatedId, id]);
  const theme = useTheme();

  return (
    <div
      css={
        unstyled
          ? undefined
          : css`
              position: relative;

              /* Set external margins */
              ${!noMargin &&
              css`
                margin-bottom: ${toUnits(theme.spacing.margin.xxSmall)};
              `}
            `
      }
    >
      <input
        id={inputId}
        type="checkbox"
        ref={ref}
        disabled={disabled}
        css={
          unstyled
            ? undefined
            : css`
                margin: 0;
                opacity: 0;
                position: absolute;
                z-index: 1;

                &:checked + label {
                  color: ${theme.colors.text.dark};

                  ${disabled &&
                  css`
                    color: ${theme.colors.state.disabled};
                  `}
                }

                /* Hide the checkmark by default. */
                & + label::after {
                  content: '';
                  opacity: 0;
                  transform: rotate(-35deg);
                }

                /* Unhide the checkmark on the checked state. */
                &:checked + label::after {
                  opacity: 1;
                  transform: rotate(-50deg);
                }

                &:focus + label {
                  ${focusStyle.outline(theme)};
                  padding-right: ${toUnits(theme.spacing.margin.xxSmall)};
                  padding-bottom: 0.2rem;
                }
              `
        }
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
      <label
        htmlFor={inputId}
        id={labelId}
        css={
          unstyled
            ? undefined
            : css`
                ${interfaceUI.small(theme)};
                color: ${theme.colors.text.default};
                position: relative;
                padding-left: 3.2rem;
                transition: all 0.1s linear;

                &::before,
                &::after {
                  position: absolute;
                }

                /* Outer-box */
                &::before {
                  border: 2px solid ${theme.colors.neutral.black};
                  background: ${theme.colors.neutral.white};
                  content: '';
                  display: inline-block;
                  height: 2rem;
                  width: 2rem;
                  top: -2px;
                  left: 0;
                }

                /* Checkmark */
                &::after {
                  left: 4px;
                  top: 4px;
                  content: '';
                  display: inline-block;
                  height: 6px;
                  width: 14px;
                  border-left: 3px solid ${theme.colors.accent.secondary};
                  border-bottom: 3px solid ${theme.colors.accent.secondary};
                  transition: opacity 0.1s linear, transform 0.15s ease-in-out;
                }

                ${disabled &&
                css`
                  color: ${theme.colors.state.disabled};

                  /* Outer-box */
                  &::before {
                    border-color: ${theme.colors.state.disabled};
                  }

                  &::after {
                    border-color: ${theme.colors.state.disabledLight};
                  }
                `}
              `
        }
      >
        {children}
      </label>
    </div>
  );
});

Checkbox.defaultProps = {
  children: undefined,
  disabled: false,
  id: undefined,
  labelId: undefined,
  noMargin: false,
  unstyled: false,
};

Checkbox.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Disables this input; this applies a disabled style and disables user input/interaction with this element. This is useful if you have inputs that are conditionally allowed based on other states in your UI. */
  disabled: PropTypes.bool,
  /** HTML `id` attribute of the `input` element. Used for both the input's `id` attribute and the `<label>` `for` attribute. */
  id: PropTypes.string,
  /** HTML `id` attribute for the `<label>` tag used to label the text input component. */
  labelId: PropTypes.string,
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Checkbox;

export default Checkbox;
