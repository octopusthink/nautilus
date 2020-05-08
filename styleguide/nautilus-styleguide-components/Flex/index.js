import { css } from '@emotion/core';
import React from 'react';

const Flex = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  );
};

export default Flex;
