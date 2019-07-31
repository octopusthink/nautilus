import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Feather from 'feather-icons';
import PropTypes from 'prop-types';
import React, { forwardRef, useState, useMemo } from 'react';
import shortid from 'shortid';

import { toUnits } from 'styles';
import { useTheme } from 'themes';

const defineIconSizes = (props) => {
  const { background, border, small, xSmall, large, xLarge, theme } = props;

  let iconSize = 'medium';

  // Determine the size of the SVG.
  if (xSmall) {
    iconSize = 'xSmall';
  } else if (small) {
    iconSize = 'small';
  } else if (large) {
    iconSize = 'large';
  } else if (xLarge) {
    iconSize = 'xLarge';
  }

  const {
    size,
    strokeWidth,
    padding,
    borderWidth,
    marginSize,
  } = theme.components.Icon.sizes[iconSize];

  const wrapperSize = Math.ceil(size + padding * 2);

  const hasContainer = !!(border || background);

  return {
    borderWidth,
    hasContainer,
    marginSize,
    padding,
    size,
    strokeWidth,
    wrapperSize,
  };
};

export const Icon = forwardRef((props, ref) => {
  const {
    background,
    border,
    children,
    className,
    'data-testid': dataTestId,
    description,
    fillColor,
    id,
    name,
    title,
    xSmall,
    small,
    medium,
    large,
    xLarge,
    strokeColor,
    verticalAlign,
    ...otherProps
  } = props;

  const theme = useTheme();
  const [generatedId] = useState(shortid.generate());
  const svgId = useMemo(() => {
    return id || generatedId;
  }, [generatedId, id]);
  const descriptionId = `${svgId}-description`;
  const titleId = `${svgId}-title`;

  if (!name) {
    return null;
  }

  // Get special attributes from Feather for the SVG.
  const {
    class: featherClassName,
    'stroke-linecap': strokeLinecap,
    'stroke-linejoin': strokeLinejoin,
    // Unused, but defined so it's not in the `otherFeatherAttrs` object.
    'stroke-width': featherStrokeWidth,
    // Get the rest of the needed Feather attributes.
    ...otherFeatherAttrs
  } = Feather.icons[name].attrs;

  const { size, strokeWidth } = defineIconSizes({
    ...props,
    theme,
  });

  return (
    <span className={className} data-testid={dataTestId}>
      <svg
        {...otherFeatherAttrs}
        // These props are placed above the {...otherProps} spread so
        // user-supplied props can override our default values.
        role="img"
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeWidth={strokeWidth}
        {...otherProps}
        aria-hidden={title ? undefined : true}
        aria-labelledby={title && titleId}
        css={css`
          fill: ${fillColor};
          height: ${toUnits(size)};
          margin: auto;
          stroke: ${strokeColor};
          stroke-width: ${toUnits(strokeWidth)};
          width: ${toUnits(size)};

          ${!fillColor &&
            !strokeColor &&
            // If no explicit colour was specified, we drop the opacity to
            // simulate lowering the intensity of the icon's colour.
            css`
              stroke: currentColor;
              opacity: 0.8;
            `}
        `}
        id={svgId}
        ref={ref}
      >
        {title && <title id={titleId}>{title}</title>}
        {description && <desc id={descriptionId}>{description}</desc>}
        <g
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: Feather.icons[name].contents }}
        />
        {children}
      </svg>
    </span>
  );
});

export const styles = (props) => {
  const { border, background, verticalAlign } = props;
  const { borderWidth, marginSize, wrapperSize } = defineIconSizes(props);

  return css`
    ${(background || border) &&
      css`
        ${background &&
          css`
            background: ${background};
          `};
        ${border &&
          css`
            border: ${toUnits(borderWidth)} solid ${border};
          `};
        border-radius: 50%;
        height: ${toUnits(wrapperSize)};
        width: ${toUnits(wrapperSize)};
      `}
    display: inline-flex;
    margin: ${marginSize};
    vertical-align: ${verticalAlign};
  `;
};

Icon.defaultProps = {
  children: undefined,
  className: undefined,
  'data-testid': undefined,
  description: undefined,
  id: undefined,
  fillColor: undefined,
  strokeColor: undefined,
  title: undefined,
  xSmall: false,
  small: false,
  medium: true,
  large: false,
  xLarge: false,
  border: undefined,
  background: undefined,
  verticalAlign: 'middle',
};

Icon.propTypes = {
  /** Background colour. */
  background: PropTypes.string,
  /** Border colour. */
  border: PropTypes.string,
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  'data-testid': PropTypes.string,
  /** A longer description of this icon, used by assistive technology. */
  description: PropTypes.string,
  /** Extra-large icon size. */
  xLarge: PropTypes.bool,
  /** Extra-small icon size. */
  xSmall: PropTypes.bool,
  /** Apply colour to the icon fill. */
  fillColor: PropTypes.string,
  /** @ignore */
  id: PropTypes.string,
  /** Large icon size. */
  large: PropTypes.bool,
  /** Medium icon size. */
  medium: PropTypes.bool,
  /** The name of the icon to use. */
  name: PropTypes.string.isRequired,
  /** Vertical alignment. */
  verticalAlign: PropTypes.string,
  /** Small icon size. */
  small: PropTypes.bool,
  /** Apply colour to the icon stroke. */
  strokeColor: PropTypes.string,
  /** A short description of this icon's content. Leave blank if the icon is entirely decorative. */
  title: PropTypes.string,
};

Icon.displayName = 'Icon';

export const { defaultProps, propTypes } = Icon;

export default styled(Icon)(styles);
