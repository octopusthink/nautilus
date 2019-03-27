import React, { Fragment } from 'react';

import { Spacer } from '../src/components/layout/Spacer';
import {
  StyledSpecimen,
  StyledSpecimenTitle,
  StyledSpecimenContainer,
  StyledSpecimenCSS,
} from './StyleguideStyles';

import fontSizes from '../src/base/typography/fontSizes';

export const FontSizeSpecimen = () => {
  const renderSizeSpecimens = Object.keys(fontSizes).map(fontSize => (
    <Fragment key={fontSize}>
      <StyledSpecimenContainer>
        <StyledSpecimenTitle>{fontSize}</StyledSpecimenTitle>
        <StyledSpecimen
          fontStyle="primaryRegular"
          fontSize={fontSize}
        >
          The quick brown fox jumped over the lazy dog.
        </StyledSpecimen>
        <Spacer size="small" />
        <StyledSpecimenCSS>{fontSizes[fontSize]}</StyledSpecimenCSS>
      </StyledSpecimenContainer>
      <Spacer />
    </Fragment>
  ));

  return (
    <Fragment>
      {renderSizeSpecimens}
    </Fragment>
  );
};
