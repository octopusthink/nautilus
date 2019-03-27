import React, { Fragment } from 'react';

import {
  StyledSpecimen,
  StyledSpecimenTitle,
  StyledSpecimenContainer,
  StyledSpecimenCSS,
} from './StyleguideStyles';
import { Spacer } from '../src/components/layout/Spacer';

import fonts from '../src/base/typography/fonts';

export const FontStyleSpecimen = () => {
  const renderFontSpecimens = Object.keys(fonts).map(fontStyle => (
    <Fragment key={fontStyle}>
      <StyledSpecimenContainer>
        <StyledSpecimenTitle>{fontStyle}</StyledSpecimenTitle>
        <StyledSpecimen
          contentEditable
          suppressContentEditableWarning
          fontStyle={fontStyle}
          fontSize="size2"
        >
          The quick brown fox jumped over the lazy dog.
        </StyledSpecimen>
        <Spacer size="small" />
        <StyledSpecimenCSS>{fonts[fontStyle]}</StyledSpecimenCSS>
      </StyledSpecimenContainer>
      <Spacer />
    </Fragment>
  ));


  return (
    <Fragment>
      {renderFontSpecimens}
    </Fragment>
  );
};
