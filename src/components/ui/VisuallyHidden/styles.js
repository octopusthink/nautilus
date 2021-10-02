import { css } from '@emotion/react';

export const VisuallyHiddenStyles = css`
  border: 0;
  clip-path: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const VisuallyHiddenRevealStyles = css`
  clip-path: none;
  height: auto;
  margin: 0;
  overflow: auto;
  position: static;
  white-space: normal;
  width: auto;
`;
