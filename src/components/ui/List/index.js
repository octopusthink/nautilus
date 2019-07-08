import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import shortid from 'shortid';

import Heading from 'components/ui/Heading';
import Paragraph from 'components/ui/Paragraph';
import { bodyStyles } from 'styles';
import { CustomPropTypes } from 'utils';

import Item from './Item';

export const ALLOWED_DESCRIPTION_COMPONENTS = [Heading, Paragraph];

export const List = forwardRef((props, ref) => {
  const {
    children,
    dark,
    inverse,
    large,
    light,
    ordered,
    small,
    ...otherProps
  } = props;

  let ListComponent = 'ul';
  if (ordered === true) {
    ListComponent = 'ol';
  }

  const [generatedId] = useState(shortid.generate());
  const description = useMemo(() => {
    const descriptionComponent = Children.toArray(children)
      .filter((child) => {
        return ALLOWED_DESCRIPTION_COMPONENTS.includes(child.type);
      })
      // Return the first description component used.
      .reduce((acc, child) => {
        if (acc) {
          return acc;
        }

        return child;
      }, undefined);

    if (!descriptionComponent) {
      return undefined;
    }

    return cloneElement(descriptionComponent, {
      id: descriptionComponent.props.id || generatedId,
    });
  }, [children, generatedId]);

  const items = useMemo(() => {
    return Children.toArray(children).filter((child) => {
      return child.type === Item;
    });
  }, [children]);

  return (
    <Fragment>
      {description}
      <ListComponent
        aria-labelledby={description && description.props.id}
        ref={ref}
        {...otherProps}
      >
        {items}
      </ListComponent>
    </Fragment>
  );
});

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

        > ${Item} {
          list-style: none;
          counter-increment: list-counter;

          &::before {
            content: counter(list-counter) '. ';
          }
        }
      `}
    ${!ordered &&
      css`
        > ${Item} {
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
  /** @ignore The list items for this list (using the `List.Item` component), as well as the optional list description `Heading` or `Paragraph` component. */
  children: CustomPropTypes.allowedChildren(
    ...ALLOWED_DESCRIPTION_COMPONENTS,
    Item,
  ),
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

List.displayName = 'List';

const StyledList = styled(List)(styles);

// Export Item as `List.Item`.
StyledList.Item = Item;

export default StyledList;
