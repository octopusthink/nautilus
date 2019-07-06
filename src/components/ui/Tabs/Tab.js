import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Heading } from 'components';
import { focusStyle } from 'styles';

export const Tab = forwardRef((props, ref) => {
  const { isActive, children, label, labelProps, ...otherProps } = props;

  return (
    <section role="tabpanel" tabIndex="-1" {...otherProps} ref={ref}>
      <Heading level={4}>{label}</Heading>

      {children}
    </section>
  );
});

export const styles = (props) => {
  const { isActive, theme } = props;

  return css`
    ${!isActive &&
      css`
        display: none;
      `}

    &:focus {
      ${focusStyle.outline(theme)};
    }
  `;
};

Tab.defaultProps = {
  isActive: false,
  children: undefined,
  labelProps: {},
};

Tab.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Set this tab section as active. */
  isActive: PropTypes.bool,
  /** Label used for this tab. */
  label: PropTypes.string.isRequired,
  /** Props passed to the label component for this tab. */
  // eslint-disable-next-line react/forbid-prop-types
  labelProps: PropTypes.object,
};

Tab.displayName = 'Tabs.Tab';

export default styled(Tab)(styles);
