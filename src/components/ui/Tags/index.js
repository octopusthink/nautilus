import PropTypes from 'prop-types';
import React, { Children, cloneElement, Fragment, useMemo, useState } from 'react';
import shortid from 'shortid';

import List from 'components/ui/List';
import VisuallyHidden from 'components/ui/VisuallyHidden';

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
        <List aria-labelledby={label && generatedId} unstyled>
          {tagElements.map((tag, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <List.Item key={`tag-${index}`}>{tag}</List.Item>
            );
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
    <React.Fragment>
      {label && <VisuallyHidden id={generatedId}>{label}</VisuallyHidden>}
      <WrapperComponent>{items}</WrapperComponent>
    </React.Fragment>
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
