import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { pageTitle } from 'styles';
import { useTheme } from 'themes';

export const PageTitle = (props) => {
  const theme = useTheme();
  const { children, documentTitle, ...otherProps } = props;
  // const documentTitleToUse = documentTitle || children;

  return (
    <h1
      css={css`
        ${pageTitle(theme)}
      `}
      {...otherProps}
    >
      {children}
    </h1>
  );
};

PageTitle.defaultProps = {
  children: undefined,
  documentTitle: undefined,
};

PageTitle.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** String to pass to the `<DocumentTitle />` tag if the children of your `<PageTitle />` are more than just text content. */
  documentTitle: PropTypes.string,
};

export const { defaultProps, propTypes } = PageTitle;

export default PageTitle;
