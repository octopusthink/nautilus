import { css } from '@emotion/react';
import React, { FunctionComponent } from 'react';

import { NautilusComponentProps } from '../../types';
import { useTheme } from '../../../themes';

interface Props extends NautilusComponentProps {}

const Strong: FunctionComponent<Props> = (props: Props) => {
  const { children, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <strong
      css={
        unstyled
          ? undefined
          : css`
              background: ${theme.colors.text.strongBackground};
              color: ${theme.colors.text.strong};
              font-weight: ${theme.typography.fontWeights.bodyBold};
            `
      }
      {...otherProps}
    >
      {children}
    </strong>
  );
};

export default Strong;
