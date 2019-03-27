import styled from 'styled-components';

import fonts from '../src/base/typography/fonts';
import fontSizes from '../src/base/typography/fontSizes';
import colors from '../src/base/color/colors';

export const StyledSpecimenContainer = styled.div`
  border: 1px solid ${colors.gray30};
  padding: 25px;
`;

export const StyledSpecimen = styled.p`
  color: ${colors.black};
  ${p => fonts[p.fontStyle]};
  ${p => fontSizes[p.fontSize]};
  margin: 0;
`;

export const StyledSpecimenTitle = styled.p`
  color: ${colors.gray85};
  font-size: 1.2rem;
`;

export const StyledSpecimenCSS = styled.pre`
  border-top: 1px solid ${colors.gray30};
  color: ${colors.gray70};
  font-size: 1.2rem;
  margin: 0;
  padding-top: 15px;
  white-space: nowrap;
`;
