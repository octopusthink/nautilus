import styled, { css } from 'styled-components';

import { buttonColors } from '../../../base/color/colorVariables';
import fontSizes from '../../../base/typography/fontSizes';
import { interfaceTypography } from '../../../base/typography/typographyVariables';
import spacerSizes from '../../../base/spacing';

// nix in favour of better options!
export const buttonModes = {
  primary: css`
    background-color: ${buttonColors.buttonPrimaryBackground};
    border: 1px solid ${buttonColors.buttonPrimaryBorder};
    color: ${buttonColors.buttonPrimaryText};

    &:hover {
      background-color: ${buttonColors.buttonPrimaryBackgroundHover};
    }
  `,
  secondary: css`
    
  `,
  danger: css`
    background-color: ${buttonColors.buttonDangerBackground};
    border: 1px solid ${buttonColors.buttonDangerBorder};
    color: ${buttonColors.buttonDangerText};

    &:hover {
      background-color: ${buttonColors.buttonDangerBackgroundHover};
    }
  `,
  success: css`
    background-color: ${buttonColors.buttonSuccessBackground};
    border: 1px solid ${buttonColors.buttonSuccessBorder};
    color: ${buttonColors.buttonSuccessText};

    &:hover {
      background-color: ${buttonColors.buttonSuccessBackgroundHover};
    }
  `,
};

// maybe nix?
export const buttonSizes = {
  small: css`
    ${fontSizes.size0};
    padding: 8px 11px;
  `,
  medium: css`
    ${fontSizes.size1};
    padding: 10px 12px;
  `,
  large: css`
    ${fontSizes.size2};
    padding: 12px 15px;
  `,
};

// primary, default, minimal (maybe one more?)
export const buttonProminences = {
  primary: css`
    background-color: ${buttonColors.primaryBackground};
    border-color: ${buttonColors.primaryBorder};
    color: ${buttonColors.primaryText};

    &:hover {
      background-color: ${buttonColors.primaryBackgroundHover};
      border-color: ${buttonColors.primaryBorderHover};
      color: ${buttonColors.primaryTextHover};
    }
  `,
  default: css`
    background-color: ${buttonColors.defaultBackground};
    border-color: ${buttonColors.defaultBorder};
    color: ${buttonColors.defaultText};

    &:hover {
      background-color: ${buttonColors.defaultBackgroundHover};
      border-color: ${buttonColors.defaultBorderHover};
      color: ${buttonColors.defaultTextHover};
    }
  `,
  minimal: css`
    background-color: ${buttonColors.minimalBackground};
    border-color: ${buttonColors.minimalBorder};
    color: ${buttonColors.minimalText};

    &:hover {
      background-color: ${buttonColors.minimalBackgroundHover};
      border-color: ${buttonColors.minimalBorderHover};
      color: ${buttonColors.minimalTextHover};
    }
  `,
};

// success, warning, danger, none
export const buttonIntent = {
  success: css`
    background-color: ${buttonColors.successBackground};
    border-color: ${buttonColors.successBorder};
    color: ${buttonColors.successText};

    &:hover {
      background-color: ${buttonColors.successBackgroundHover};
      border-color: ${buttonColors.successBorderHover};
      color: ${buttonColors.successTextHover};
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
  ${props => buttonProminences[props.prominence]};
  ${props => buttonBehaviours[props.behaviour]};
  ${p => buttonSizes[p.size]};
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 ${spacerSizes.xsmall} ${spacerSizes.small};
  padding: ${spacerSizes.xsmall} ${spacerSizes.medium};
  ${interfaceTypography.button};
`;
