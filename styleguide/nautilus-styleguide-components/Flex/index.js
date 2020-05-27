import { css } from '@emotion/core';
import React from 'react';

const Flex = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};

export default Flex;
