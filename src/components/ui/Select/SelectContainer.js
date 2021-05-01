import { css } from '@emotion/react';
import React from 'react';
import { InputComponentStyles } from '../TextField';
import { useTheme } from '../../../themes';

const SelectContainer = (props) => {
  const { children, innerProps, hint, isFocused, selectProps, ...otherProps } = props;
  const theme = useTheme();

  const inputStyleProps = { ...innerProps, focus: isFocused };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div css={InputComponentStyles(inputStyleProps, theme)} {...innerProps}>
        {children}
      </div>
    </div>
  );
};

export default SelectContainer;
