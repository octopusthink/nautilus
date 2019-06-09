import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { Children, Fragment } from 'react';
import shortid from 'shortid';

import Heading from 'components/ui/Heading';
import Paragraph from 'components/ui/Paragraph';
import { bodyStyles } from 'styles';

import ListItem from './Item';

export const ALLOWED_DESCRIPTION_COMPONENTS = [Heading, Paragraph];

export const List = ({
  children,
  dark,
  inverse,
  large,
  light,
  ordered,
  small,
  ...otherProps
}) => {
  let ListComponent = 'ul';
  if (ordered === true) {
    ListComponent = 'ol';
  }

  let descriptionComponent;
  let descriptionId;
  const description = Children.toArray(children)
    .filter((child) => {
      return ALLOWED_DESCRIPTION_COMPONENTS.includes(child.type);
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

    const DescriptionComponent = description.type;
    descriptionComponent = (
      <DescriptionComponent {...description.props} id={descriptionId} />
    );
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

export const styles = ({
  dark,
  inverse,
  large,
  light,
  ordered,
  small,
  theme,
}) => {
  return css`
    ${bodyStyles({ dark, inverse, large, light, small, theme })};
    padding: 0;
    ${ordered &&
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
    ${!ordered &&
      css`
        > ${ListItem} {
          list-style: none;

          &::before {
            content: '\\2022';
            font-size: 0.6em;
            line-height: 2.8;
          }
        }
      }
    `}
  `;
};

List.defaultProps = {
  children: undefined,
  large: false,
  small: false,
  inverse: false,
  dark: false,
  light: false,
  ordered: false,
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
  ordered: PropTypes.bool,
};

const StyledList = styled(List)(styles);

// Export ListItem as `List.Item`.
StyledList.Item = ListItem;

export default StyledList;
