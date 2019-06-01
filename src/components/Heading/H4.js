import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import Heading from './';

// We define `<H4>` for developer convenience.
export const Heading4 = (props) => {
  return <Heading level={4} {...props} />;
};

Heading4.defaultProps = {
  children: undefined,
};

Heading4.propTypes = { ...Heading.PropTypes, level: undefined };

export default styled(Heading4)``;
