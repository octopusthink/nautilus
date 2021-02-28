import { css } from '@emotion/react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Children, cloneElement, useMemo, useState } from 'react';
import shortid from 'shortid';

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { bodyStyles } from '../../../styles';
import { useTheme } from '../../../themes';
import { ListClassName, ListItemClassName } from './constants';
import Item from './Item';

const List = (props) => {
  const {
    children,
    className,
    dark,
    inverse,
    large,
    light,
    noMargin,
    ordered,
    small,
    unstyled,
    ...otherProps
  } = props;

  let ListComponent = 'ul';
  if (ordered === true) {
    ListComponent = 'ol';
  }

  const [generatedId] = useState(shortid.generate());
  const description = useMemo(() => {
    const validDescriptionComponents = Children.toArray(children).filter((child) => {
      return child.type === Heading || child.type === Paragraph;
    });

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
      return child.type !== Heading && child.type !== Paragraph;
    });
  }, [children]);

  const theme = useTheme();

  return (
    <React.Fragment>
      {description}
      <ListComponent
        aria-labelledby={description && description.props.id}
        css={
          unstyled
            ? undefined
            : css`
                ${bodyStyles({ dark, inverse, large, light, noMargin, small, theme })};
                padding: 0;
                ${ordered &&
                  css`
                    counter-reset: list-counter;

                    > .${ListItemClassName} {
                      list-style: none;
                      counter-increment: list-counter;

                      &::before {
                        content: counter(list-counter) '. ';
                      }
                    }
                  `}
                ${!ordered &&
                  css`
                    > .${ListItemClassName} {
                      list-style: none;

                      &::before {
                        content: '\\2022';
                        font-size: 0.6em;
                        line-height: 2.8;
                      }
                    }
                  `}
              `
        }
        className={classnames(ListClassName, className)}
        {...otherProps}
      >
        {items}
      </ListComponent>
    </React.Fragment>
  );
};

List.defaultProps = {
  children: undefined,
  className: undefined,
  dark: false,
  inverse: false,
  large: false,
  light: false,
  noMargin: false,
  ordered: false,
  small: false,
  unstyled: false,
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
  /** Remove any outer margins from component. */
  noMargin: PropTypes.bool,
  /** Use numbers instead of bullets. */
  ordered: PropTypes.bool,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

// Export Item as `List.Item`.
List.Item = Item;

export default List;
