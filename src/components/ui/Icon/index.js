import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Feather from 'feather-icons';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import shortid from 'shortid';

export const Icon = (props) => {
  const {
    children,
    className,
    color,
    description,
    id,
    name,
    title,
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
  const { color } = props;

  return css`
    height: 24px;
    stroke: ${color};
    width: 24px;

    ${!color &&
      // If no explicit colour was specified, we drop the opacity to
      // simulate lowering the intensity of the icon's colour.
      css`
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
  /** @ignore */
  id: PropTypes.string,
  /** The name of the icon to use. */
  name: PropTypes.string.isRequired,
  /** A short description of this icon's content. Leave blank if the icon is entirely decorative. */
  title: PropTypes.string,
};

export const { defaultProps, propTypes } = Icon;

export default styled(Icon)(styles);
