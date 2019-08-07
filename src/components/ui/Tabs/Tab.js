import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Heading } from 'components';
import { focusStyle } from 'styles';
import { useTheme } from 'themes';

export const Tab = forwardRef((props, ref) => {
  const { isActive, children, label, labelProps, ...otherProps } = props;

  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <section
      css={css`
        ${!isActive &&
          css`
            display: none;
          `}

        &:focus {
          ${focusStyle.outline(theme)};
        }
      `}
      ref={ref}
      role="tabpanel"
      tabIndex="-1"
      {...otherProps}
    >
      <Heading level={4}>{label}</Heading>

      {children}
    </section>
  );
});

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

export const { defaultProps, propTypes } = Tab;

export default Tab;
