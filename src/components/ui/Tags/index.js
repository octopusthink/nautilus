import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { Children, cloneElement, useMemo, useState } from 'react';
import shortid from 'shortid';

import List from '../List';
import VisuallyHidden from '../VisuallyHidden';
import Tag from './Tag';

const Tags = (props) => {
  const { children, label, ...otherProps } = props;

  const [generatedId] = useState(shortid.generate());

  const items = useMemo(() => {
    const tagElements = Children.toArray(children);

    if (tagElements.length > 1) {
      return (
        <List
          aria-labelledby={label && generatedId}
          unstyled
          css={css`
            display: inline-flex;
            flex-wrap: wrap;
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
          `}
        >
          {tagElements.map((tag, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <List.Item key={`tag-${index}`} unstyled>
              {tag}
            </List.Item>
          ))}
        </List>
      );
    }

    if (label) {
      return cloneElement(tagElements[0], { 'aria-labelledby': generatedId });
    }

    return tagElements[0];
  }, [children, generatedId, label]);

  const WrapperComponent = items.length > 1 ? List : 'div';

  return (
    <React.Fragment>
      {label && <VisuallyHidden id={generatedId}>{label}</VisuallyHidden>}
      <WrapperComponent {...otherProps}>{items}</WrapperComponent>
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
