import styled from 'styled-components';

import typography from '../../../base/typography/typography';
import { semanticColors, typographicColors } from '../../../base/color/colorVariables';

export const paragraphSizes = {
  small: typography.finePrint,
  medium: typography.body,
  large: typography.bodyLarge,
};

export const paragraphColors = {
  light: typographicColors.typeLight,
  medium: typographicColors.typeMedium,
  dark: typographicColors.typeDark,
  accent: typographicColors.typeAccent,
  success: semanticColors.colorSuccess,
  danger: semanticColors.colorDanger,
};

export const StyledParagraph = styled.p`
  color: ${p => paragraphColors[p.color]};
  ${p => paragraphSizes[p.size]};
  ${p => p.noMargin && 'margin: 0'};
`;
