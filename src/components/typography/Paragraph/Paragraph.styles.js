import styled from 'styled-components';

import { bodyTypography } from '../../../base/typography/typographyVariables';
import { semanticColors, typographicColors } from '../../../base/color/colorVariables';

export const paragraphSizes = {
  small: bodyTypography.small,
  medium: bodyTypography.medium,
  large: bodyTypography.large,
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
  color: ${props => paragraphColors[props.color]};
  ${props => paragraphSizes[props.size]};
  margin: ${props => props.margin};
`;
