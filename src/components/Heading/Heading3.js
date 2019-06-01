import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import Heading from './';

// We define `<Heading3>` for developer convenience.
export const Heading3 = (props) => {
  return <Heading level={3} {...props} />;
};

Heading3.defaultProps = {
  children: undefined,
};

Heading3.propTypes = { ...Heading.PropTypes, level: undefined };

export default styled(Heading3)``;
