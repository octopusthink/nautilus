import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Spacer } from '../src/components/layout/Spacer';
import spacerSizes from '../src/base/spacing';
import colors from '../src/base/color/colors';

const StyledTitle = styled.span`
  color: ${colors.black};
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 8px 8px 0 0;
`;

const StyledSubtitle = styled(StyledTitle)`
  font-size: 10px;
`;

export const SpacerList = () => {
  const renderSpacers = Object.entries(spacerSizes).map((spacerSize) => {
    const [size, value] = spacerSize;

    return (
      <span key={size}>
        <Spacer size={size} debug />
        <StyledTitle>{size}</StyledTitle>
        <StyledSubtitle>{value}</StyledSubtitle>
        <Spacer size="medium" />
      </span>
    );
  });

  return (
    <Fragment>
      { renderSpacers }
    </Fragment>
  );
};
