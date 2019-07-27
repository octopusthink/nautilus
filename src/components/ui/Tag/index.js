import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Icon } from 'components/ui/Icon';
import { getContrastingTextColor, metadata, toUnits } from 'styles';
import { useTheme } from 'themes';

export const Tag = forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    badge,
    children,
    color,
    label,
    onDismiss,
    status,
    ...otherProps
  } = props;

  return (
    <span ref={ref} {...otherProps}>
      {label && (
        <span // TODO: switch with VisuallyHidden component, once available.
          css={css`
            font-style: bold;
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          `}
        >
          {label}:
        </span>
      )}

      {children}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          css={css`
            box-shadow: 0;
            border: 0;
            background: none;
            color: currentColor;
            cursor: pointer;
            vertical-align: 0.2rem;
            margin: 0;
            padding: 0;

            &:hover {
              opacity: 0.75;
            }
          `}
        >
          <Icon
            name="x"
            small
            css={css`
              display: inline-block;
              margin-left: ${toUnits(theme.spacing.padding.small)};
              margin-top: ${toUnits(theme.spacing.padding.xxSmall)};
              opacity: 1;
              vertical-align: middle;
            `}
          />
        </button>
      )}
    </span>
  );
});

export const styles = (props) => {
  const { color, badge, status, theme } = props;
  let textColor = theme.colors.text.light;
  let backgroundColor;

  if (color) {
    backgroundColor = color;
  }

  if (status) {
    backgroundColor = theme.colors.intent[status];
  }

  if (status || color) {
    textColor = getContrastingTextColor({ color: backgroundColor, theme });
  }

  return css`
    ${metadata.small(theme)};
    color: ${textColor};
    margin: 0 ${toUnits(theme.spacing.padding.xSmall)}
      ${toUnits(theme.spacing.padding.xSmall)} 0;

    ${backgroundColor &&
      css`
        background: ${backgroundColor};
        padding: ${toUnits(theme.spacing.padding.xSmall)}
          ${toUnits(theme.spacing.padding.small)};
      `}

    ${badge &&
      css`
        border-radius: ${toUnits(theme.spacing.padding.xLarge)};
        min-width: ${toUnits(theme.spacing.padding.xLarge)};
        height: ${toUnits(theme.spacing.padding.xLarge)};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      `}
  `;
};

Tag.defaultProps = {
  children: undefined,
  color: null,
  label: null,
  badge: false,
  onDismiss: null,
  status: undefined,
};

Tag.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use colour to differentiate different tags or indicate status. */
  color: PropTypes.string,
  /** Optional label for providing additional context to screen reader users. */
  label: PropTypes.string,
  /** Style numbers or counts with a badge. */
  badge: PropTypes.bool,
  /** Function to call when a Tag is dismissed via the close button. */
  onDismiss: PropTypes.func,
  /** Indicate status using a semantic colour set. */
  status: PropTypes.oneOf([
    'neutral',
    'success',
    'warning',
    'danger',
    'inProgress',
    'new',
  ]),
};

export const { defaultProps, propTypes } = Tag;

Tag.displayName = 'Tag';

export default styled(Tag)(styles);
