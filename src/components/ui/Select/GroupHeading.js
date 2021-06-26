import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import { metadata, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

const GroupHeading = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        ${metadata.small(theme)};

        color: ${theme.colors.text.light};
        padding: 0 ${toUnits(theme.spacing.padding.small)} ${toUnits(theme.spacing.padding.small)};
        width: 100%;
      `}
    >
      {children}
    </div>
  );
};

GroupHeading.defaultProps = {
  children: undefined,
};

GroupHeading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export default GroupHeading;
