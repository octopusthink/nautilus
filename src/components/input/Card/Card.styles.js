import styled, { css } from 'styled-components';

import fontSizes from '../../../base/typography/fontSizes';

export const cardOrientations = {
  horizontal: css`
   border-color: pink;
   flex-direction: column;
  `,
  vertical: css`
    border-color: blue;
    flex-direction: row;
  `,
};

export const StyledCard = styled.article`
  ${props => cardOrientations[props.orientation]};
  cursor: pointer;
  display: flex;
  margin: 0 0 0 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 2px;
`;

export const StyledCardMedia = styled.div`
  ${props => cardOrientations[props.orientation]};
  width: 100%;
  height: 50%;
  background: pink;
`;

export const StyledCardContent = styled.div`
  padding: 1.6rem;  
`;
