import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { Children, cloneElement, Fragment, useMemo, useState } from 'react';
import shortid from 'shortid';

import List from 'components/ui/List';
import Paragraph from 'components/ui/Paragraph';
import { ComponentClassName as ListItemClassName } from 'components/ui/List/Item';

import Tag from './Tag';

export const Tags = (props) => {
  const { children, label } = props;

  const [generatedId] = useState(shortid.generate());

  const items = useMemo(() => {
    const tagElements = Children.toArray(children).filter((child) => {
      return child.type === Tag;
    });

    if (tagElements.length > 1) {
      return (
        // TODO: Export an `UnstyledList` component we can use to prevent
        // override styles like these.
        <List
          aria-labelledby={label && generatedId}
          css={css`
            display: inline-flex;
            list-style: none;
            margin: 0;
            width: 100%;

            > .${ListItemClassName}::before {
              content: '';
            }
          `}
        >
          {tagElements.map((tag, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <List.Item key={`tag-${index}`}>{tag}</List.Item>;
          })}
        </List>
      );
    }

    if (label) {
      return cloneElement(tagElements[0], { 'aria-labelledby': generatedId });
    }

    return tagElements[0];
  }, [children, generatedId, label]);

  const WrapperComponent = items.length > 1 ? List : Fragment;

  return (
    <>
      {label && (
        <Paragraph // TODO: switch with VisuallyHidden component, once available.
          css={css`
            font-style: bold;
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          `}
          id={generatedId}
        >
          {label}
        </Paragraph>
      )}
      <WrapperComponent>{items}</WrapperComponent>
    </>
  );
};

Tags.defaultProps = {
  children: undefined,
  label: undefined,
};

Tags.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** A description of the group of tags. */
  label: PropTypes.string,
};

// Export Tag as `Tags.Tag`.
Tags.Tag = Tag;

export default Tags;
