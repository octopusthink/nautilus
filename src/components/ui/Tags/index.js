import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { Children, Fragment, useMemo, useState } from 'react';
import shortid from 'shortid';

import List from 'components/ui/List';
import Paragraph from 'components/ui/Paragraph';

import Tag from './Tag';

export const ALLOWED_CHILDREN_COMPONENTS = [Tag];

export const Tags = (props) => {
  const { children, title, ...otherProps } = props;

  const [generatedId] = useState(shortid.generate());
  const WrapperComponent = title ? List : Fragment;

  const items = useMemo(() => {
    const tagElements = Children.toArray(children)
      .filter((child) => {
        return ALLOWED_CHILDREN_COMPONENTS.includes(child.type);
      })
      .map((tag, index, tags) => {
        if (title || tags.length > 1) {
          return <List.Item>{tag}</List.Item>;
        }

        return tag;
      });

    if (title || tagElements.length > 1) {
      return (
        // TODO: Export an `UnstyledList` component we can use to prevent
        // override styles like these.
        <List
          aria-labelledby={title && generatedId}
          css={css`
            display: inline-flex;
            list-style: none;
            margin: 0;
            width: 100%;

            > ${List.Item}::before {
              content: '';
            }
          `}
        >
          {tagElements}
        </List>
      );
    }

    return tagElements;
  }, [children, generatedId, title]);

  return (
    <WrapperComponent {...otherProps}>
      {title && <Paragraph id={generatedId}>{title}</Paragraph>}
      {items}
    </WrapperComponent>
  );
};

Tags.defaultProps = {
  children: undefined,
  title: undefined,
};

Tags.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** A description of the group of tags. */
  title: PropTypes.string,
};

// Export Tag as `Tags.Tag`.
Tags.Tag = Tag;

export default Tags;
