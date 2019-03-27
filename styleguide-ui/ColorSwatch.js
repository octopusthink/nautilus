import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import colors from '../src/base/color/colors';

const StyledSwatch = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
`;

const StyledTitle = styled.span`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  color: ${colors.black};
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 3px;
`;

const StyledSubtitle = styled(StyledTitle)`
  font-family: monospace;
  font-size: 12px;
`;

export const ColorSwatch = ({ height, name, value }) => {
  const swatchStyles = {
    backgroundColor: value,
    height,
  };

  const rgbValue = Color(value).rgb().string();

  return (
    <StyledSwatch style={swatchStyles}>
      <StyledTitle>{name}</StyledTitle>
      <br />
      <StyledSubtitle>{value}</StyledSubtitle>
      <br />
      <StyledSubtitle>{rgbValue}</StyledSubtitle>
    </StyledSwatch>
  );
};

ColorSwatch.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

ColorSwatch.defaultProps = {
  height: '160px',
};
