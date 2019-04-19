/* eslint-disable no-confusing-arrow */
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import colors from '../src/base/color/colors';
//import colorVariables from '../src/base/color/colorVariables';

import fonts from '../src/base/typography/fonts';
import fontSizes from '../src/base/typography/fontSizes';
import typographyVariables from '../src/base/typography/typographyVariables';


const StyledTable = styled.table`
  border-bottom: 1px solid ${colors.gray30};
  border-collapse: collapse;
  color: ${colors.black};
  font-family: monospace;
  font-size: 13px;
  width: 100%;

  &:not(last-child) {
    margin-bottom: 40px;
  }
`;

const StyledRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${colors.gray15};
  }
`;

const StyledCell = styled.td`
  border-top: 1px solid ${colors.gray30};
  padding: 10px;

  &:nth-of-type(even) {
    letter-spacing: 1px;
  }
`;

const StyledHeading = styled.h2`
  font-weight: 400;
  font-size: 2.1rem;
  margin-bottom: 10px;
`;

const StyledCellColor = styled(StyledCell)`
  background-color: ${p => p.color};
  color: ${p => p.color === colors.black ? colors.white : colors.black};
`;

const StyledCellColorSpan = styled.span`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  display: inline-block;
  padding: 3px;
`;

const getMatchingVariableName = (colorValue, baseVariables) => {
  const matchingValue = Object.entries(baseVariables).find(([, value]) => (
    value === colorValue
  ));

  return matchingValue ? matchingValue[0] : null; // this is the name of the variable
};

export const VariableTable = ({ baseVariables, brandVariables }) => {
  const renderVariableTables = Object.entries(brandVariables).map((category) => {
    const [title, values] = category;

    const renderCategoryValues = Object.entries(values).map((value) => {
      const [name, colorValue] = value;

      return (
        <StyledRow key={name}>
          <StyledCell>
            {name}
          </StyledCell>
          <StyledCellColor color={colorValue} width="30%">
            <StyledCellColorSpan>
              {getMatchingVariableName(colorValue, baseVariables)}
            </StyledCellColorSpan>
          </StyledCellColor>
        </StyledRow>
      );
    });

    return (
      <Fragment key={title}>
        <StyledHeading>{title}</StyledHeading>
        <StyledTable>
          <tbody>
            {renderCategoryValues}
          </tbody>
        </StyledTable>
      </Fragment>
    );
  });

  return (
    <Fragment>
      {renderVariableTables}
    </Fragment>
  );
};

// VariableTable.propTypes = {
//   /** Type of variable table to output */
//   variable: PropTypes.string,

//   brandVariables: PropTypes.Object,
// };

export default VariableTable;
