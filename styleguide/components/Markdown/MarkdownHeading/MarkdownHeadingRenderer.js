import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

import Heading from 'rsg-components/Heading';

function MarkdownHeadingRenderer({ level, children, id }) {
  return (
    <Heading level={level} id={id}>
      {children}
    </Heading>
  );
}

MarkdownHeadingRenderer.propTypes = {
  level: PropTypes.oneOf([2, 3, 4]).isRequired,
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Styled(styles)(MarkdownHeadingRenderer);
