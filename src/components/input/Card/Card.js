import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import spacerSizes from '../../../base/spacing';
import { Heading } from '../../typography/Heading';
import { Paragraph } from '../../typography/Paragraph';

export const cardOrientations = {
  portrait: css`
   grid-template-rows: auto auto;
  `,
  landscape: css`
    grid-template-columns: 1fr 2fr;
    align-items: center;
  `,
};

export const StyledCard = styled.article`
  cursor: pointer;
  display: grid;
  margin: 0 0 ${spacerSizes.large};
  box-shadow: rgba(0,0,0,0.05) 0 2px 16px
  ${props => cardOrientations[props.orientation]};
`;

export const StyledCardMedia = styled.div`
  margin: 0;
  line-height: 0;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledCardContent = styled.div`
  padding: ${spacerSizes.small};  
`;

export const Card = ({ children, onClick, orientation, title, metadata, thumbnail, media }) => (
  <StyledCard
    onClick={onClick}
    orientation={orientation}
    title={title}
    metadata={metadata}
    thumbnail={thumbnail}
    media={media}
  >

    {media && (
      <StyledCardMedia>
        <StyledImage src={media} />
      </StyledCardMedia>
    ) }

    <StyledCardContent>
      <Heading level={0} size="xxsmall">{metadata}</Heading>
      <Heading level={2} size="large">{title}</Heading>
      {children && (
        <Paragraph noMargin size="small">{children}</Paragraph>
      ) }
    </StyledCardContent>
  </StyledCard>
);

export const CardOrientations = Object.keys(cardOrientations);

Card.propTypes = {
  /** Content to be rendered inside a Card */
  children: PropTypes.node,
  /** Function to run on click */
  onClick: PropTypes.func,
  /** Orientation. Options are "vertical" or "horizontal". */
  orientation: PropTypes.oneOf(CardOrientations),
  /** Title and metadata are strings. */
  title: PropTypes.string,
  metadata: PropTypes.string,
  /** Thumbnail and media are React components, passed in as images/video/SVG/etc.` */
  thumbnail: PropTypes.element,
  media: PropTypes.string,
};

Card.defaultProps = {
  onClick: () => {},
  orientation: '',
};

export default Card;
