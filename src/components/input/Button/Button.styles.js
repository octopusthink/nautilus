import styled, { css } from 'styled-components';

import { buttonColors } from '../../../base/color/colorVariables';
import { interfaceTypography } from '../../../base/typography/typographyVariables';
import spacerSizes from '../../../base/spacing';


// We're going to try to colour the buttons based on state or intent
export const setButtonColour = (intent) => {
  console.log(intent);
  //const currentButtonColour = buttonColors[intent];
  console.log(currentButtonColour);
  return currentButtonColour;
};

export const buttonProminences = (intent) => {
  primary: css`
    background-color: ${setButtonColour(intent)};
    border: none;
    border-radius: 10px;
    color: ${buttonColors.primaryText};

    &:hover {
      background-color: ${buttonColors.hover};
    }
  `,
  default: css`
    background: none;
    border: 2px solid ${buttonColors.default};
    border-radius: 10px;
    color: ${buttonColors.default};

    &:hover {
      border-color: ${buttonColors.hover};
      color: ${buttonColors.hover};
    }
  `,
  minimal: css`
    background: none;
    border: none;
    border-radius: 10px;
    color: ${buttonColors.default};

    &:hover {
      color: ${buttonColors.hover};
    }
  `,
};

// success, warning, danger, none
export const buttonIntents = {
  success: css`
    
    }, 
  `,
};


// active, hover, focus, disabled
export const buttonState = {
  active: css`
  `,
};

// navigaation or action
export const buttonBehaviours = {
  navigation: css`
    &::after {
      content: ' →';
      display: inline;
    }
  `,
  action: css`
  `,
};

// Border-radius should be brandable!
export const StyledButton = styled.button`
  cursor: pointer;
  margin: 0 ${spacerSizes.xsmall} ${spacerSizes.small};
  padding: ${spacerSizes.xsmall} ${spacerSizes.medium};
  ${interfaceTypography.button};
  ${(props, intent) => buttonProminences[props.prominence]};
  ${props => buttonBehaviours[props.behaviour]};
`;
