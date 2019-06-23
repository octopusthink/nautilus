import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Feather from 'feather-icons';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import shortid from 'shortid';

import { useTheme } from 'themes';

export const Icon = (props) => {
  const {
    children,
    className,
    color,
    description,
    id,
    name,
    title,
    extraSmall,
    small,
    medium,
    large,
    extraLarge,
    padding,
    margin,
    ...otherProps
  } = props;

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
    'stroke-width': strokeWidth,
    // Get the rest of the needed Feather attributes.
    ...otherFeatherAttrs
  } = Feather.icons[name].attrs;

  const combinedClassName =
    className || featherClassName
      ? `${className || ''} ${featherClassName || ''}`.trim()
      : undefined;

  return (
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
      className={combinedClassName}
      id={svgId}
    >
      {title && <title id={titleId}>{title}</title>}
      {description && <desc id={descriptionId}>{description}</desc>}
      <g
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: Feather.icons[name].contents }}
      />
      {children}
    </svg>
  );
};

export const styles = (props) => {
  const {
    color,
    theme,
    extraSmall,
    small,
    medium,
    large,
    extraLarge,
    padding,
    margin,
  } = props;

  let size = theme.components.Icon.sizes.m.size;
  let strokeWidth = theme.components.Icon.sizes.m.strokeWidth;

  if (extraSmall) {
    size = theme.components.Icon.sizes.xs.size;
    strokeWidth = theme.components.Icon.sizes.xs.strokeWidth;
  } else if (small) {
    size = theme.components.Icon.sizes.s.size;
    strokeWidth = theme.components.Icon.sizes.s.strokeWidth;
  } else if (large) {
    size = theme.components.Icon.sizes.l.size;
    strokeWidth = theme.components.Icon.sizes.l.strokeWidth;
  } else if (extraLarge) {
    size = theme.components.Icon.sizes.xl.size;
    strokeWidth = theme.components.Icon.sizes.xl.strokeWidth;
  }

  return css`
    height: ${size};
    margin: ${margin};
    padding: ${padding};
    stroke: ${color};
    stroke-width: ${strokeWidth};
    width: ${size};
    vertical-align: -15%;

    ${!color &&
      // If no explicit colour was specified, we drop the opacity to
      // simulate lowering the intensity of the icon's colour.
      css`
        stroke: currentColor;
        opacity: 0.8;
      `}
  `;
};

Icon.defaultProps = {
  children: undefined,
  className: undefined,
  description: undefined,
  id: undefined,
  color: undefined,
  title: undefined,
  extraSmall: false,
  small: false,
  medium: true,
  large: false,
  extraLarge: false,
  margin: '0 0.4rem 0 0', // @todo this default should probably just pull from the theme padding!
  padding: '0',
};

Icon.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /** Apply colour to the icon. */
  color: PropTypes.string,
  /** A longer description of this icon, used by assistive technology. */
  description: PropTypes.string,
  /** Extra-large icon size. */
  extraLarge: PropTypes.bool,
  /** Extra-small icon size. */
  extraSmall: PropTypes.bool,
  /** @ignore */
  id: PropTypes.string,
  /** Large icon size. */
  large: PropTypes.bool,
  /** Margins around icon, defined as per CSS format. */
  margin: PropTypes.string,
  /** Medium icon size. */
  medium: PropTypes.bool,
  /** The name of the icon to use. */
  name: PropTypes.string.isRequired,
  /** Padding inside icon, defined as per CSS format. */
  padding: PropTypes.string,
  /** Small icon size. */
  small: PropTypes.bool,
  /** A short description of this icon's content. Leave blank if the icon is entirely decorative. */
  title: PropTypes.string,
};

export const { defaultProps, propTypes } = Icon;

export default styled(Icon)(styles);
