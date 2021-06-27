import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import Tags from '../Tags';
import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';

const MultiValueContainer = (props) => {
  const { children, data } = props;
  const theme = useTheme();

  const defaultTagColor = theme.colors.buttons.default;
  const customTagColor = data?.color;

  return (
    <Tags.Tag
      color={customTagColor || defaultTagColor}
      css={css`
        padding: ${toUnits(theme.spacing.padding.xSmall)} ${toUnits(theme.spacing.padding.xLarge)}
          ${toUnits(theme.spacing.padding.xSmall)} ${toUnits(theme.spacing.padding.small)};
        position: relative;
      `}
      {...data?.optionProps}
    >
      {children}
    </Tags.Tag>
  );
};

MultiValueContainer.defaultProps = {
  children: undefined,
  data: {},
};

MultiValueContainer.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};

MultiValueContainer.displayName = 'MultiValueContainer';

export default MultiValueContainer;
