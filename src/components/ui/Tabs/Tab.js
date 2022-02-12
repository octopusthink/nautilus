import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { focusStyle } from '../../../styles';
import { useTheme } from '../../../themes';

const Tab = forwardRef((props, ref) => {
  const { isActive, children, label, labelTestId, unstyled, ...otherProps } = props;

  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <section
      css={
        unstyled
          ? undefined
          : css`
              ${!isActive &&
              css`
                display: none;
              `}

              &:focus {
                ${focusStyle.outline(theme)};
              }
            `
      }
      ref={ref}
      role="tabpanel"
      tabIndex="-1"
      {...otherProps}
    >
      {children}
    </section>
  );
});

Tab.defaultProps = {
  isActive: false,
  children: undefined,
  unstyled: false,
};

Tab.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Set this tab section as active. */
  isActive: PropTypes.bool,
  /** Label used for this tab. */
  label: PropTypes.string.isRequired,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

Tab.displayName = 'Tabs.Tab';

export const { defaultProps, propTypes } = Tab;

export default Tab;
