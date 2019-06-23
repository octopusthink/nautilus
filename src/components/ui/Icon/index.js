import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Feather from 'feather-icons';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import shortid from 'shortid';

// const LARGE = 48;
// const MEDIUM = 24;
// const SMALL = 16;

// const IconSizes = [SMALL, MEDIUM, LARGE];

export const Icon = (props) => {
  const {
    children,
    className,
    color,
    description,
    id,
    name,
    // size,
    title,
    ...otherProps
  } = props;

  const [generatedId] = useState(shortid.generate());
  const svgId = useMemo(() => {
    return id || generatedId;
  }, [generatedId, id]);
  const descriptionId = `${svgId}-description`;
  const titleId = `${svgId}-title`;

  const hasTitle = title && title.length;

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
    `${className} ${featherClassName}`.trim().length &&
    `${className} ${featherClassName}`;

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <span aria-hidden={!hasTitle || props['aria-hidden']}>
      <svg
        {...otherProps}
        {...otherFeatherAttrs}
        aria-labelledby={title && titleId}
        className={combinedClassName}
        id={svgId}
        role="img"
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeWidth={strokeWidth}
        css={css`
          stroke: {color};
          height: 48px;
          width: 48px;
        `}
      >
        {title && <title id={titleId}>{title}</title>}
        {color}
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

Icon.defaultProps = {
  'aria-hidden': undefined,
  children: undefined,
  className: undefined,
  description: undefined,
  id: undefined,
  color: undefined,
  title: undefined,
};

Icon.propTypes = {
  /** @ignore */
  'aria-hidden': PropTypes.bool,
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /** Apply colour to the icon. */
  color: PropTypes.string,
  /** A longer description of this icon, used by assistive technology. */
  description: PropTypes.string,
  /** @ignore */
  id: PropTypes.string,
  /** The name of the icon to use. */
  name: PropTypes.string.isRequired,
  /** Change the size of the icon. */
  // size: PropTypes.oneOf(IconSizes),
  /** A short description of this icon's content. Leave blank if the icon is entirely decorative. */
  title: PropTypes.string,
};

export const { defaultProps, propTypes } = Icon;

export default Icon;
