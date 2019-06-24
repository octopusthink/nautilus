import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Feather from 'feather-icons';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import shortid from 'shortid';

import { useTheme } from 'themes';

export const Icon = (props) => {
  const {
    background,
    border,
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
    margin,
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
    //'stroke-width': strokeWidth,
    // Get the rest of the needed Feather attributes.
    ...otherFeatherAttrs
  } = Feather.icons[name].attrs;

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

  return (
    <span className={className}>
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
        id={svgId}
        css={css`
          height: ${size};
          margin: 0.8rem;
          stroke: ${color};
          stroke-width: ${strokeWidth};
          width: ${size};

          ${!color &&
            // If no explicit colour was specified, we drop the opacity to
            // simulate lowering the intensity of the icon's colour.
            css`
              stroke: currentColor;
              opacity: 0.8;
            `}
        `}
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
};

export const styles = (props) => {
  const { border, background, margin, verticalAlign } = props;
  let borderBackground;

  if (border || background) {
    borderBackground = css`
      border: 2px solid ${border};
      background: ${background};
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
    `;
  }
  return css`
    ${borderBackground};
    display: inline-block;
    margin: ${margin};
    vertical-align: ${verticalAlign};
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
  /** Vertical alignment. */
  verticalAlign: PropTypes.string,
  /** Small icon size. */
  small: PropTypes.bool,
  /** A short description of this icon's content. Leave blank if the icon is entirely decorative. */
  title: PropTypes.string,
};

export const { defaultProps, propTypes } = Icon;

export default styled(Icon)(styles);
