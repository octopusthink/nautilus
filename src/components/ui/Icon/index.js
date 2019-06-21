import { css } from '@emotion/core';
import styled from '@emotion/styled';
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';
import SVG from 'react-inlinesvg';

export const Icon = (props) => {
  const { children, name, ...otherProps } = props;

  return (
    <SVG src={`icons/${name}.svg`} wrapper={React.createFactory('span')}>
      <img src={`icons/${name}.svg`} />
    </SVG>
  );
};

export const styles = ({ theme, ...otherProps }) => {
  return css``;
};

Icon.defaultProps = {
  children: undefined,
  name: undefined,
};

Icon.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** The name of the icon to use. */
  name: PropTypes.string,
};

export const { defaultProps, propTypes } = Icon;

export default styled(Icon)(styles);
