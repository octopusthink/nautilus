import { css } from '@emotion/core';

import React from 'react';
import PropTypes from 'prop-types';

import theme from 'styleguide/theme';

export function Playground({
  name,
  preview,
  previewProps,
  tabButtons,
  tabBody,
  toolbar,
}) {
  const { ...props } = previewProps;
  return (
    <div
      css={css`
        border: 2px solid ${theme.colors.neutral.black};
        background: ${theme.colors.neutral.black};
        margin-bottom: ${theme.spacing.margin.xl};
      `}
    >
      <div
        {...props}
        data-preview={name}
        css={css`
          border: 2px solid ${theme.colors.neutral.grey800};
          background: ${theme.colors.neutral.white};
          padding: ${theme.spacing.padding.l};
        `}
      >
        {preview}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: ${theme.spacing.padding.s} ${theme.spacing.padding.m};
        `}
      >
        <div>{tabButtons}</div>
        <div>{toolbar}</div>
      </div>
      <div>{tabBody}</div>
    </div>
  );
}

Playground.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.node.isRequired,
  previewProps: PropTypes.object.isRequired,
  tabButtons: PropTypes.node.isRequired,
  tabBody: PropTypes.node.isRequired,
  toolbar: PropTypes.node.isRequired,
};

export default Playground;
