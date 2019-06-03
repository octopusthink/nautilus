import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { Children, Fragment } from 'react';
import shortid from 'shortid';

import { Heading, Paragraph } from 'components';
import { bodyStyles } from 'styles';

import ListHeading from './Heading';
import ListItem from './Item';
import ListParagraph from './Paragraph';

export const List = ({
  children,
  large,
  small,
  inverse,
  dark,
  light,
  numbered,
  ...otherProps
}) => {
  let ListComponent = 'ul';
  if (numbered === true) {
    ListComponent = 'ol';
  }

  let descriptionComponent;
  let descriptionId;
  const description = Children.toArray(children)
    .filter((child) => {
      return child.type === ListHeading || child.type === ListParagraph;
    })
    // Return the first description component used.
    .reduce((acc, child) => {
      if (acc) {
        return acc;
      }

      return child;
    }, null);

  if (description) {
    descriptionId = description.props.id || shortid.generate();

    if (description.type === ListHeading) {
      descriptionComponent = (
        <Heading {...description.props} id={descriptionId} />
      );
    } else if (description.type === ListParagraph) {
      descriptionComponent = (
        <Paragraph {...description.props} id={descriptionId} />
      );
    }
  }

  const items = React.Children.toArray(children).filter((child) => {
    return child.type === ListItem;
  });

  const ariaProps = {
    'aria-labelledby': descriptionId,
  };

  return (
    <Fragment>
      {descriptionComponent}
      <ListComponent {...ariaProps} {...otherProps}>
        {items}
      </ListComponent>
    </Fragment>
  );
};

List.defaultProps = {
  children: undefined,
  large: false,
  small: false,
  inverse: false,
  dark: false,
  light: false,
  numbered: false,
};

List.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Increase the visual prominence of the list. */
  large: PropTypes.bool,
  /** Decrease the visual prominence of the list. */
  small: PropTypes.bool,
  /** Inverse text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Darken text colour. */
  dark: PropTypes.bool,
  /** Lighten text colour. */
  light: PropTypes.bool,
  /** Use numbers instead of bullets. */
  numbered: PropTypes.bool,
};

const StyledList = styled(List)(({ numbered, theme, ...otherProps }) => {
  return css`
    ${bodyStyles({ ...otherProps, theme })};
    padding: 0;
    ${numbered &&
      css`
        counter-reset: list-counter;

        > ${ListItem} {
          list-style: none;
          counter-increment: list-counter;

          &::before {
            content: counter(list-counter) '. ';
          }
        }
      `}
    ${!numbered &&
      css`
        > ${ListItem} {
          list-style: none;

          &::before {
            content: '\\2022';
            font-size: 0.6em;
            line-height: 2.8;
          }
        }
      `}
  `;
});

// Export ListHeading as `List.Heading`.
StyledList.Heading = ListHeading;
// Export ListItem as `List.Item`.
StyledList.Item = ListItem;
// Export ListParagraph as `List.Paragraph`.
StyledList.Paragraph = ListParagraph;

export default StyledList;
