import styled from '@emotion/styled';
import React from 'react';

import Heading from '.';

// We define `<Heading4>` for developer convenience.
export const Heading4 = (props) => {
  return <Heading level={4} {...props} />;
};

export default styled(Heading4)``;
