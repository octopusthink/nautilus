import { css } from '@emotion/react';
import React from 'react';

const Flex = ({ children }) => (
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

export default Flex;
