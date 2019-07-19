import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import chroma from 'chroma-js';

import { Icon } from 'components/ui/Icon';
import { metadata, toUnits } from 'styles';
import { useTheme } from 'themes';

export const Tag = forwardRef((props, ref) => {
  const theme = useTheme();
  const { children, dismissable, ...otherProps } = props;

  return (
    <span ref={ref} {...otherProps}>
      {children}
      {dismissable && (
        <a href="#">
          <Icon
            name="x"
            small
            css={css`
              display: inline-block;
              margin-left: ${toUnits(theme.spacing.padding.small)};
              margin-top: ${toUnits(theme.spacing.padding.xxSmall)};
            `}
          />
        </a>
      )}
    </span>
  );
});

export const styles = (props) => {
  const { color, theme } = props;
  let textColor = theme.colors.text.light;

  if (color) {
    // Calculate colour contrast to ensure tags are readable.
    const white = theme.colors.text.inverseLight;
    const black = theme.colors.text.dark;
    const contrastAgainstWhite = chroma.contrast(color, white);
    const contrastAgainstBlack = chroma.contrast(color, black);
    if (contrastAgainstWhite > 4.5) {
      textColor = white;
    } else if (contrastAgainstBlack > 4.5) {
      textColor = black;
    } else {
      textColor = theme.colors.text.default;
      console.error(
        "That colour isn't going to work for all users. Choose a darker (or lighter) shade instead.", // TODO: Output a more helpful error message and/or lighten the colour so it passes colour contrast.
      );
    }
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
  `;
};

Tag.defaultProps = {
  children: undefined,
  color: null,
  dismissable: false,
};

Tag.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Use colour to differentiate different tags or indicate status. */
  color: PropTypes.string,
  /** Allow for removing the tag. */
  dismissable: PropTypes.bool,
};

export const { defaultProps, propTypes } = Tag;

Tag.displayName = 'Tag';

export default styled(Tag)(styles);
