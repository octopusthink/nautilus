import React, { Children } from 'react';
import PropTypes from 'prop-types';

import List from '../../../src/components/ui/List';

export function ListRenderer({ ordered, children }) {
  return (
    <List ordered={ordered}>
      {Children.map(children, (child) => (
        <List.Item {...child.props} />
      ))}
    </List>
  );
}
ListRenderer.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
ListRenderer.defaultProps = {
  ordered: false,
};

export default ListRenderer;
