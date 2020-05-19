import { css } from '@emotion/core';
import React, { FunctionComponent } from 'react';

import { NautilusComponentProps } from '../../types';
import { useTheme } from '../../../themes';

interface Props
  extends React.PropsWithoutRef<JSX.IntrinsicElements['em']>,
    NautilusComponentProps {}

const Emphasis: FunctionComponent<Props> = ({ children, unstyled, ...otherProps }: Props) => {
  const theme = useTheme();

  return (
    <em
      css={
        unstyled
          ? undefined
          : css`
              background: ${theme.colors.text.emphasisBackground};
              color: ${theme.colors.text.emphasis};
              font-style: italic;
            `
      }
      {...otherProps}
    >
      {children}
    </em>
  );
};

export default Emphasis;
