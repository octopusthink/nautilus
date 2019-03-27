import styled, { css } from 'styled-components';

import { buttonColors } from '../../../base/color/colorVariables';
import fontSizes from '../../../base/typography/fontSizes';

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
    background-color: ${buttonColors.buttonSecondaryBackground};
    border: 1px solid ${buttonColors.buttonSecondaryBorder};
    color: ${buttonColors.buttonSecondaryText};

    &:hover {
      background-color: ${buttonColors.buttonSecondaryBackgroundHover};
    }
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

export const StyledButton = styled.button`
  ${p => buttonModes[p.mode]};
  ${p => buttonSizes[p.size]};
  border-radius: 3px;
  cursor: pointer;
`;
