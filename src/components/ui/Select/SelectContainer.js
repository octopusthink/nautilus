import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import { InputComponentStyles } from '../TextField';
import { useTheme } from '../../../themes';

const SelectContainer = (props) => {
  const { children, innerProps, isFocused } = props;
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

SelectContainer.defaultProps = {
  children: undefined,
  innerProps: {},
  isFocused: false,
};

SelectContainer.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  innerProps: PropTypes.object,
  /** Boolean to enable/disable the focus styles for this input. */
  isFocused: PropTypes.bool,
};

export default SelectContainer;
