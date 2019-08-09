import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  Children,
  Fragment,
  cloneElement,
  useMemo,
  useState,
} from 'react';
import shortid from 'shortid';

import Heading from 'components/ui/Heading';
import Paragraph from 'components/ui/Paragraph';
import { bodyStyles } from 'styles';
import { useTheme } from 'themes';

import Item, { ComponentClassName as ItemClassName } from './Item';

export const ComponentClassName = 'Nautilus-List';

export const List = (props) => {
  const {
    children,
    className,
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
    const validDescriptionComponents = Children.toArray(children).filter(
      (child) => {
        return child.type === Heading || child.type === Paragraph;
      },
    );

    if (validDescriptionComponents.length === 0) {
      return undefined;
    }

    const descriptionComponent = validDescriptionComponents[0];

    if (!descriptionComponent.props.id) {
      return cloneElement(descriptionComponent, { id: generatedId });
    }

    return descriptionComponent;
  }, [children, generatedId]);

  const items = useMemo(() => {
    return Children.toArray(children).filter((child) => {
      return child.type === Item;
    });
  }, [children]);

  const theme = useTheme();

  return (
    <Fragment>
      {description}
      <ListComponent
        aria-labelledby={description && description.props.id}
        css={css`
          ${bodyStyles({ dark, inverse, large, light, small, theme })};
          padding: 0;
          ${ordered &&
            css`
              counter-reset: list-counter;

              > .${ItemClassName} {
                list-style: none;
                counter-increment: list-counter;

                &::before {
                  content: counter(list-counter) '. ';
                }
              }
            `}
          ${!ordered &&
            css`
              > .${ItemClassName} {
                list-style: none;

                &::before {
                  content: '\\2022';
                  font-size: 0.6em;
                  line-height: 2.8;
                }
              }
            }
          `}
        `}
        className={classnames(ComponentClassName, className)}
        {...otherProps}
      >
        {items}
      </ListComponent>
    </Fragment>
  );
};

List.defaultProps = {
  children: undefined,
  className: undefined,
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
  /** @ignore */
  className: PropTypes.string,
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

// Export Item as `List.Item`.
List.Item = Item;

export default List;
