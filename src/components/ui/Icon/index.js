import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';
import SVG from 'react-inlinesvg';

const LARGE = 48;
const MEDIUM = 24;
const SMALL = 16;

const IconSizes = [LARGE, MEDIUM, SMALL];

export const Icon = (props) => {
  const { children, name, size, color, ...otherProps } = props;

  return (
    <SVG
      css={css`
        height: 128px;
        width: 128px;
      `}
      src={`icons/${name}.svg`}
      wrapper={React.createFactory('span')}
    >
      <img src={`icons/${name}.svg`} />
    </SVG>
  );
};

export const styles = ({ theme, ...otherProps }) => {
  return css`
    svg {
      height: 128px;
      width: 128px;
    }
  `;
};

Icon.defaultProps = {
  children: undefined,
  name: undefined,
  size: 'medium',
  color: undefined,
};

Icon.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** The name of the icon to use. */
  name: PropTypes.string,
  /** Change the size of the icon. */
  size: PropTypes.oneOf(IconSizes),
  /** Apply colour to the icon. */
  color: PropTypes.string,
};

export const { defaultProps, propTypes } = Icon;

export default styled(Icon)(styles);
