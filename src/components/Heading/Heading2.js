import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import Heading from './';

// We define `<Heading2>` for developer convenience.
export const Heading2 = (props) => {
  return <Heading level={2} {...props} />;
};

Heading2.defaultProps = {
  children: undefined,
};

Heading2.propTypes = { ...Heading.PropTypes, level: undefined };

export default styled(Heading2)``;
