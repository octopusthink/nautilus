import styled from '@emotion/styled';
import React from 'react';

import Heading from '.';

// We define `<Heading3>` for developer convenience.
export const Heading3 = (props) => {
  return <Heading level={3} {...props} />;
};

export default styled(Heading3)``;
