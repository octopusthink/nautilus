import styled from 'styled-components';

import { headingTypography, metadataTypography } from '../../../base/typography/typographyVariables';
import { semanticColors, typographicColors } from '../../../base/color/colorVariables';

export const headingSizes = {
  title: headingTypography.title,
  large: headingTypography.large,
  medium: headingTypography.medium,
  small: headingTypography.small,
  subheading: headingTypography.subheading,
  metadataLarge: metadataTypography.large,
  metadataSmall: metadataTypography.small,
};

export const headingColors = {
  light: typographicColors.typeLight,
  medium: typographicColors.typeMedium,
  dark: typographicColors.typeDark,
  accent: typographicColors.typeAccent,
  danger: semanticColors.colorDanger,
  success: semanticColors.colorSuccess,
};

const HeadingBase = styled.span`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  color: ${props => headingColors[props.color]};
  ${props => headingSizes[props.size]};
`;

export const headingElements = {
  h0: HeadingBase.withComponent('p'),
  h1: HeadingBase.withComponent('h1'),
  h2: HeadingBase.withComponent('h2'),
  h3: HeadingBase.withComponent('h3'),
  h4: HeadingBase.withComponent('h4'),
  h5: HeadingBase.withComponent('h5'),
  h6: HeadingBase.withComponent('h6'),
};
