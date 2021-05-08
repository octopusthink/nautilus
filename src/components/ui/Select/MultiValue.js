import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import Tags from '../Tags';
import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

const MultiValue = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Tags.Tag
      color={theme.colors.buttons.default}
      css={css`
        margin-bottom: -${toUnits(theme.spacing.padding.xSmall)};
        margin-top: -${toUnits(theme.spacing.padding.xSmall * 2)};
      `}
    >
      {children}
    </Tags.Tag>
  );
};

MultiValue.defaultProps = {
  children: undefined,
};

MultiValue.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

MultiValue.displayName = 'MultiValue';

export default MultiValue;
