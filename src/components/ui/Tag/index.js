import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Icon } from 'components/ui/Icon';
import { getContrastingTextColor, metadata, toUnits } from 'styles';
import { useTheme } from 'themes';

export const Tag = forwardRef((props, ref) => {
  const theme = useTheme();
  const { children, dismissable, label, onDismiss, ...otherProps } = props;

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
      {dismissable && (
        <button type="button" onClick={onDismiss}>
          <Icon
            name="x"
            small
            css={css`
              display: inline-block;
              margin-left: ${toUnits(theme.spacing.padding.small)};
              margin-top: ${toUnits(theme.spacing.padding.xxSmall)};
            `}
          />
        </button>
      )}
    </span>
  );
});

export const styles = (props) => {
  const { color, numerical, theme } = props;
  let textColor = theme.colors.text.light;

  if (color) {
    textColor = getContrastingTextColor({ color, theme });
  }

  return css`
    ${metadata.small(theme)};
    color: ${textColor};
    margin: 0 ${toUnits(theme.spacing.padding.xSmall)}
      ${toUnits(theme.spacing.padding.xSmall)} 0;

    ${color &&
      css`
        background: ${color};
        padding: ${toUnits(theme.spacing.padding.xSmall)}
          ${toUnits(theme.spacing.padding.small)};
      `}

    ${numerical &&
      css`
        border-radius: 50%;
        width: 3.6rem;
        height: 3.6rem;
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
  dismissable: false,
  label: null,
  numerical: false,
  onDismiss: null,
};

Tag.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use colour to differentiate different tags or indicate status. */
  color: PropTypes.string,
  /** Allow for removing the tag. */
  dismissable: PropTypes.bool,
  /** Optional label for providing additional context to screen reader users. */
  label: PropTypes.string,
  /** Style numbers in a more badge-y kind of way. */
  numerical: PropTypes.bool,
  /** Function to call when a Tag is dismissed via the close button. */
  onDismiss: PropTypes.func,
};

export const { defaultProps, propTypes } = Tag;

Tag.displayName = 'Tag';

export default styled(Tag)(styles);
