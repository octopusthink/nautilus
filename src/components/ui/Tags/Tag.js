import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Icon } from 'components/ui/Icon';
import { getContrastingTextColor, metadata, toUnits } from 'styles';
import { useTheme } from 'themes';

export const Tag = (props) => {
  const [isDismissed, setDismissed] = useState(false);
  const theme = useTheme();
  const { badge, children, color, onDismiss, status, ...otherProps } = props;

  if (isDismissed) {
    return null;
  }

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

  return (
    <span
      css={css`
        ${metadata.small(theme)};
        color: ${textColor};
        margin: 0 ${toUnits(theme.spacing.padding.xSmall)} ${toUnits(theme.spacing.padding.xSmall)}
          0;

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
      `}
      {...otherProps}
    >
      {children}
      {onDismiss && (
        <button
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
          onClick={(event) => {
            event.preventDefault();

            setDismissed(true);

            onDismiss(event);
          }}
          type="button"
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
};

Tag.defaultProps = {
  children: undefined,
  color: null,
  badge: false,
  onDismiss: null,
  status: undefined,
};

Tag.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use colour to differentiate different tags or indicate status. */
  color: PropTypes.string,
  /** Style numbers or counts with a badge. */
  badge: PropTypes.bool,
  /** Function to call when a Tag is dismissed via the close button. */
  onDismiss: PropTypes.func,
  /** Indicate status using a semantic colour set. */
  status: PropTypes.oneOf(['neutral', 'success', 'warning', 'danger', 'inProgress', 'new']),
};

export const { defaultProps, propTypes } = Tag;

export default Tag;
